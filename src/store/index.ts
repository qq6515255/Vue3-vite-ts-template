import { createPinia } from 'pinia';
// 引入数据持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const store = createPinia();

store.use(piniaPluginPersistedstate);

export { store };
