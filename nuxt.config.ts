export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module", "@pinia/nuxt"],
  css: ["vuetify/styles", "~/assets/css/main.css"],
});
