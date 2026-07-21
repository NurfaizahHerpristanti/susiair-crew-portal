export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  modules: [
    "@pinia/nuxt",
  ],

  css: [
    "~/assets/styles/main.scss",
  ],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
})