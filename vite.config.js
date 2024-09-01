import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@layouts": "/src/layouts",
      "@fixtures": "/src/fixtures",
      "@images": "/public/images",
    },
  },
});
