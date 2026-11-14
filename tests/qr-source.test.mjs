import assert from "node:assert/strict";
import { test } from "node:test";
import { create } from "qrcode/lib/core/qrcode.js";
import { qrSource } from "../lib/qr-source.ts";

/** The encoder /place/ and /trip/ ship, run in Node. */
const { acQrModules, acQrSvg } = new Function(`${qrSource}; return { acQrModules, acQrSvg };`)();
const reference = (text, level, maskPattern) => {
  const { modules } = create([{ data: text, mode: "byte" }], { errorCorrectionLevel: level, maskPattern });
  return Array.from({ length: modules.size }, (_, row) => Array.from({ length: modules.size }, (_, column) => modules.get(row, column) ? 1 : 0));
};
const texts = [
  "https://aussiecamps.app/",
  "https://aussiecamps.app/places/new-south-wales/bents-basin/",
  `https://aussiecamps.app/trip/#${"x".repeat(150)}`,
  `https://aussiecamps.app/place/#${"AbC-_9".repeat(60)}`,
  `https://aussiecamps.app/trip/#${"q".repeat(700)}`,
  `https://aussiecamps.app/trip/#${"Zz09".repeat(500)}`,
  "https://kiwicamping.app/places/canterbury/lake-tekapo-motels-and-holiday-park/",
];

test("matches the qrcode package module for module, at every mask and with the mask it picks", () => {
  for (const text of texts) {
    assert.deepEqual(acQrModules(text), reference(text, "M"), `${text.length} chars`);
    for (let mask = 0; mask < 8; mask += 1) assert.deepEqual(acQrModules(text, mask), reference(text, "M", mask), `${text.length} chars, mask ${mask}`);
  }
});

test("too long for M falls back to L; too long for any code gives null", () => {
  const long = `https://aussiecamps.app/trip/#${"a".repeat(2500)}`;
  assert.deepEqual(acQrModules(long), reference(long, "L"));
  assert.equal(acQrModules(`https://aussiecamps.app/trip/#${"a".repeat(3000)}`), null);
  assert.equal(acQrSvg(`https://aussiecamps.app/trip/#${"a".repeat(3000)}`), null);
});

test("draws the path the same way as the build-time code", async () => {
  const { qrSvg } = await import("../lib/qr.ts");
  const text = "https://aussiecamps.app/places/new-south-wales/bents-basin/";
  assert.deepEqual(acQrSvg(text), qrSvg(text));
});
