<script setup lang="ts" name="Demo">
  import { reactive } from 'vue';

  const contentList = reactive([
    '✔ ⚡ Vue3 + Vite4',
    '✔ 🍕 TypeScript',
    '✔ 🌀 Tailwindcss 原子类框架 + Less变量全局引入',
    '✔ 🍍 Pinia 状态管理',
    '✔ 🌓 支持深色模式',
    '✔ Vue-router 4',
    '✔ 支持 SVG 图标自动注册组件',
    '✔ vw 视口适配',
    '✔ Axios 封装',
    '✔ 打包资源 gzip 压缩',
    '✔ 开发环境支持 Mock 数据',
    '✔ ESLint + Prettier + Stylelint + Git-cz + Husky + Lint-Staged 代码规范',
    '✔ 支持根据提交生成变更日志MD文件',
    '✔ 常用API自动注入全局,各大UI库的样式自定义引入',
    '✔ CI/CD自动上传CDN,Nginx启用brotli压缩',
    '✔ 首屏加载动画',
    '✔ 开发环境调试面板',
  ]);
</script>

<template>
  <div class="demo-content px-[12px]">
    <img
      class="block w-[120px] mx-auto mb-[20px] pt-[30px]"
      alt="Vue logo"
      src="~@/assets/logo_vue3_ts.png"
    />
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883]"> </div>
    <div
      class="text-[24px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]"> 🌱 基于 Vue3 全家桶、TypeScript、Vite 构建工具。 </p>
      <p class="my-[14px] leading-[24px]" v-for="(item, index) in contentList" :key="index">
        {{ item }}
      </p>
    </div>
  </div>
</template>

<style lang="less">
  .test {
    font-size: @font-size-1;
  }
</style>
