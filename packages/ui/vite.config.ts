import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "../../common/src"),
    },
  },
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "components",
      formats: ["es"],
      fileName: "components",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
