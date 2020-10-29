<script>
import Slide1 from '../components/Slide1'
import Slide2 from '../components/Slide2'

export default {
  components: {
    Slide1,
    Slide2
  },

  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<template>
  <Layout>
    <Slide1 />
    <Slide2 />
    <Slide2 />
  </Layout>
</template>
