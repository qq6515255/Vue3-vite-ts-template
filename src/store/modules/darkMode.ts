import { defineStore } from 'pinia';
import { store } from '@/store';

export const useDarkModeStore = defineStore({
  id: 'dark-mode',
  state: () => ({
    darkMode: false,
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
  persist: [
    {
      paths: ['APP_SHOW_MODE'],
      storage: localStorage,
    },
    {
      paths: ['APP_SHOW_MODE'],
      storage: sessionStorage,
    },
  ],
});

export function useDarkModeStoreHook() {
  return useDarkModeStore(store);
}
