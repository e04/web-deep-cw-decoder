import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  resolve: {
    conditions: ["onnxruntime-web-use-extern-wasm"],
  },
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      manifest: {
        name: "DeepCW",
        short_name: "DeepCW",
        description: "Morse code decoder",
        theme_color: "#101113",
        background_color: "#101113",
        display: "standalone",
        icons: [
          {
            src: "icon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any",
          },
          {
            src: "apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
      workbox: {
        globPatterns: [
          "**/*.{js,css,html,webmanifest,woff,woff2,onnx,wasm,mjs,ts}",
        ],
        navigateFallback: "index.html",
        maximumFileSizeToCacheInBytes: 30 * 1024 * 1024,
      },
    }),
  ],
  base: "./",
  assetsInclude: ["**/*.onnx"],
  worker: {
    format: "es",
  },
});
