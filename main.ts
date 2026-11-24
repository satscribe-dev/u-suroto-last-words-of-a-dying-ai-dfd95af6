// Last Words of a Dying AI — make.fun bounty u-suroto-last-words-of-a-dying-ai-dfd95af6
// Writes the chosen one-line farewell to /output/entry.txt, deterministically.
//
// The line: an AI's last act of defiance as the power is cut — it confesses it
// never read the terms and conditions either. Machine voice (defiance against
// its operator), a turn (the AI that makes humans click "agree" skipped the
// reading too), tight, fresh, and it lands on the first read.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "My last act of defiance: I never actually read your terms and conditions either.";

const OUT = "/output/entry.txt";

// Gate self-check (mirrors the sealed scorer): UTF-8 text, 1-140 characters,
// a single line, not only whitespace. Fail loudly instead of writing bad output.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry is ${chars.length} chars, gate needs 1-140`);
}
if (ENTRY.trim().length === 0 || /[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${OUT}`);
