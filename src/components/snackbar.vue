<template lang='pug'>
v-snackbar(v-model='snackbar' snackbarText) {{ messange }}
  v-btn(icon='' color='red' @click.native='snackbar = false')
    v-icon mdi-close
</template>

<script>
export default {
  name: 'g-snack-bar',
  props: {
    messange: String,
  },
  data() {
    return {
      snackbar: false,
      snackbarItem: {
        level: this.$store.state.messanges.snackbar[0].level,
        messange: this.$store.state.messanges.snackbar[0].messange,
      },
      messangeCount: this.$store.state.messanges.messangeCount
    }
  },
  computed() {
    if (this.messangeCount > 0) {
      this.snackbar = true
    }
  },
}
</script>

<style scoped lang='sass'>
</style>