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
        const link = {
          index: this.$store.state.linkStore.linkIndex,
          videoId: this.filterLink(this.inputLink)
        }
        this.$store.dispatch('linkStore/updateLinks', link)
        this.inputLink = ''
      } else {
        this.$toastr.e('沒輸入連結')
      }
    },
    filterLink(link) {
      var getLink = ''
      this.$log.info('link: ', link)
      link = link.split('/')
      link[0] !== 'https:' ?
        (getLink = link[1]) :
        (getLink = link[3])
      getLink.length > 11 && (
        getLink = getLink.split('watch?v=')[1]
      ) & (
        getLink = getLink.slice(0, 11)
      )
      return getLink
    }
  }
};
</script>

<style scoped lang='sass'>
</style>
