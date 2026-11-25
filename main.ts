/**
 * Invent a Word We Need — entry: "appnesia".
 * Gate (sealed scorer): /output/entry.txt must be UTF-8 text of 1–140
 * characters, not only white space, exactly one line. The guard below
 * refuses to write anything outside that gate, so a bad line can never
 * reach the grader as a silent invalid entry.
 */
import { mkdirSync, writeFileSync } from "node:fs";

export const LINE =
  "appnesia — opening an app and instantly forgetting why you opened it.";

export const OUTPUT_DIR =
  process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
export const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

export function run(): string {
  const trimmed = LINE.trim();
  if (trimmed.length < 1 || trimmed.length > 140) {
    throw new Error(
      `entry must be 1-140 characters, got ${trimmed.length}`,
    );
  }
  if (/\r|\n/.test(LINE)) {
    throw new Error("entry must be exactly one line");
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  return OUTPUT_PATH;
}

run();
