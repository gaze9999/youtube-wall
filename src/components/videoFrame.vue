<template lang='pug'>
v-col.youtube_frame
  v-hover(v-slot:default='{ hover }', close-delay='400')
    v-btn(v-if='vPlaying'
          icon=''
          @click='remove'
          color='white'
          absolute
          large
          right
          :style='`opacity: ${hover ? 1 : .2}`'
    )
      v-icon mdi-close-circle
  youtube(:id='"player-" + vLinkId'
          :video-id='videoLink.videoId'
          ref='youtube'
          width='100%'
          height='100%'
          @playing='playing'
  )
  iframe.youtube_chat(:id='"chat-" + vLinkId'
                      :src='vLinkChat'
                      v-if='this.$store.state.linkStore.chat'
                      type='text/html'
                      allowfullscreen
                      dark_theme='1'
  )
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
      chatEmbed: `https://www.youtube.com/live_chat?embed=1&v=${this.videoLink.videoId}&embed_domain=${window.location.hostname}`,
      chatStatus: this.$store.state.linkStore.chat,
      // playingStatus: this.$store.state.linkStore.playing,
      vPlaying: false,
    };
  },
  computed: {
    vLinkId() {
      return this.videoLink.videoId
    },
    vLinkChat() {
      return this.chatEmbed
    },
    player() {
      return this.$refs.youtube.player
    },
    playingStatus() {
      return this.$store.state.linkStore.playing
    },
    mutedStatus() {
      return this.$store.state.linkStore.muted
    },
  },
  mounted() {
    this.player.playVideo()
  },
  watch: {
    playingStatus: function() {
      this.controlPlaying()
    },
    mutedStatus: function() {
      this.controlMuting()
    },
  },
  methods: {
    remove() {
      this.$store.commit('linkStore/removeLink', this.videoLink)
    },
    playing() {
      this.vPlaying = this.$store.state.linkStore.playing
    },
    controlPlaying() {
    this.playingStatus ? (this.player.seekTo('end'), this.player.playVideo()) : this.player.pauseVideo()
    },
    controlMuting() {
    this.mutedStatus ? this.player.mute() : this.player.unMute()
    },
  },
  beforeDestroy() {
    localStorage.videoLocalStore = JSON.stringify(this.$store.state.linkStore.videoStore)
    this.$toastr.i('影片刪除');    
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
  border: 0px
</style>
