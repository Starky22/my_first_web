// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// Set PUBLIC_SITE_URL to the real production domain after deploy, e.g. https://example.cz
const site = import.meta.env.PUBLIC_SITE_URL;

// https://astro.build/config
export default defineConfig({
  ...(site ? { site } : {}),
  vite: {
    plugins: [tailwindcss()],
  },
});
