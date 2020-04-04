<template>
  <v-container
    class="frames"
    fluid
  >
  <v-row v-if="this.$store.state.linkCount > 0">
    <videoFrame
      v-for="link in videoLinks"
      :key="link.index"
      :videoLink="link"
    />
  </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Main',
  components: {
    videoFrame: () => import('@/components/videoFrame.vue')
  },
  props: {
  },
  data() {
    return {
      videoLinks: [{
        index: Number,
        videoLink: String
      }]
    }
  },
  created() {
    this.videoLinks = this.$store.state.videoStore
  },
  methods: {
  }
}
</script>
