<template lang='pug'>
v-scroll-y-transition
    v-col.youtube_frame
      v-hover(v-slot:default='{ hover }', close-delay='400')
        div.v_btn
          v-btn(icon=''
                @click.stop='remove'
                color='white'
                absolute
                large
                right
                :style='`opacity: ${hover ? 1 : .2}`'
          )
            v-icon mdi-close-circle
          v-btn(icon=''
                v-if='!vLinkLoop'
                @click.stop='setLoop'
                color='white'
                absolute
                large
                right
                :style='`opacity: ${hover ? 1 : 0}; top: 4em;`'
          )
            v-icon mdi-sync
          v-btn(icon=''
                v-if='vLinkLoop'
                @click.stop='setLoop'
                color='white'
                absolute
                large
                right
                :style='`opacity: ${hover ? 1 : .5}; top: 4em;`'
          )
            v-icon mdi-sync
      youtube(:id='"player-" + vLinkId'
              :video-id='videoLink.videoId'
              ref='youtube'
              width='100%'
              height='100%'
              @playing='playing'
              @ended='ended'
      )
      iframe.youtube_chat(:id='"chat-" + vLinkId'
                          :src='vLinkChat'
                          v-if='this.$store.state.appbar.controlbarStatus.chat'
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
      videoId: String,
      loop: Boolean,
      },
    linkIndex: Number,
  },
  data() {
    return {
      videoCount: this.$store.state.linkStore.videoStore.length,
      chatEmbed: `https://www.youtube.com/live_chat?embed=1&v=${this.videoLink.videoId}&embed_domain=${window.location.hostname}`,
      chatStatus: this.$store.state.appbar.controlbarStatus.chat,
    };
  },
  computed: {
    vLinkIndex() {
      return this.videoLink.index
    },
    vLinkId() {
      return this.videoLink.videoId
    },
    vLinkLoop: {
      get() {
        return this.videoLink.loop
      },
      set(setLoopStatus) {
        this.$store.dispatch('linkStore/updateLoopStatus', setLoopStatus)
      }
    },
    vLinkChat() {
      return this.chatEmbed
    },
    player() {
      return this.$refs.youtube.player
    },
    playingStatus() {
      return this.$store.state.appbar.controlbarStatus.playing
    },
    mutedStatus() {
      return this.$store.state.appbar.controlbarStatus.muted
    },
    loadingCount() {
      return 1 / this.$store.state.linkStore.appbarStatus.linkCount
    }
  },
  mounted() {
    this.player.playVideo()
    this.controlPlaying()
    this.controlMuting()
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
      localStorage.videoLocalStore = JSON.stringify(this.$store.state.linkStore.videoStore)
      const snackbarItem = {
          level: 1,
          messange: `影片刪除`
      }
      this.$store.commit('messanges/bindMessange', snackbarItem)
    },
    playing() {
      // this.$store.appbar.appbarStatus.loadingProgress += this.loadingCount
      // this.vPlaying = this.$store.state.appbar.controlbarStatus.playing
    },
    ended() {
      if (this.vLinkLoop) this.player.seekTo('start'), this.player.playVideo()
    },
    controlPlaying() {
      this.playingStatus ? (this.player.seekTo('end'), this.player.playVideo()) : this.player.pauseVideo()
    },
    controlMuting() {
      this.mutedStatus ? this.player.mute() : this.player.unMute()
    },
    setLoop() {
      this.vLinkLoop = this.vLinkIndex
      this.$log.debug('vIndex: ', this.vLinkIndex)
      this.$log.debug('vIndex: ', this.vLinkLoop)
    }
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
.v_btn
  button
    z-index: 50
</style>
