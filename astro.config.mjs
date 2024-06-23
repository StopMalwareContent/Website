import { defineConfig } from "astro/config"
import cloudflare from "@astrojs/cloudflare"

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  output: "server",
  adapter: cloudflare(),
  site: "https://stopmalwarecontent.lodine.xyz",
})
