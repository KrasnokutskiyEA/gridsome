<script>
export default {
  name: 'Button',

  props: {
    label: { type: String, required: true },
    success: { type: Boolean, required: false },
    error: { type: Boolean, required: false },
    info: { type: Boolean, required: false }
  },

  computed: {
    btnType () {
      return (this.success && 'btn-success') ||
      (this.error && 'btn-error') ||
      (this.info && 'btn-info') || 'btn-primary'
    }
  }
}
</script>

<template>
  <div :class='["btn", btnType ]'>
    {{ label }}
  </div>
</template>
