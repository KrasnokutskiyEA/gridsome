<script>
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import debounce from 'lodash.debounce'

export default {
  name: 'Header',

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
    window.addEventListener('resize', this.detectMobile)
  },

  methods: {
    detectMobile () {
      window.innerWidth >= 768
        ? this.$set(this, 'isMobileView', false) : this.$set(this, 'isMobileView', true)
    }
  }
}
</script>

<template>
  <header ref='header' class='text-gray-700 body-font'>
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

    <div v-show='isOpenedMenu' ref='menuList' class='absolute bg-blue-500 w-screen h-screen md:fixed md:mr-10 md:mt-10 right-0 md:w-auto md:h-auto'>
      <nav class='flex flex-wrap flex-col text-base md:w-auto md:h-auto md:flex-row md:ml-auto md:items-center md:justify-center'>
        <g-link class='mr-5 nav__link hover:text-gray-900' to='/'>Home</g-link>
        <a class='mr-5 hover:text-gray-900'>Second Link</a>
        <a class='mr-5 hover:text-gray-900'>Third Link</a>
        <g-link class='mr-5 nav__link hover:text-gray-900' to='/about/'>About</g-link>
      </nav>
    </div>

    <button
      class='fixed mt-10 mr-10 top-0 right-0 md:hidden bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base'
      @click='isOpenedMenu = !isOpenedMenu'
    >
      <svg
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
        class='w-4 h-4 ml-1'
        viewBox='0 0 24 24'
      >
        <path d='M5 12h14M12 5l7 7-7 7' />
      </svg>
    </button>
  </header>
</template>
