<template lang="pug">
v-container.frames(fluid)
  v-row
    videoFrame(v-for='link in videoLinks', :key='link.index', :videoLink='link')
</template>

<script>
export default {
  name: 'frame-container',
  components: {
    videoFrame: () => import('@/components/videoFrame.vue')
  },
  data() {
    return {
      videoLinks: [{
        index: Number,
        videoId: String
      }],
      videoCount: this.$store.state.linkCount,
      linkIndex: Number,
    }
  },
  created() {
    this.videoLinks = this.$store.state.videoStore
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