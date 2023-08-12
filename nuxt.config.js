require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/terekhov/'
  },

  server: {
    port: '3000',
    host: '0.0.0.0',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'emotion',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        name: 'twitter:image',
        content: '/twitter.jpg',
      },
      {
        property: 'og:image',
        content: '/twitter.jpg',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Igor Terekhov',
      },
      { hid: 'theme-color', name: 'theme-color', content: '#1E1E1E' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/styles/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/multiRef.js', ssr: false },
    { src: '@/plugins/touchEvents.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_KEY,
        cacheProvider: 'memory',
      },
    ],
    ['@nuxtjs/dotenv', { filename: `.env.${process.env.NODE_ENV}` }],
  ],

  i18n: {
    langDir: 'locales/',
    locales: [
      { code: 'en', file: 'en.js', iso: 'en-US' },
      { code: 'ru', file: 'ru.js', iso: 'ru' },
    ],
    defaultLocale: 'ru',
    strategy: 'prefix_except_default',
    // seo: true,
    detectBrowserLanguage: false,
    lazy: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      theme_color: '#FDFAF3',
    },
    icon: {
      fileName: 'icon.png',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.glsl$/,
        exclude: '/node_modules/',
        loader: 'webpack-glsl-loader',
      })
    },
  },
  // generate: { fallback: '404.html' },
}
