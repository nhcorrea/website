export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'oxygea',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxt/image',
    '@nuxtjs/svg-sprite',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    config: {},
  },

  svgSprite: {
    input: '~/assets/svg/',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/i18n'],

  i18n: {
    locales: [
      {
        name: 'Português',
        code: 'pt',
        iso: 'pt-BR',
        file: 'pt.js',
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.js',
      },
    ],
    langDir: 'locales/',
    defaultLocale: 'pt',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    maxChunkSize: 300000,
    optimization: {
      splitChunks: {
        name: true,
      },
    },
    html: {
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    },
    postcss: {
      plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        tailwindcss: {
          content: [
            './src/components/**/*.{js,ts,vue}',
            './src/layouts/**/*.{js,ts,vue}',
            './src/pages/**/*.{js,ts,vue}',
          ],
        },
        autoprefixer: {},
      },
    },
  },
}
