// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// import 'typeface-amatic-sc'
import 'typeface-playfair-display-sc'
// import 'typeface-jacques-francois-shadow'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // 1 - preloading font
  head.link.push({
    rel: 'preload',
    href: './assets/fonts/playfair-display-sc-latin-700italic.woff2',
    as: 'font',
    type: 'font/woff2',
    crossorigin: 'anonymous'
  })

  head.link.push({
    rel: 'preload',
    href: './assets/fonts/playfair-display-sc-latin-700.woff2',
    as: 'font',
    type: 'font/woff2',
    crossorigin: 'anonymous'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
