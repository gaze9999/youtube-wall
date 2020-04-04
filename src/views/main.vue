<template lang="pug">
v-container.frames(fluid, fill-height)
  v-row(v-if='videoCount > 0')
    videoFrame(v-for='link in videoLinks', :key='link.index', :videoLink='link')
</template>

<script>
export default {
  name: 'Main',
  components: {
    videoFrame: () => import('@/components/videoFrame.vue')
  },
  data() {
    return {
      videoLinks: [{
        index: Number,
        videoId: String
      }],
      videoCount: this.$store.state.linkCount
    }
  },
  created() {
    this.videoLinks = this.$store.state.videoStore
  },
}
</script>
