/**
 * Parks the Next.js App Router contact API during `output: "export"` builds so
 * `npx next build` succeeds, then restores the file afterward.
 * The source file stays in Git; Cloudflare Pages production uses functions/api/contact.ts.
 */
import { renameSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const route = path.join(root, "src", "app", "api", "contact", "route.ts");
const parked = path.join(root, "src", "app", "api", "contact", "route.ts.parked");

const mode = process.argv[2];

if (mode === "park") {
  if (existsSync(route)) renameSync(route, parked);
  process.exit(0);
}

if (mode === "restore") {
  if (existsSync(parked)) renameSync(parked, route);
  process.exit(0);
}

if (mode === "build") {
  if (existsSync(route)) renameSync(route, parked);
  const result = spawnSync("npx", ["next", "build"], {
    cwd: root,
    stdio: "inherit",
    shell: true,
    env: process.env,
  });
  if (existsSync(parked)) renameSync(parked, route);
  process.exit(result.status ?? 1);
}

console.error("Usage: node scripts/prepare-static-export.mjs <park|restore|build>");
process.exit(1);
