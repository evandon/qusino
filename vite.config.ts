// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // client entry
        main: "./src/main.ts",
      },
    },
    // Enable SSR build when you run `vite build --ssr`
    ssr: process.env.SSR ? "./src/entry-server.ts" : undefined,
    manifest: true,
  },
  // In dev we want the client entry to be a module script
  // (no special config needed)
});