import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { host: "0.0.0.0" },
  assetsInclude: "**/*.PNG",
});