<script>
import Button from '../components/Button'

export default {
  name: 'Slide1',

  components: {
    Button
  },

  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<template>
  <div>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt='Example image' src='~/favicon.png' width='135' />

    <h1 class='text-red-700 font-body text-4xl'>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <div class='home-links my-6 flex justify-center'>
      <!--
      <a href='https://gridsome.org/docs/' target='_blank' rel='noopener'>Gridsome Docs</a>
      <a href='https://github.com/gridsome/gridsome' target='_blank' rel='noopener'>GitHub</a>
      -->
      <Button label='button blue' success />
      <Button label='button red' error />
    </div>
  </div>
</template>
