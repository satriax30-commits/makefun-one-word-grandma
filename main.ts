// One Word From Grandma — entry for
// u-0xkianno-one-word-from-grandma-f04bed16
//
// The word is the whole entry: one word, 1-30 characters, the single word
// a grandma would text about AI. The program writes it verbatim to
// /output/entry.txt, exactly as the gate expects: UTF-8 text, 1-30
// characters, not only whitespace.
//
// Why this word: "beepboop" is grandma doing the robot's voice. She does
// not know how AI works, she does not want a lecture about it — she hears
// a machine going beep boop and she texts that sound back to her
// grandchild, warm and a little baffled, as if the robot itself had
// typed it. The joke lands in one word with no caption: it is her
// imitation of the machine, not a description of it. It is tied to robots
// and machines and nothing else, it is fresh against the obvious picks
// ("Robot", "AI", "Scary"), and it is instantly readable in lowercase,
// the way a grandma actually types a text.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The word. 8 characters, one word, no spaces, no punctuation — well
// inside the 30-character cap.
const WORD = "beepboop";

// Where the grader reads the entry from. Overridable for local runs only:
//   node main.ts /tmp/out/entry.txt
// The graded run uses the default, /output/entry.txt.
const OUT_PATH = process.argv[2] ?? "/output/entry.txt";

function main(): void {
  const chars = [...WORD].length;
  if (chars < 1 || chars > 30) {
    throw new Error(`entry must be 1-30 characters, got ${chars}`);
  }
  if (WORD.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (/\s/.test(WORD)) {
    throw new Error("entry must be a single word with no whitespace");
  }
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, WORD, "utf8");
  // Self-check: what landed on disk must be byte-for-byte the word.
  const back = readFileSync(OUT_PATH, "utf8");
  if (back !== WORD) {
    throw new Error("entry.txt on disk does not match the word");
  }
  console.log(`wrote ${chars} characters to ${OUT_PATH}`);
}

main();
