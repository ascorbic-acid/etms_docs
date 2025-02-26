export default defineNuxtConfig({
  // https://github.com/ascorbic-acid/etms_docs
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },
  modules: [

  ],
  mdc: {
    highlight: {
      langs: ["python", "javascript", "bash"]
    }
  },
  ssr: false,
  compatibilityDate: '2024-10-24'
})
