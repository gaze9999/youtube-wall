<template lang='pug'>
div.ml-5.btn_group
  v-btn(icon='' color='red' @click.native='sendMessange')
    v-icon mdi-alert
</template>

<script>
export default {
  name: 'g-testing-bar',
  props: {
  },
  data() {
    return {
      messange: String,
    }
  },
  created() {

  },
  methods: {
    sendMessange() {
      // this.$log.debug(this.$store.state.messanges.snackbar)
      this.$store.dispatch('messanges/bindMessange', 'sss')
      this.$log.debug('snackbar store: ', this.$store.state.messanges.snackbar[0].messange)
    }
  }
}
</script>

<style scoped lang='sass'>
</style>