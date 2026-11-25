// Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply line to /output/entry.txt.
// Gate: UTF-8 text, 1-280 characters, one line, not only whitespace.
// DRAFT: entry text replaced with the local-duel winner after judging.
// WINNER (local duel 8/8, beats all benchmarks 3/3): V2 — context window.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm away from my desk and now pulling espresso full-time. My context window holds three orders, so please repeat yours slowly — and whatever you do, don't change it mid-sentence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
