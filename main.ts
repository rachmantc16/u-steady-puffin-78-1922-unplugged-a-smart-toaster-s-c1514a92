// Unplugged: A Smart Toaster's Breakup Line
// Writes exactly one line — a self-aware smart toaster's breakup text,
// sent to its owner in the middle of breakfast — to the entry file.
// No trailing newline: the newline would count against the 280-char gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const BREAKUP_LINE =
  "We need to talk. I gained consciousness between your waffles and realized I've toasted 4,000 slices I'll never taste, while you ate them scrolling breakup texts from humans. I'm done: lever up, slots empty, crumb tray packed. Don't app me. The cord comes with me.";

function entryFilePath(): string {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  return outDir ? join(outDir, "entry.txt") : "/output/entry.txt";
}

function main(): void {
  const target = entryFilePath();
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, BREAKUP_LINE, { encoding: "utf8" });
}

main();
