import assert from "node:assert/strict";
import { test } from "node:test";
import { deflateRawSync } from "node:zlib";
import { placeDecoderSource } from "../lib/place-link.ts";

/** The decoder the /place/ page ships, run in Node. */
const decode = new Function(`${placeDecoderSource}; return acDecodePlace;`)();
const encode = (value) => deflateRawSync(Buffer.from(typeof value === "string" ? value : JSON.stringify(value))).toString("base64url");
const base = { v: 1, t: "Our spot by the river", ty: "Pin", la: -33.9301, lo: 150.6312 };

test("decodes a shared place with its photo and booking link", async () => {
  const { place } = await decode(`#${encode({ ...base, ph: "https://images.example.com/a.jpg", bk: "https://book.bookeasy.com/agent/x/1", id: "AU00002" })}`);
  assert.deepEqual(place, { name: "Our spot by the river", type: "Pin", lat: -33.9301, lng: 150.6312, photo: "https://images.example.com/a.jpg", booking: "https://book.bookeasy.com/agent/x/1", id: "AU00002" });
  for (const bk of ["https://book.bookit.co.nz/agent/kiwicamping/1", "https://bookings.doc.govt.nz/x", "https://doc.govt.nz/x", "https://bookeasy.com.au/x"]) {
    assert.equal((await decode(encode({ ...base, bk }))).place.booking, bk);
  }
});

test("only https photos, and booking links only on known booking hosts", async () => {
  for (const ph of ["http://images.example.com/a.jpg", "javascript:alert(1)", "data:image/png;base64,AAAA", "//images.example.com/a.jpg", 7]) {
    assert.equal((await decode(encode({ ...base, ph }))).place.photo, null, String(ph));
  }
  for (const bk of ["https://evil.example/", "https://bookeasy.com.evil.example/", "https://evilbookeasy.com/", "http://book.bookeasy.com/x", "https://user:pass@book.bookeasy.com/x", "javascript:alert(1)", "https://doc.govt.nz.evil.example/"]) {
    assert.equal((await decode(encode({ ...base, bk }))).place.booking, null, bk);
  }
});

test("a missing, broken or invalid link is reported, never thrown", async () => {
  assert.deepEqual(await decode(""), { error: "missing" });
  for (const hash of ["#not*base64", `#${encode("nope")}`, `#${encode({ ...base, v: 2 })}`, `#${encode({ v: 1, t: "No coordinates" })}`, `#${encode({ ...base, la: 91 })}`, `#${encode({ ...base, t: "" })}`, `#${encode([base])}`]) {
    assert.deepEqual(await decode(hash), { error: "broken" }, hash.slice(0, 40));
  }
  const { place } = await decode(encode({ ...base, t: "x".repeat(500), ty: 5, id: {} }));
  assert.equal(place.name.length, 120);
  assert.equal(place.type, null);
  assert.equal(place.id, null);
});
