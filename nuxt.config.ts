import { ro } from "vuetify/locale";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
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
