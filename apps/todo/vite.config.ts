import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "todo",
      filename: "remoteEntry.js",
      exposes: {
        "./TodoApp": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "../../packages/ui/src"),
      "@lib": path.resolve(__dirname, "../../packages/lib/src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/App.tsx"),
      formats: ["es"],
      fileName: "todo-app",
    },
    outDir: "dist",
    emptyOutDir: true,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
});
