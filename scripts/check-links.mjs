import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const src = join(root, "src");

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) walk(path, files);
    else if (/\.(tsx|ts)$/.test(path)) files.push(path);
  }
  return files;
}

const routes = new Set();
for (const file of walk(join(src, "app"))) {
  const normalized = file.replaceAll("\\", "/");
  if (!normalized.endsWith("/page.tsx") && !normalized.endsWith("/page.ts")) continue;
  let route = normalized.split("/src/app")[1].replace(/\/page\.tsx$/, "") || "/";
  if (route !== "/") route = route.replace(/\/$/, "");
  routes.add(route);
}
routes.add("/");

const hrefs = [];
for (const file of walk(src)) {
  const text = readFileSync(file, "utf8");
  for (const match of text.matchAll(/href(?:=|:)\s*["'`](\/[^"'`\s]*)["'`]/g)) {
    hrefs.push({ file: file.replace(root, ""), href: match[1] });
  }
}

const broken = [];
for (const item of hrefs) {
  const path = item.href.split("?")[0].split("#")[0] || "/";
  if (path.startsWith("/images") || path.startsWith("/logo")) continue;
  if (!routes.has(path)) broken.push(`${item.href} in ${item.file}`);
}

console.log(`Routes: ${routes.size}`);
console.log(`Internal hrefs: ${hrefs.length}`);
if (broken.length === 0) console.log("Broken links: none");
else {
  console.log("Broken links:");
  for (const line of [...new Set(broken)]) console.log(`- ${line}`);
  process.exitCode = 1;
}
