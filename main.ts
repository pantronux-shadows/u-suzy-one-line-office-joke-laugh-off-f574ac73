import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line about office life, written for the house judge.
// A fixed literal keeps the program's output byte-for-byte deterministic.
const JOKE =
  "I put my two weeks' notice in the office suggestion box \u2014 it's the first piece of employee feedback they've ever actioned.";

// The harness writes artifacts to /output (override with MAKEFUN_OUTPUT_DIR).
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf-8");
