<script>
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import MenuButton from './MenuButton'
// import debounce from 'lodash.debounce'

export default {
  name: 'Header',

  components: {
    MenuButton
  },

  props: {
    isInvertedColor: { type: Boolean, required: true }
  },

  data () {
    return {
      isOpenedMenu: false,
      isMobileView: false
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

  created () {
    process.browser && window.addEventListener('resize', this.detectMobile)
    process.browser && this.detectMobile()
  },

  beforeMount () {
    this.openMenu()
  },

  beforeDestroy () {
    clearAllBodyScrollLocks()
  },

  methods: {
    detectMobile () {
      window.innerWidth >= 768
        ? this.$set(this, 'isMobileView', false) : this.$set(this, 'isMobileView', true)
    },

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
  <header ref='header' class='text-gray-700 body-font'>
    <!-- logo -->
    <div ref='headerContent' :class='[isInvertedColor ? "bg-red-600 text-white" : "bg-green-300", "fixed flex flex-wrap px-10 py-5 flex-row items-center w-screen transition-colors duration-500 ease-in-out"]'>
      <a class='flex title-font font-medium items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          class='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full logomy'
          viewBox='0 0 24 24'
        >
          <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' />
        </svg>

        <span class='ml-3 text-xl'>tailblocks</span>
      </a>
    </div>
    <!-- -->

    <!-- menu list -->
    <transition name='fade'>
      <div v-show='isOpenedMenu || !isMobileView' ref='menuList' :class='[isInvertedColor ? "bg-red-600 text-white" : "bg-green-300", "flex fixed w-screen h-screen right-0 md:mr-10 md:mt-6 md:w-auto md:h-8 transition-colors duration-500 ease-in-out"]'>
        <nav class='flex flex-wrap flex-col text-3xl pl-10 mt-4 md:pl-0 md:mt-0 md:text-base md:w-auto md:h-auto md:flex-row md:ml-auto md:items-center md:justify-center'>
          <g-link class='mb-2 md:mr-5 md:mb-0 nav__link hover:text-gray-900' to='/'>Home</g-link>
          <a class='mb-2 md:mr-5 md:mb-0 hover:text-gray-900'>Second Link</a>
          <a class='mb-2 md:mr-5 md:mb-0 hover:text-gray-900'>Third Link</a>
          <g-link class='nav__link hover:text-gray-900' to='/about/'>About</g-link>
        </nav>
      </div>
    </transition>
    <!-- -->

    <!-- menu button burger -->
    <MenuButton
      :is-inverted-color='isInvertedColor'
      :is-opened-menu='isOpenedMenu'
      class='fixed mt-4 mr-8 top-0 right-0 md:hidden'
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
