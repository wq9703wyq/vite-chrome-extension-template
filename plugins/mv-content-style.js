import * as fs from 'fs';
import * as path from 'path';
import sass from 'sass';

const { resolve } = path;

const root = resolve(__dirname, '..', '..');
const contentStylePath = resolve(root, 'src', 'pages', 'content', 'style.scss');
const outDir = resolve(root, 'public');

export default function mvContentStyle() {
  return {
    name: 'mvContentStyle',
    buildEnd() {
      const contentStyle = fs.readFileSync(contentStylePath, {
        encoding: 'utf-8',
      });
      const translateStyle = sass.compileString(contentStyle);

      fs.writeFileSync(translateStyle, resolve(outDir, 'contentStyle.css'));
    },
  };
}
