<script>
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import MenuButton from './MenuButton'
import Corona from '~/assets/corona.svg'

export default {
  name: 'Header',

  components: {
    MenuButton,
    Corona
  },

  props: {
    isInvertedColor: { type: Boolean, required: true },
    isMobileView: { type: Boolean, required: true }
  },

  data () {
    return {
      isOpenedMenu: false
    }
  },

  watch: {
    isMobileView (newValue, oldValue) {
      !newValue && oldValue
        ? this.$set(this, 'isOpenedMenu', true) && enableBodyScroll(this.$refs.menuList)
        : this.$set(this, 'isOpenedMenu', false)
    },

    isOpenedMenu (newValue, oldValue) {
      newValue && this.isMobileView
        ? disableBodyScroll(this.$refs.menuList) : enableBodyScroll(this.$refs.menuList)
    }
  },

  beforeMount () {
    this.openMenu()
  },

  beforeDestroy () {
    clearAllBodyScrollLocks()
  },

  methods: {
    toggleMenuButton () {
      this.isOpenedMenu = !this.isOpenedMenu
    },

    openMenu () {
      !this.isMobileView
        ? this.$set(this, 'isOpenedMenu', true) : this.$set(this, 'isOpenedMenu', false)
    }
  }
}
</script>

<template>
  <header ref='header' :class='[isInvertedColor ? "text-royal-sun" : "text-royal-sand", "body-font"]'>
    <!-- logo -->
    <div :class='[isInvertedColor ? "bg-royal-red" : "bg-opacity-50 bg-royal-yellow", "fixed flex flex-wrap px-10 py-5 h-20 flex-row items-center w-screen transition-colors duration-1000 ease-in-out z-10"]'>
      <a class='flex title-font font-medium items-center'>
        <Corona class='fixed w-10 h-10 fill-current rounded-full' />
        <div class='fixed ml-12 text-3xl font-playfair font-bold'>Jewelry</div>
      </a>
    </div>
    <!-- -->

    <!-- menu list -->
    <transition name='fade'>
      <div v-show='isOpenedMenu || !isMobileView' ref='menuList' :class='[{"bg-royal-red": isMobileView}, "flex fixed w-screen h-screen right-0 md:mr-10 md:mt-6 md:w-auto md:h-8 transition-colors duration-1000 ease-in-out z-10"]'>
        <nav class='flex flex-wrap flex-col text-3xl pl-10 mt-4 md:pl-0 md:mt-0 md:text-lg md:w-auto md:h-auto md:flex-row md:ml-auto md:items-center md:justify-center'>
          <g-link class='font-bold font-playfair mb-2 md:mr-5 md:mb-0 nav__link hover:text-gray-900' to='/'>Home</g-link>
          <a class='font-bold font-playfair mb-2 md:mr-5 md:mb-0 hover:text-gray-900'>Second Link</a>
          <a class='font-bold font-playfair mb-2 md:mr-5 md:mb-0 hover:text-gray-900'>Third Link</a>
          <g-link class='font-bold font-playfair nav__link hover:text-gray-900' to='/about/'>About</g-link>
        </nav>
      </div>
    </transition>
    <!-- -->

    <!-- menu button burger -->
    <MenuButton
      :is-opened-menu='isOpenedMenu'
      :is-inverted-color='isInvertedColor'
      class='fixed mt-4 mr-8 top-0 right-0 md:hidden z-10'
      @toggle-menu-button='toggleMenuButton'
    />
    <!-- -->
  </header>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: transform .5s;
}
.fade-enter, .fade-leave-to {
  transform: translateX(-100%);
}
</style>
