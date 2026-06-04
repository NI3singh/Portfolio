// One-off image optimizer. Converts heavy raster assets to right-sized WebP.
// Display target for achievement cards: ~448px wide card, h-48 image area, object-cover.
// We render at up to 900px wide (retina-safe) for photos, and keep the logo small with alpha.
import sharp from 'sharp';
import { readFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const A = (p) => resolve(process.cwd(), 'src/assets', p);

// [source, output, { width, quality, alpha }]
const jobs = [
  ['Win.JPG', 'Win.webp', { width: 900, quality: 80 }],
  ['0Q7A9268.JPG', 'ScriptWriting.webp', { width: 900, quality: 80 }],
  ['IITG_Certificate.png', 'IITG_Certificate.webp', { width: 900, quality: 80 }],
  ['Finnovate Hackathon.jpg', 'Finnovate.webp', { width: 900, quality: 80 }],
  ['TattvaHackathon.jpg', 'TattvaHackathon.webp', { width: 900, quality: 80 }],
  // Logo shows at ~44px in the navbar; keep transparency, cap at 256px for crispness.
  ['Nitin_Logo.png', 'Nitin_Logo.webp', { width: 256, quality: 85, alpha: true }],
];

const kb = (bytes) => (bytes / 1024).toFixed(1) + ' KB';

for (const [src, out, opts] of jobs) {
  const srcPath = A(src);
  const outPath = A(out);
  // Buffer-read first to avoid file-lock issues on Windows-synced folders.
  const buf = readFileSync(srcPath);
  let pipe = sharp(buf).resize({
    width: opts.width,
    withoutEnlargement: true,
    fit: 'inside',
  });
  pipe = pipe.webp({ quality: opts.quality, alphaQuality: opts.alpha ? 100 : undefined });
  const info = await pipe.toFile(outPath);
  const before = statSync(srcPath).size;
  const after = statSync(outPath).size;
  console.log(
    `${src.padEnd(26)} ${kb(before).padStart(10)} -> ${out.padEnd(24)} ${kb(after).padStart(9)}  (${info.width}x${info.height})`
  );
}
