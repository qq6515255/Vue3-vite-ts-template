/**
 *  Introduces component library styles on demand.
 * https://github.com/anncwb/vite-plugin-style-import
 */
// VantResolve
import { createStyleImportPlugin } from 'vite-plugin-style-import';

// 根据自己的需求配置相关StyleImportor
export function configStyleImportPlugin() {
  return createStyleImportPlugin({
    resolves: [
      // AndDesignVueResolve(),
      // VantResolve(),
      // ElementPlusResolve(),
      // NutuiResolve(),
      // AntdResolve()
    ],
  });
}
