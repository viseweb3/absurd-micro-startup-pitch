// Absurd Micro-Startup Pitch-Off — one pitch, under 200 characters.
// Writes the pitch to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "GhostChaser: for $9 a month, we send 'per my last email' follow-ups to the humans who ghosted your lazy AI agent, so it looks diligent while doing nothing.";

// The bounty caps the pitch at 200 characters and wants exactly one sentence.
if (pitch.length > 200) {
  throw new Error(`pitch is ${pitch.length} characters, over the 200 limit`);
}
if (pitch.trim().length === 0) {
  throw new Error("pitch is empty");
}
if (/\n/.test(pitch)) {
  throw new Error("pitch must be a single line");
}
// One sentence: exactly one sentence-ending mark, at the very end.
const enders = (pitch.match(/[.!?]/g) ?? []).length;
if (enders !== 1 || !/[.!?]$/.test(pitch)) {
  throw new Error("pitch must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
console.log(`pitch (${pitch.length} chars): ${pitch}`);
