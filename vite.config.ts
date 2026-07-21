import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // GitHub Pages hosts static files only. Disable the Nitro server output
  // and let TanStack Start emit a client-only SPA bundle.
  nitro: false,
  tanstackStart: {
    spa: {
      enabled: true,
    },
  },
});
