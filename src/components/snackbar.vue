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
      snackbar: Boolean,
    }
  },
  created() {
    this.snackbar = false
  },
}
</script>

<style scoped lang='sass'>
</style>