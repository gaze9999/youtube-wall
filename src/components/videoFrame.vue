<template lang="pug">
v-col.youtube_frame
  v-hover(v-slot:default='{ hover }', close-delay='400')
    v-btn(icon='', @click='remove', color='white', absolute, large, right, :style='`opacity: ${hover ? 1 : .2}`')
      v-icon mdi-close-circle
  //- iframe(type='text/html', :src='vLinkInput', width='100%', height='100%')
  youtube(:id='vLinkId' :video-id='videoLink.videoId' ref='youtube' width='100%' height='100%')
</template>

<script>
export default {
  name: 'g-video-frame',
  props: {
    videoLink: {
      index: Number,
      videoId: String
      },
    linkIndex: Number,
  },
  data() {
    return {
      videoCount: this.$store.state.videoStore.length,
    };
  },
  computed: {
    vLinkId() {
      return `player-${this.videoLink.videoId}`
    },
    player() {
      return this.$refs.youtube.player
    },
  },
  mounted() {
    this.player.playVideo()
  },
  methods: {
    remove() {
      this.$store.commit('removeLink', this.videoLink)
      localStorage.videoLocalStore = JSON.stringify(this.$store.state.videoStore)
      this.$toastr.i("link removed");
    },
  }
}
</script>

<style scoped lang="sass">
.youtube_frame
  position: relative
  flex: 0 50%
  min-height: calc(50vh - 64px)
  max-height: 50%
  &:only-child
    flex: 1
    max-height: 100%
</style>
