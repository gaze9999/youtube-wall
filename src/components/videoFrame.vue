<template lang='pug'>
v-col.youtube_frame
  v-hover(v-slot:default='{ hover }', close-delay='400')
    v-btn(icon='', @click='remove', color='white', absolute, large, right, :style='`opacity: ${hover ? 1 : .2}`')
      v-icon mdi-close-circle
  //- iframe(type='text/html', :src='vLinkInput', width='100%', height='100%')
  youtube(:id='vLinkId' :video-id='videoLink.videoId' ref='youtube' width='100%' height='100%')
  iframe.youtube_chat(v-if='this.$store.state.linkStore.chat' type='text/html' :src='vLinkChat')
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
      videoCount: this.$store.state.linkStore.videoStore.length,
      chatEmbed: `https://www.youtube.com/live_chat?v=${this.videoLink.videoId}&embed_domain=https://gaze9999.github.io/youtube-wall/`,
      chatStatus: this.$store.state.linkStore.chat,
    };
  },
  computed: {
    vLinkId() {
      return `player-${this.videoLink.videoId}`
    },
    vLinkChat() {
      return this.chatEmbed
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
      this.$store.commit('linkStore/removeLink', this.videoLink)
    },
  },
  beforeDestroy() {
    localStorage.videoLocalStore = JSON.stringify(this.$store.state.linkStore.videoStore)
    this.$toastr.i('link removed');    
  },
}
</script>

<style scoped lang='sass'>
.youtube_frame
  position: relative
  display: flex
  flex: 0 50%
  min-height: calc(50vh - 64px)
  max-height: 50%
  &:only-child
    flex: 1
    max-height: 100%
.youtube_chat
  max-width: 50%
  flex-basis: 50%
</style>
