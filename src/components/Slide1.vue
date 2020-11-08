<script>
// import Button from '../components/Button'

export default {
  name: 'Slide1',

  // components: {
  //   Button
  // },

  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<template>
  <div class='static h-screen flex items-center justify-center flex-col border border-gray-600'>
    <g-image
      src='~/assets/bkg.jpg'
      :immediate='true'
      class='object-cover w-full h-full'
      quality='50'
    />

    <div class='absolute inline'>
      <div class='text-royal-sand font-playfair italic font-bold text-3xl sm:text-5xl xl:text-6xl'>Custom Made</div>
    </div>
  </div>
</template>
