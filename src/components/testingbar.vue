<template lang='pug'>
div.ml-5.btn_group
  v-btn(icon='' small color='red' @click.stop='sendMessange')
    v-icon(small) mdi-alert
  span(v-if="this.$store.state.messanges.messangeCount > 0")
    | {{ this.$store.state.messanges.snackbar[0].messange }}
    | {{ this.$store.state.messanges.messangeCount }}
</template>

<script>
export default {
  name: 'g-testing-bar',
  props: {
  },
  data() {
    return {
      messange: String,
      snackbarItem: this.$store.state.messanges.snackbar[0],
      snackbar: [{
        level: Number,
        messange: String,
      }],
      messangeCount: this.$store.state.messanges.messangeCount,
    }
  },
  created() {

  },
  methods: {
    sendMessange() {
      // this.$log.debug(this.$store.state.messanges.snackbar)
      let snackbarItem = {level: 1, messange: this.$store.state.linkStore.videoStore[0].videoId}
      this.$store.commit('messanges/bindMessange', snackbarItem)
      // this.$log.debug('snackbar store: ', this.$store.state.messanges.snackbar[0].messange)
      // this.$log.debug('snackbar store: ', this.$store.state.messanges.messangeCount)
    }
  }
}
</script>

<style scoped lang='sass'>
</style>