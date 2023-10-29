// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss"],
  modules: ["nuxt-icon", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Roboto: true,
      Inter: [400, 500, 700],
    },
  },
});
