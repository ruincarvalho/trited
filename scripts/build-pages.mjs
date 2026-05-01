import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "out");
const appIndexDir = path.join(root, "app-index");
const appOutDir = path.join(outDir, "app");

await rm(appOutDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await cp(appIndexDir, appOutDir, { recursive: true });

