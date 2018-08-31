export default {
  loading: false,
  head: {
    title: 'Nuxt Test'
  },
  css: [
    '~/css/main.css'
  ],
  generate: {
    routes: [
      '/posts/1'
    ]
  }
}
