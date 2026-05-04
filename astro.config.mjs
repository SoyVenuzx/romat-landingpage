// @ts-check

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
	output: "static",
	// TODO: Replace with real production domain
	site: "https://www.serviciosmedicosromat.com",
	integrations: [
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		robotsTxt({
			policy: [{ userAgent: "*", allow: "/" }],
		}),
	],
});
