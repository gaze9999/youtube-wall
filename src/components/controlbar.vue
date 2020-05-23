<template lang='pug'>
div.mr-5.btn_group
  v-tooltip(bottom v-if='!chat') 聊天室
    template(v-slot:activator='{ on }')
      v-btn(icon='' v-on='on' @click.native='showChat()' disabled)
        v-icon mdi-message-text
  v-tooltip(bottom v-if='chat') 聊天室
    template(v-slot:activator='{ on }')
      v-btn(icon='' v-on='on' color='info' @click.native='showChat()')
        v-icon mdi-message-text

  v-tooltip(bottom v-if='playing') 暫停
    template(v-slot:activator='{ on }')
      v-btn(icon='' v-on='on' @click.native='playControl()')
        v-icon mdi-play-pause
  v-tooltip(bottom v-if='!playing') 播放
    template(v-slot:activator='{ on }')
      v-btn(icon='' v-on='on' color='info' @click.native='playControl()')
        v-icon mdi-play

  v-tooltip(bottom v-if='!muted') 靜音
    template(v-slot:activator='{ on }')
      v-btn(icon='' v-on='on' @click.native='mutedControl')
        v-icon mdi-volume-high
  v-tooltip(bottom v-if='muted') 恢復聲音
    template(v-slot:activator='{ on }')
      v-btn(icon='' v-on='on' color='info' @click.native='mutedControl')
        v-icon mdi-volume-mute
  v-tooltip(bottom v-if='linkCount > 0') 分享
    template(v-slot:activator='{ on }')
      v-btn(icon='' v-on='on' @click.native='share()')
        v-icon mdi-share-variant
  v-tooltip(bottom v-if='!linkCount > 0') 分享
    template(v-slot:activator='{ on }')
      v-btn(icon='' v-on='on' @click.native='share()' disabled)
        v-icon mdi-share-variant
  v-dialog(v-model='shareDialog' max-width='500' transition='dialog-transition')
    v-card.text-center(v-if='shareDialog')
      v-card-title.headline.grey.lighten-2(primary-title) 分享連結
      v-input.share_links(:messages='linksListDisplay' readonly)
      h4 按鈕開發中，請先手動複製
      v-card-actions
        v-spacer
          v-btn(color='info'
                disabled
                @click.native='copyLinks'
                v-clipboard:error='onError'
          ) 複製連結
            v-icon.ml-3 mdi-share-variant
  g-remove-all
</template>

<script>
export default {
  name: 'g-control-bar',
  components: {
    'g-remove-all': () => import('@/components/removeAll.vue'),
  },
  data() {
    return {
      chat: false,
      playing: true,
      muted: false,
      chatEmbed: String,
      shareDialog: false,
      linksList: [],
    }
  },
  methods: {
    showChat() {
      this.chat = !this.chat
      this.$store.state.linkStore.chat = this.chat
    },
    playControl() {
      this.playing = !this.playing
      this.$store.state.linkStore.playing = this.playing
      this.playing ? this.$toastr.i('全部播放') : this.$toastr.i('全部暫停')

    },
    mutedControl() {
      this.muted = !this.muted
      this.$store.state.linkStore.muted = this.muted
      this.muted ? this.$toastr.i('全部靜音') : this.$toastr.i('取消全部靜音')
    },
    share() {
      this.shareDialog = true
      this.linksList = []
      this.$log.debug('store', this.$store.state.linkStore.videoStore)
      this.$store.state.linkStore.videoStore.forEach(element => {        
        this.linksList.push(element.videoId)
      })
      this.$log.debug('linksList: ', this.linksList)
    },
    copyLinks() {
      this.$log.debug('linksListDisplay: ', this.linksListDisplay)
      this.$copyText(this.linksListDisplay).then(() => {
        this.$toastr.i('連結複製成功')
        this.shareDialog = false
      })
    },
    onError() {
      this.$toastr.e('連結複製失敗')
    },
  },
  computed: {
    linksListDisplay() {
      return `${window.location.href}?link=${this.linksList.join(',')}`
    }, 
    linkCount() {
      return this.$store.state.linkStore.linkCount
    },
  },
  updated() {
    this.$log.debug('chat: ', this.$store.state.linkStore.chat)
    this.$log.debug('playing: ', this.$store.state.linkStore.playing)
    this.$log.debug('muted: ', this.$store.state.linkStore.muted)
  }
}
</script>

<style scoped lang='sass'>
.share_links
  margin: 2rem 1rem
  // border-radius: 4px
  // padding: 0rem .5rem .25rem
  // border: 1px solid #aaa
</style>