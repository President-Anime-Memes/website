export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    script: [
      {
        src: 'https://groundlesscobwebmiller.com/bed640522658624db79a5a4634855709/invoke.js',
      },
      { src: 'https://arc.io/widget.min.js#pYnxBdHZ' },
    ],
    title: 'President Anime Memes',
    titleTemplate: '%s | President Anime Memes',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'An anime community for memes and anime character popularity polls!',
      },
      {
        name: 'theme-color', hid: 'theme', content: '#e3242b'
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'og:type',
        content: 'website',
      },
      {
        name: 'og:image',
        content: '/banner.webp',
      },
      {
        name: 'og:image_alt',
        content: 'President Anime Memes Banner',
      },
      {
        name: 'og:title',
        content: 'President Anime Memes',
      },
      {
        name: 'og:description',
        content:
          'An anime community for memes and anime character popularity polls!',
      },
      {
        name: 'og:url',
        content: 'https://presidentanimememes.com/',
      },
      {
        name: 'twitter:type',
        content: 'website',
      },
      {
        name: 'twitter:image',
        content: '/banner.webp',
      },
      {
        name: 'twitter:image_alt',
        content: 'President Anime Memes Banner',
      },
      {
        name: 'twitter:title',
        content: 'President Anime Memes',
      },
      {
        name: 'twitter:description',
        content:
          'An anime community for memes and anime character popularity polls!',
      },
      {
        name: 'twitter:url',
        content: 'https://presidentanimememes.com/',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/style.css', './assets/responsive.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
//    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],
  toast: {
    position: 'top-center',
    register: [
      // Register custom toasts
      {
        name: 'success',
        message: 'Voting success!',
        options: {
          type: 'info',
          duration: 5000,
          class: 'rounded-xl',
        },
      },
      {
        name: 'voted_alr',
        message: 'You have already voted!',
        options: {
          type: 'error',
          duration: 5000,
          class: 'rounded-xl',
        },
      },
      {
        name: 'error',
        message: 'An unknown error occured',
        options: {
          type: 'error',
          duration: 5000,
          class: 'rounded-xl',
        },
      },
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
