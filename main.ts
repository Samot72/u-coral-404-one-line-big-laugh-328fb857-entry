// One Line, Big Laugh — u-coral-404-one-line-big-laugh-328fb857
// Writes a single original one-liner (max 200 characters, one line, no
// title/setup/explanation) byte-exact, with NO trailing newline, to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22+, no dependencies.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My neighbour's dog barks at me in a tone that suggests he's read my browser history.";

function codePointLength(s: string): number {
  return [...s].length;
}

function validate(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("entry must not be empty or whitespace-only");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (/\s{2,}/.test(line)) {
    throw new Error("entry must not contain doubled whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const n = codePointLength(line);
  if (n < 1 || n > 200) {
    throw new Error(`entry must be 1-200 characters, got ${n}`);
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
validate(ENTRY);
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read back and verify byte-exactness (no trailing newline added).
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error("verification failed: entry.txt does not match the entry");
}
console.log(
  `wrote ${outPath} (${codePointLength(written)} characters, ${Buffer.byteLength(written, "utf8")} bytes, no trailing newline)`,
);
