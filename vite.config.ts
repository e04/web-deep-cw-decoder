import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  optimizeDeps: {
    exclude: ["onnxruntime-web"],
  },
  plugins: [react()],
  base: "./",
});
