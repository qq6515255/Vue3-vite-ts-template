import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
import type { Plugin } from 'vite';

const root: string = process.cwd();

export function createSvgPlugin(): Plugin | Plugin[] {
  return createSvgIconsPlugin({
    // 指定图标文件夹
    iconDirs: [path.resolve(root, 'src/icons/svg')],
    // 指定 symbolId 格式
    symbolId: 'icon-[dir]-[name]',
  });
}
