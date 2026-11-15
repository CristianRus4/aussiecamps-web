import assert from "node:assert/strict";
import { test } from "node:test";
import { checkImage, imageInfo } from "../places-worker/src/link-image.js";

const bytes = (...parts) => Uint8Array.from(parts.flat());
const u16 = (n) => [(n >> 8) & 0xff, n & 0xff];
const u32 = (n) => [(n >>> 24) & 0xff, (n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff];
const ascii = (text) => [...text].map((char) => char.charCodeAt(0));

/** A JPEG's structure: SOI, an APP0 segment, a frame header (SOF0 by default) with the size, a scan, EOI. */
const jpeg = (width, height, sof = 0xc0) => bytes(
  [0xff, 0xd8],
  [0xff, 0xe0], u16(16), ascii("JFIF\0"), [1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0xff, sof], u16(17), [8], u16(height), u16(width), [3, 1, 0x22, 0, 2, 0x11, 1, 3, 0x11, 1],
  [0xff, 0xda], u16(12), [3, 1, 0, 2, 0x11, 3, 0x11, 0, 0x3f, 0], [0x12, 0x34],
  [0xff, 0xd9],
);
/** A PNG's structure: signature, IHDR with the size, IEND (CRCs are not checked). */
const png = (width, height) => bytes(
  [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
  u32(13), ascii("IHDR"), u32(width), u32(height), [8, 2, 0, 0, 0], u32(0),
  u32(0), ascii("IEND"), [0xae, 0x42, 0x60, 0x82],
);

test("reads the size of a good JPEG and a good PNG", () => {
  assert.deepEqual(imageInfo(jpeg(1200, 630)), { type: "image/jpeg", width: 1200, height: 630 });
  assert.deepEqual(imageInfo(jpeg(1200, 630, 0xc2)), { type: "image/jpeg", width: 1200, height: 630 });
  assert.deepEqual(imageInfo(png(1200, 630)), { type: "image/png", width: 1200, height: 630 });
  assert.deepEqual(checkImage(jpeg(1200, 630), "image/jpeg"), { type: "image/jpeg", width: 1200, height: 630 });
  assert.deepEqual(checkImage(png(1200, 630), "image/png"), { type: "image/png", width: 1200, height: 630 });
});

test("refuses any size but 1200x630", () => {
  assert.match(checkImage(jpeg(1200, 631), "image/jpeg").error, /1200x630, not 1200x631/);
  assert.match(checkImage(png(630, 1200), "image/png").error, /not 630x1200/);
  assert.match(checkImage(png(2400, 1260), "image/png").error, /1200x630/);
});

test("refuses truncated pictures", () => {
  const good = jpeg(1200, 630);
  assert.match(imageInfo(good.subarray(0, good.length - 2)).error, /truncated/);
  assert.match(imageInfo(bytes([0xff, 0xd8, 0xff, 0xe0, 0x00, 0x10, 0xff, 0xd9])).error, /truncated/);
  const picture = png(1200, 630);
  assert.match(imageInfo(picture.subarray(0, 30)).error, /truncated/);
  assert.match(imageInfo(picture.subarray(0, picture.length - 1)).error, /truncated/);
  assert.match(imageInfo(bytes([0xff, 0xd8, 0xff, 0xda, 0x00, 0x02, 0xff, 0xd9])).error, /no frame header/);
});

test("refuses wrong magic bytes, and bytes of another type than declared", () => {
  assert.match(imageInfo(bytes(ascii("<!doctype html><html></html>"))).error, /not a JPEG or PNG/);
  assert.match(checkImage(bytes(ascii("<html><script>alert(1)</script></html>")), "image/png").error, /not a JPEG or PNG/);
  assert.match(imageInfo(bytes([0xff, 0xd8])).error, /not a JPEG or PNG/);
  assert.match(imageInfo(new Uint8Array(0)).error, /not a JPEG or PNG/);
  const gif = bytes(ascii("GIF89a"), u16(1200), u16(630));
  assert.match(imageInfo(gif).error, /not a JPEG or PNG/);
  assert.match(checkImage(png(1200, 630), "image/jpeg").error, /bytes are image\/png, not image\/jpeg/);
  assert.match(checkImage(jpeg(1200, 630), "image/png").error, /bytes are image\/jpeg, not image\/png/);
  assert.match(imageInfo(jpeg(1200, 630, 0xc3)).error, /baseline or progressive/);
});
