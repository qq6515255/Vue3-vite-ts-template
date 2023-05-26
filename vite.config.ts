import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';

import { createVitePlugins } from './build/vite/plugin';
import { createBuild } from './build/vite/build';
import { createProxy } from './build/vite/proxy';
import { wrapperEnv } from './build/utils';

// 当前工作目录路径
const root: string = process.cwd();

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 环境变量
  const env = loadEnv(mode, root, '');
  const isBuild = command === 'build'; // 是否是构建 serve
  const viteEnv = wrapperEnv(env);
  return {
    base: env.VITE_PUBLIC_PATH || '/',
    plugins: createVitePlugins(viteEnv, isBuild),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: true,
      // 仅在 proxy 中配置的代理前缀， mock-dev-server 才会拦截并 mock
      // doc: https://github.com/pengzhanbo/vite-plugin-mock-dev-server
      proxy: createProxy(),
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${fileURLToPath(
              new URL('./src/styles/var/index.less', import.meta.url),
            )}";`,
          },
          javascriptEnabled: true,
        },
      },
    },
    build: createBuild(viteEnv),
  };
});
