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
  <div class='h-screen flex items-center justify-center flex-col border border-gray-600'>
    <!-- <img src='~@/assets/bkg.jpg' class='object-cover w-full h-full'> -->

    <picture class='object-cover w-full h-full'>
      <source srcset='~@/assets/bkg.webp' type='image/webp'>
      <source srcset='~@/assets/bkg.jpg' type='image/jpeg'>
      <img src='~@/assets/bkg.jpg' class='object-cover w-full h-full' alt='bkg'>
    </picture>

    <!--
    <div class='inline'>
      <h1 class='text-red-700 font-body text-4xl inline'>Hello, world!</h1>
    </div>
    -->
  </div>
</template>

<style>
.bg-hero {
  background: url(~@/assets/bkg.jpg) no-repeat center center fixed;
  background-size: cover;
}
</style>
