import { defineConfig } from "astro/config";
import nodejs from "@astrojs/node";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "server",
  adapter: nodejs({
    mode: "middleware", // or 'standalone'
  }),
});
