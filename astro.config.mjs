import {defineConfig} from "astro/config";
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	build: {
		assets: "_assets"
	},
	integrations: [
		astroI18next(),
		tailwind()
	]
});