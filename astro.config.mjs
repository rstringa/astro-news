import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  output: "server",
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "access-control-max-age" : "300"
  // },
  adapter: vercel()
  // image: {
  //   remotePatterns: [{ protocol: "https" }],
  // }
  ,

  integrations: [icon(), react()]
});