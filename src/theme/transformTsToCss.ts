import fs from 'fs';
import path from 'path';
import { cssColorVariables } from '@/theme/color';

const css = `:root {
  ${Object.entries(cssColorVariables)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n')}
}`;

const outputPath = path.resolve(__dirname, 'theme.css');
fs.writeFileSync(outputPath, css);
