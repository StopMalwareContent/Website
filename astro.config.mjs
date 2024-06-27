import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  output: "server",
  adapter: cloudflare(),
  site: "https://stopmalwarecontent.lodine.xyz",
  integrations: [sitemap()]
});