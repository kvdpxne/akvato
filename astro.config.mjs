import {defineConfig} from "astro/config";
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://akvato.com",
  build: {
    assets: "_assets"
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en", // The `defaultLocale` value must present in `locales` keys
          pl: "pl"
        }
      }
    }),
    astroI18next(),
    tailwind()
  ]
});