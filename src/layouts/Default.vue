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
      isInvertedColor: false
    }
  },

  created () {
    gsap.registerPlugin(ScrollTrigger)
  },

  mounted () {
    this.startAnimation()
  },

  methods: {
    startAnimation () {
      ScrollTrigger.create({
        trigger: this.$refs.layout,
        start: 'top top', // 'element scrubber'
        end: '79px 78px', // 'element scrubber'
        onEnter: () => this.$set(this, 'isInvertedColor', true),
        onEnterBack: () => this.$set(this, 'isInvertedColor', false),
        // markers: true
      })
    }
  }
}
</script>

<template>
  <div ref='layout' class='layout'>
    <Header :is-inverted-color='isInvertedColor' />

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
