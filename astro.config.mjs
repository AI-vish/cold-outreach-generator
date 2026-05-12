import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import netlify from '@astrojs/netlify';
 // Use the correct Netlify adapter

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "server", // Change this from "server" to "static" for Netlify
  adapter: netlify(),
  site: "https://binaryvish.netlify.app", // Add your Netlify site URL
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
