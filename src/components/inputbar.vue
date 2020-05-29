<template lang='pug'>
v-row#inputbar(align-center)
  v-text-field(v-model.trim='inputLink' placeholder='輸入網址' hide-details @keyup.enter.native='sendLink')
  v-btn.mx-2.font-weight-bold(small @click.stop='sendLink', light) 送出
</template>

<script>
export default {
  name: 'g-input-bar',
  data() {
    return {
      videoLink: {
        index: Number,
        link: String
      },
      inputLink: '',
    };
  },
  methods: {
    sendLink() {
      if (this.inputLink !== '') {

      const findYoutube = /.*(youtu)\.?be.*/i
      const regExp = /.*youtu\.?be.*\/(.*\?v=)?([\S]{11})(&?|\?=).*/i
      let getLink = this.inputLink
      let verifyLink = this.inputLink.replace(findYoutube, '$1')
      this.$log.debug('link: ', getLink)
      this.$log.debug('verify link: ', verifyLink === 'youtu')

      if (verifyLink === 'youtu') {
        const link = {
          index: this.$store.state.linkStore.linkIndex,
          videoId: getLink.replace(regExp, '$2')
        }
        this.$log.debug('final link id: ', link.videoId)
        this.$store.dispatch('linkStore/updateLinks', link)
        return getLink
        } else {
          const snackbarItem = {
            level: 1,
            messange: '這不是有效連結'
          }
          this.$store.commit('messanges/bindMessange', snackbarItem)
        }

      } else {
        const snackbarItem = {
          level: 1,
          messange: '沒輸入連結'
        }
        this.$store.commit('messanges/bindMessange', snackbarItem)
      }
      this.inputLink = ''
    },
  }
};
</script>

<style scoped lang='sass'>
</style>
