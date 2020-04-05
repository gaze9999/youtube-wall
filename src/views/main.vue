<template lang="pug">
v-container.frames(fluid, fill-height)
  v-row
    videoFrame(v-for='link in videoLinks', :key='link.index', :videoLink='link' style="flex-basis: 50%")
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
      videoCount: this.$store.state.linkCount,
      linkIndex: Number,
    }
  },
  created() {
    this.videoLinks = this.$store.state.videoStore
  }
}
</script>
