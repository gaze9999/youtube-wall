<template lang='pug'>
v-row#inputbar(align-center)
  v-text-field(v-model.trim='inputLink', placeholder='輸入網址', hide-details, @keyup.enter.native='sendLink')
  v-btn.mx-2.font-weight-bold(@click='sendLink', light) 送出
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
          index: this.$store.state.linkIndex,
          videoId: this.filterLink(this.inputLink)
        }
        this.$store.dispatch('updateLinks', link)
        this.inputLink = ''
      } else {
        this.$toastr.e('link not input');
      }
    },
    filterLink(link) {
      var getLink = ''
          // chatEmbed = `https://www.youtube.com/live_chat?v=${getLink}&embed_domain=gaze9999.github.io`
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
