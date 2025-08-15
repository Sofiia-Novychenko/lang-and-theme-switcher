import { defineConfig } from "vite";

export default defineConfig({
  base: "/lang-and-theme-switcher/",
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash].js`, // головні скрипти з хешем
        chunkFileNames: `assets/[name]-[hash].js`, // чанки з хешем
        assetFileNames: `assets/[name]-[hash].[ext]`, // CSS, картинки з хешем
      },
    },
  },
});
