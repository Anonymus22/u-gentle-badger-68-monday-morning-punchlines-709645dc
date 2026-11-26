import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My snooze button has worked so many Monday mornings, it unionized — and now it snoozes me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
