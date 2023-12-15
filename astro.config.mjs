import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  build: {
    assets: "_assets"
  },
  integrations: [
    tailwind()
  ]
});