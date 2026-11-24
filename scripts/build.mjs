// Build script: bundle game/src/main.ts (TypeScript + three.js) into one
// classic script, game/bundle.js, which game/index.html loads with a plain
// <script> tag. IIFE, minified, no modules, no import maps, no CDN, no
// network at build time beyond the already-installed node_modules. The
// output is deterministic: esbuild writes identical bytes for identical
// input, so a rebuild from the same tree reproduces the same bundle.
import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

const OUTFILE = 'game/bundle.js';

await build({
  entryPoints: ['game/src/main.ts'],
  bundle: true,
  minify: true,
  format: 'iife',
  platform: 'browser',
  target: 'es2020',
  outfile: OUTFILE,
  logLevel: 'info',
});

const bytes = readFileSync(OUTFILE);
const sha = createHash('sha256').update(bytes).digest('hex');
console.log(`bundle: ${OUTFILE} — ${bytes.length} bytes, sha256 ${sha}`);
