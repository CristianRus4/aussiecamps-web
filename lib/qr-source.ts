/**
 * A QR encoder for the browser, for the two pages whose own URL is only known there: /place/ and /trip/
 * carry their payload in the hash, and on a desktop their "Open on iPhone" QR code must encode the full
 * URL so a phone opens that exact place or trip. Every other page draws its code at build time (lib/qr.ts).
 *
 * Plain-JavaScript source, kept as a string so the page ships exactly this code and
 * tests/qr-source.test.mjs checks it module by module against the qrcode package the build uses.
 * Byte mode only, error correction M (L when the text is too long for M), the same mask choice as the
 * package. Defines `acQrModules(text, mask?)` (rows of 0/1, or null when the text cannot fit) and
 * `acQrSvg(text)` (`{ viewBox, path }` in lib/qr.ts's form, or null).
 */
export const qrSource = String.raw`
function acQrModules(text, forcedMask) {
  var bytes = [], utf8 = unescape(encodeURIComponent(text));
  for (var b = 0; b < utf8.length; b++) bytes.push(utf8.charCodeAt(b));
  // Per version 1-40: error correction codewords per block and number of blocks, for L and M.
  var EC = { L: { per: [7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],
                  blocks: [1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25], bits: 1 },
             M: { per: [10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],
                  blocks: [1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49], bits: 0 } };
  function totalCodewords(v) {
    var n = (16 * v + 128) * v + 64;
    if (v >= 2) { var a = Math.floor(v / 7) + 2; n -= (25 * a - 10) * a - 55; if (v >= 7) n -= 36; }
    return Math.floor(n / 8);
  }
  var level, version;
  for (var l = 0; l < 2 && !version; l++) {
    level = EC[l ? "L" : "M"];
    for (var v = 1; v <= 40; v++) {
      if (4 + (v < 10 ? 8 : 16) + 8 * bytes.length <= (totalCodewords(v) - level.per[v - 1] * level.blocks[v - 1]) * 8) { version = v; break; }
    }
  }
  if (!version) return null;

  // The bit stream: mode, length, bytes, terminator, padding.
  var total = totalCodewords(version), ecPer = level.per[version - 1], blockCount = level.blocks[version - 1];
  var dataCount = total - ecPer * blockCount, bits = [];
  function put(value, length) { for (var i = length - 1; i >= 0; i--) bits.push((value >>> i) & 1); }
  put(4, 4); put(bytes.length, version < 10 ? 8 : 16);
  for (var i = 0; i < bytes.length; i++) put(bytes[i], 8);
  if (bits.length + 4 <= dataCount * 8) put(0, 4);
  while (bits.length % 8) bits.push(0);
  var data = [];
  for (i = 0; i < bits.length; i += 8) data.push(parseInt(bits.slice(i, i + 8).join(""), 2));
  for (i = 0; data.length < dataCount; i++) data.push(i % 2 ? 0x11 : 0xEC);

  // Reed-Solomon over GF(256), polynomial 0x11D.
  var exp = [], log = [], x = 1;
  for (i = 0; i < 255; i++) { exp[i] = x; log[x] = i; x <<= 1; if (x & 256) x ^= 0x11D; }
  for (i = 255; i < 512; i++) exp[i] = exp[i - 255];
  function mul(a, c) { return a && c ? exp[log[a] + log[c]] : 0; }
  var gen = [1];
  for (i = 0; i < ecPer; i++) {
    var next = [];
    for (var j = 0; j <= gen.length; j++) next[j] = (j < gen.length ? gen[j] : 0) ^ (j > 0 ? mul(gen[j - 1], exp[i]) : 0);
    gen = next;
  }
  var group2 = total % blockCount, group1 = blockCount - group2, shortData = Math.floor(dataCount / blockCount);
  var blocks = [], ecBlocks = [], offset = 0;
  for (var k = 0; k < blockCount; k++) {
    var size = k < group1 ? shortData : shortData + 1, block = data.slice(offset, offset + size), rem = block.concat(new Array(ecPer).fill(0));
    offset += size;
    for (i = 0; i < size; i++) { var coef = rem[i]; if (coef) for (j = 0; j < gen.length; j++) rem[i + j] ^= mul(gen[j], coef); }
    blocks.push(block); ecBlocks.push(rem.slice(size));
  }
  var codewords = [];
  for (i = 0; i <= shortData; i++) for (k = 0; k < blockCount; k++) if (i < blocks[k].length) codewords.push(blocks[k][i]);
  for (i = 0; i < ecPer; i++) for (k = 0; k < blockCount; k++) codewords.push(ecBlocks[k][i]);

  // The matrix: function patterns (reserved), then the data in the zigzag.
  var n = version * 4 + 17, m = [], reserved = [];
  for (i = 0; i < n; i++) { m.push(new Array(n).fill(0)); reserved.push(new Array(n).fill(false)); }
  function set(r, c, dark) { m[r][c] = dark ? 1 : 0; reserved[r][c] = true; }
  [[0, 0], [n - 7, 0], [0, n - 7]].forEach(function (p) {
    for (var r = -1; r <= 7; r++) for (var c = -1; c <= 7; c++) {
      if (p[0] + r < 0 || p[0] + r >= n || p[1] + c < 0 || p[1] + c >= n) continue;
      set(p[0] + r, p[1] + c, (r >= 0 && r <= 6 && (c === 0 || c === 6)) || (c >= 0 && c <= 6 && (r === 0 || r === 6)) || (r >= 2 && r <= 4 && c >= 2 && c <= 4));
    }
  });
  for (i = 8; i < n - 8; i++) { set(i, 6, i % 2 === 0); set(6, i, i % 2 === 0); }
  if (version > 1) {
    var count = Math.floor(version / 7) + 2, step = n === 145 ? 26 : Math.ceil((n - 13) / (2 * count - 2)) * 2, coords = [n - 7];
    for (i = 1; i < count - 1; i++) coords[i] = coords[i - 1] - step;
    coords.push(6); coords.reverse();
    for (i = 0; i < count; i++) for (j = 0; j < count; j++) {
      if ((i === 0 && j === 0) || (i === 0 && j === count - 1) || (i === count - 1 && j === 0)) continue;
      for (var r = -2; r <= 2; r++) for (var c = -2; c <= 2; c++) set(coords[i] + r, coords[j] + c, r === -2 || r === 2 || c === -2 || c === 2 || (r === 0 && c === 0));
    }
  }
  function bch(value, poly, degree) {
    var d = value << degree;
    while (d.toString(2).length - poly.toString(2).length >= 0) d ^= poly << (d.toString(2).length - poly.toString(2).length);
    return (value << degree) | d;
  }
  function format(mask) {
    var f = bch((level.bits << 3) | mask, 0x537, 10) ^ 0x5412;
    for (var i = 0; i < 15; i++) {
      var dark = (f >> i) & 1;
      set(i < 6 ? i : i < 8 ? i + 1 : n - 15 + i, 8, dark);
      set(8, i < 8 ? n - i - 1 : i < 9 ? 15 - i : 15 - i - 1, dark);
    }
    set(n - 8, 8, 1);
  }
  format(0);
  if (version >= 7) {
    var vbits = bch(version, 0x1F25, 12);
    for (i = 0; i < 18; i++) { var dark = (vbits >> i) & 1, row = Math.floor(i / 3), col = i % 3 + n - 11; set(row, col, dark); set(col, row, dark); }
  }
  var bit = 0, up = -1, row2 = n - 1;
  for (var col2 = n - 1; col2 > 0; col2 -= 2) {
    if (col2 === 6) col2--;
    for (;;) {
      for (c = 0; c < 2; c++) {
        if (!reserved[row2][col2 - c]) {
          var byte = codewords[bit >> 3];
          m[row2][col2 - c] = byte !== undefined && (byte >>> (7 - (bit & 7))) & 1 ? 1 : 0;
          bit++;
        }
      }
      row2 += up;
      if (row2 < 0 || row2 >= n) { row2 -= up; up = -up; break; }
    }
  }

  function masked(p, r, c) {
    switch (p) {
      case 0: return (r + c) % 2 === 0;
      case 1: return r % 2 === 0;
      case 2: return c % 3 === 0;
      case 3: return (r + c) % 3 === 0;
      case 4: return (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0;
      case 5: return (r * c) % 2 + (r * c) % 3 === 0;
      case 6: return ((r * c) % 2 + (r * c) % 3) % 2 === 0;
      default: return ((r * c) % 3 + (r + c) % 2) % 2 === 0;
    }
  }
  function apply(p) { for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) if (!reserved[r][c] && masked(p, r, c)) m[r][c] ^= 1; }
  // The qrcode package's penalty, rule for rule, so both pick the same mask.
  function penalty() {
    var points = 0, dark = 0, r, c;
    for (r = 0; r < n; r++) {
      var sameRow = 0, sameCol = 0, lastRow = null, lastCol = null, bitsRow = 0, bitsCol = 0;
      for (c = 0; c < n; c++) {
        var a = m[r][c], b = m[c][r];
        if (a === lastRow) sameRow++; else { if (sameRow >= 5) points += 3 + sameRow - 5; lastRow = a; sameRow = 1; }
        if (b === lastCol) sameCol++; else { if (sameCol >= 5) points += 3 + sameCol - 5; lastCol = b; sameCol = 1; }
        bitsRow = ((bitsRow << 1) & 0x7FF) | a; bitsCol = ((bitsCol << 1) & 0x7FF) | b;
        if (c >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points += 40;
        if (c >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points += 40;
        dark += a;
      }
      if (sameRow >= 5) points += 3 + sameRow - 5;
      if (sameCol >= 5) points += 3 + sameCol - 5;
    }
    for (r = 0; r < n - 1; r++) for (c = 0; c < n - 1; c++) { var s = m[r][c] + m[r][c + 1] + m[r + 1][c] + m[r + 1][c + 1]; if (s === 0 || s === 4) points += 3; }
    return points + Math.abs(Math.ceil(dark * 100 / (n * n) / 5) - 10) * 10;
  }
  var best = forcedMask;
  if (best === undefined) {
    var lowest = Infinity;
    for (var p = 0; p < 8; p++) { format(p); apply(p); var score = penalty(); apply(p); if (score < lowest) { lowest = score; best = p; } }
  }
  apply(best); format(best);
  return m;
}
function acQrSvg(text) {
  var m = acQrModules(text);
  if (!m) return null;
  var n = m.length, path = "";
  for (var r = 0; r < n; r++) {
    var c = 0;
    while (c < n) {
      if (!m[r][c]) { c++; continue; }
      var start = c;
      while (c < n && m[r][c]) c++;
      path += "M" + start + " " + r + "h" + (c - start) + "v1h-" + (c - start) + "z";
    }
  }
  return { viewBox: "-1 -1 " + (n + 2) + " " + (n + 2), path: path };
}`;

/**
 * Redraws each "Open on iPhone" code (`svg[data-page-qr]`) from the page's own URL, hash included (query
 * left out), on load and whenever the hash changes. It runs everywhere, but the code only shows on a
 * desktop; when the URL is too long for any QR code the build-time code stays.
 */
export const pageQrScript = `(function(){${qrSource}
function draw(){var qr=acQrSvg(location.origin+location.pathname+location.hash);if(!qr)return;
document.querySelectorAll("svg[data-page-qr]").forEach(function(svg){svg.setAttribute("viewBox",qr.viewBox);var path=svg.querySelector("path");if(path)path.setAttribute("d",qr.path);});}
draw();window.addEventListener("hashchange",draw);
})();`;
