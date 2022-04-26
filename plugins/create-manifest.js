import * as fs from 'fs';
import * as path from 'path';
import manifest from '../src/manifest.js';

const { resolve } = path;
const outDir = resolve(__dirname, '..', 'public');

export default function createManifest() {
  return {
    name: 'create-manifest',
    buildEnd() {
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
      }

      const manifestPath = resolve(outDir, 'manifest.json');

      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    },
  };
}
