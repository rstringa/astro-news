import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  output: "server",
  adapter: vercel()
  // image: {
  //   remotePatterns: [{ protocol: "https" }],
  // }
  ,
  integrations: [icon()]
});