// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import 'typeface-amatic-sc'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // 1 - preloading font
  head.link.push({
    rel: 'preload',
    href: './assets/fonts/amatic-sc-latin-400.woff2',
    as: 'font',
    type: 'font/woff2',
    crossorigin: 'anonymous'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
