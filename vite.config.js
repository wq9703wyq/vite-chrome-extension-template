import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import createManifest from './plugins/create-manifest';
import mvContentStyle from './plugins/mv-content-style';

// https://vitejs.dev/config/
const root = resolve(__dirname, 'src');
const pagesDir = resolve(root, 'pages');
const outDir = resolve(__dirname, 'dist');
const assetsDir = resolve(root, 'assets');
const publicDir = resolve(__dirname, 'public');

export default defineConfig({
  plugins: [vue(), createManifest(), mvContentStyle()],
  resolve: {
    alias: [
      { find: '/@', replacement: root },
      { find: '/@assets', replacement: assetsDir },
      { find: '/@pages', replacement: pagesDir },
    ],
  },
  publicDir,
  build: {
    outDir,
    rollupOptions: {
      input: {
        devtools: resolve(pagesDir, 'devtools', 'index.html'),
        // panel: resolve(pagesDir, "panel", "index.html"),
        content: resolve(pagesDir, 'content', 'index.js'),
        backend: resolve(pagesDir, 'backend', 'index.js'),
        popup: resolve(pagesDir, 'popup', 'index.html'),
        options: resolve(pagesDir, 'options', 'index.html'),
      },
      output: {
        entryFileNames: (chunk) => `src/pages/${chunk.name}/index.js`,
      },
    },
  },
});
