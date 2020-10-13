<script>
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import MenuButton from './MenuButton'
// import debounce from 'lodash.debounce'

export default {
  name: 'Header',

  components: {
    MenuButton
  },

  data () {
    return {
      isOpenedMenu: true,
      isMobileView: false
    }
  },

  watch: {
    isMobileView (newValue, oldValue) {
      !newValue && oldValue
        ? this.$set(this, 'isOpenedMenu', true) : this.$set(this, 'isOpenedMenu', false)
    },

    isOpenedMenu (newValue, oldValue) {
      newValue && this.isMobileView
        ? disableBodyScroll(this.$refs.menuList) : enableBodyScroll(this.$refs.menuList)
    }
  },

  created () {
    process.browser && window.addEventListener('resize', this.detectMobile)
  },

  beforeDestroy () {
    clearAllBodyScrollLocks()
  },

  mounted () {
    this.detectMobile()
  },

  methods: {
    detectMobile () {
      window.innerWidth >= 768
        ? this.$set(this, 'isMobileView', false) : this.$set(this, 'isMobileView', true)
    },

    toggleMenuButton () {
      this.isOpenedMenu = !this.isOpenedMenu
    }
  }
}
</script>

<template>
  <header ref='header' class='text-gray-700 body-font'>
    <!-- logo -->
    <div class='fixed flex flex-wrap p-10 flex-row items-center bg-green-300 w-screen'>
      <a class='flex title-font font-medium items-center text-gray-900'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          class='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
          viewBox='0 0 24 24'
        >
          <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' />
        </svg>

        <span class='ml-3 text-xl'>tailblocks</span>
      </a>
    </div>
    <!-- -->

    <!-- menu list -->
    <div v-show='isOpenedMenu' ref='menuList' class='fixed bg-blue-500 w-screen h-screen right-0 md:mr-10 md:mt-10 md:w-auto md:h-auto'>
      <nav class='flex flex-wrap flex-col text-base md:w-auto md:h-auto md:flex-row md:ml-auto md:items-center md:justify-center'>
        <g-link class='mr-5 nav__link hover:text-gray-900' to='/'>Home</g-link>
        <a class='mr-5 hover:text-gray-900'>Second Link</a>
        <a class='mr-5 hover:text-gray-900'>Third Link</a>
        <g-link class='mr-5 nav__link hover:text-gray-900' to='/about/'>About</g-link>
      </nav>
    </div>
    <!-- -->

    <!-- menu button burger -->
    <MenuButton
      :is-opened-menu='isOpenedMenu'
      class='fixed mt-10 mr-10 top-0 right-0 md:hidden py-1 px-3'
      @toggle-menu-button='toggleMenuButton'
    />
    <!-- -->
  </header>
</template>
