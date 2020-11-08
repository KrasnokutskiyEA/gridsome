<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '../components/Header'

export default {
  components: {
    Header
  },

  data () {
    return {
      isInvertedColor: false,
      isMobileView: window.innerWidth <= 768
    }
  },

  created () {
    gsap.registerPlugin(ScrollTrigger)
    process.browser && window.addEventListener('resize', this.detectMobile)
  },

  mounted () {
    this.startAnimation()
  },

  methods: {
    startAnimation () {
      ScrollTrigger.create({
        trigger: this.$refs.layout,
        start: 'top 7px', // 'element scrubber'
        end: '80px 7px', // 'element scrubber'
        onLeave: () => this.$set(this, 'isInvertedColor', true),
        onEnterBack: () => this.$set(this, 'isInvertedColor', false)
        // onLeave: () => console.log('------LEFT ARAEA'),
        // markers: true
      })
    },

    detectMobile () {
      window.innerWidth >= 768
        ? this.$set(this, 'isMobileView', false) : this.$set(this, 'isMobileView', true)
    }
  }
}
</script>

<template>
  <div ref='layout' class='layout'>
    <Header :is-inverted-color='isInvertedColor' :is-mobile-view='isMobileView' />

    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  overflow-y: scroll; /* Add the ability to scroll with hidden scrollbar */

   /* Hide scrollbar */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
    display: none;
}
</style>
