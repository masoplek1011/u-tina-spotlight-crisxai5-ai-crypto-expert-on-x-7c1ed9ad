// Spotlight entry for make.fun: "Spotlight @crisxai5: AI & Crypto Expert on X".
// The entry itself is the public X post (image + caption) that introduces
// @crisxai5 as a must-follow AI and crypto expert. This program does exactly
// one thing: it hands POST.json over to the grader's output directory, so the
// house can read the post's address and fetch its public engagement counts.
// It never touches the network and never writes anything inside this repo,
// because the grader runs it in a read-only container.
//
// Local check (mirrors the grader):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
} catch (error) {
  console.error(`could not copy POST.json out of ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
