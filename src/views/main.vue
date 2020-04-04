<template lang="pug">
v-container.frames(fluid)
  v-row(v-if='this.$store.state.linkCount > 0')
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
      }]
    }
  },
  created() {
    this.videoLinks = this.$store.state.videoStore
  },
}
</script>
