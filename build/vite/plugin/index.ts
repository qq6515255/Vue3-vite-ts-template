import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import mockDevServerPlugin from 'vite-plugin-mock-dev-server';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import viteCompression from 'vite-plugin-compression';
import { createHtmlPlugin } from 'vite-plugin-html';
import { createSvgPlugin } from './svg';
import { configAutoComponentsPlugin } from './autocomponents';
import { configAutoImportPlugin } from './autoImport';
import { configStyleImportPlugin } from './styleImport';

export function createVitePlugins(viteEnv: any, isBuild: boolean) {
  console.log('isBuild=>', isBuild);
  const plugins = [
    vue(),
    vueJsx(),
    // 允许 setup 语法糖上添加组件名属性
    vueSetupExtend(),
    //mock
    mockDevServerPlugin(),
    // svg icon
    createSvgPlugin(),
    // 注入模板数据 控制Debug工具

    createHtmlPlugin({
      inject: {
        data: {
          ENABLE_ERUDA: String(viteEnv.VITE_ENABLE_ERUDA) || 'false',
        },
      },
    }),
    // 生产环境 gzip 压缩资源
    viteCompression(),
    configAutoComponentsPlugin(),
    configAutoImportPlugin(),
    configStyleImportPlugin(),
  ];

  return plugins;
}
