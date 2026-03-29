import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      manifest: {
        name: "web-deep-cw-decoder",
        short_name: "CW Decoder",
        description: "Browser-based real-time Morse code decoder.",
        theme_color: "#101113",
        background_color: "#101113",
        display: "standalone",
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
