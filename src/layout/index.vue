<script setup lang="ts">
  import { useCachedViewStoreHook } from '@/store/modules/cachedView';
  import { computed } from 'vue';

  const cachedViews = computed(() => {
    return useCachedViewStoreHook().cachedViewList;
  });
</script>

<template>
  <div class="app-wrapper">
    <router-view v-slot="{ Component }">
      <keep-alive :include="cachedViews">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style lang="less" scoped>
  @import '@/styles/mixin.less';

  .app-wrapper {
    position: relative;
    width: 100%;
    .clearfix();
  }
</style>
