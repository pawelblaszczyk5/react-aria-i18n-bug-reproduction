import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import optimizeLocales from "@react-aria/optimize-locales-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      ...optimizeLocales.vite({
        locales: ["en-US"],
      }),
      enforce: "pre",
    },
    react(),
  ],
});
