import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // GitHub Pages serves static files only. Nitro rewrites the server build
  // that TanStack Start temporarily uses to render the SPA shell, which makes
  // the post-build prerender request fail with a 500 Response.
  nitro: false,
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index",
      },
    },
  },
});
