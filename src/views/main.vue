<template lang='pug'>
v-container.frames(fluid)
  v-row(v-if='this.$store.state.linkStore.videoStore.length > 0')
    g-video-frame(v-for='link in videoLinks', :key='link.index', :videoLink='link')
</template>

<script>
export default {
  name: 'g-frame-container',
  components: {
    'g-video-frame': () => import('@/components/videoFrame.vue')
  },
  data() {
    return {
      videoLinks: [{
        index: Number,
        videoId: String
      }],
      videoCount: this.$store.state.linkStore.videoStore.length,
    }
  },
  created() {
    this.videoLinks = this.$store.state.linkStore.videoStore
    this.$log.debug('weburl: ', window.location.href)
    this.$log.debug('params: ', this.$route.query.link)
    if (this.$route.query.link) {
      const paramLinks = this.$route.query.link.split(',')
      paramLinks.forEach(element => {
        const link = {
          index: this.$store.state.linkStore.linkIndex,
          videoId: element,
        }
        this.$store.dispatch('linkStore/updateLinks', link)
      })
    this.$router.replace('')
    }
  },
  updated() {
    this.$log.debug('videoLinks: ', this.videoLinks)
    this.$log.debug('videoCount: ', this.$store.state.linkStore.videoStore.length)
  },
}
</script>

<style scoped lang='sass'>
.frames
  min-height: calc(100vh - 64px)
  display: flex
  flex-flow: row wrap
  position: relative
</style>