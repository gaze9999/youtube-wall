<template lang='pug'>
v-snackbar(v-model='snackbarDisplay' snackbarText :timeout='timeout') {{ snackbarItem.messange }}
  v-btn(icon='' small color='red' @click.stop='snackbar = false')
    v-icon(small) mdi-close
</template>

<script>
export default {
  name: 'g-snack-bar',
  data() {
    return {
      snackbarDisplay: false,
      timeout: 2000,
    }
  },
  computed: {
    snackbarItem() {      
      return {
        level: this.$store.state.messanges.snackbar.level,
        messange: this.$store.state.messanges.snackbar.messange,
      }
    },
    messageCount() {
      return this.$store.state.messanges.messangeCount
    },
  },
  watch: {
    messageCount: function() {
      this.snackbarDisplay = this.snackbarItem
      // this.$store.state.messanges.messangeCount = 0
      this.$log.debug('snackbar message: ', this.snackbarItem)
      this.$log.debug('snackbar count: ', this.$store.state.messanges.messangeCount)
    }
  }
}
</script>

<style scoped lang='sass'>
</style>