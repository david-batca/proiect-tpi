import { ro } from "vuetify/locale";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      timezone: process.env.TZ,
    },
  },
  modules: ["vuetify-nuxt-module", "@pinia/nuxt"],
  vuetify: {
    vuetifyOptions: {
      labComponents: true,
      locale: {
        locale: "ro",
        messages: { ro },
      },
    },
  },
});
