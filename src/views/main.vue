<template lang="pug">
v-container.frames(fluid)
  v-row(v-if='videoCount > 0')
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
      videoCount: this.$store.state.videoStore.length,
    }
  },
  created() {
    if (this.$store.state.videoStore.length > 0) {
      this.videoLinks = this.$store.state.videoStore
    }
  },
  updated() {
    this.videoCount = this.$store.state.videoStore.length
    this.$log.debug('videoLinks: ', this.videoLinks)
    this.$log.debug('videoCount: ', this.$store.state.videoStore.length)
  },
}
</script>

<style scoped lang="sass">
.frames
  min-height: calc(100vh - 64px)
  display: flex
  flex-flow: row wrap
  position: relative
</style>