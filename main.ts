import * as fs from "node:fs";
import * as path from "node:path";

// The Worst App Idea Ever Pitched
// Entry for repo yusfiyan/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23
// One sentence, at most 240 characters, pitching the worst, most useless app
// imaginable: a product that sounds real, a founder who sounds certain, and
// a function nobody on earth needs. The pitch: a paid social network where
// dogs rate fire hydrants — a problem no dog owner has, solved with total
// deadpan confidence and a monthly subscription. The $9.99-a-month detail is
// the joke's engine: a founder so certain of this useless idea that he
// charges for it. Entry is 199 characters, one sentence, no padding.

const ENTRY =
  "HydrantHub is a $9.99-a-month social network where dogs rate every fire hydrant in your neighbourhood, so your pup can finally find the five-star lampposts the good boys on your street already trust.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Gate guard: the sealed scorer requires UTF-8 text of 1 to 240 characters,
// not only white space. Refuse to write anything that would fail the gate.
if (ENTRY.length < 1 || ENTRY.length > 240) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1-240 gate`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry has leading or trailing white space");
}

const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, ENTRY, "utf8");
