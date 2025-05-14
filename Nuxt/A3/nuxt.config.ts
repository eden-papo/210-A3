//Eden Papo u24685349

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      strapiBase: process.env.STRAPI_BASE_URL || 'http://localhost:1337',
    },
  },
  css: ['~/assets/main.css'],
  modules: [
    '@nuxt/content'
    ]
})

