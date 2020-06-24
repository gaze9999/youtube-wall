<template lang='pug'>
div.pr-2.mr-2.d-flex#control_bar
  v-btn(icon='' small @click.stop='setControlDisplay')
    v-icon(small v-if='!controlbarExpend') mdi-chevron-left
    v-icon(small v-if='controlbarExpend') mdi-chevron-right
  v-scroll-x-transition
    div.btn_group(v-if='controlbarExpend')
      v-tooltip(bottom v-if='!chat') 聊天室
        template(v-slot:activator='{ on }')
          v-btn(icon='' small v-on='on' @click.stop='showChat()' disabled)
            v-icon(small) mdi-message-text
      v-tooltip(bottom v-if='chat') 聊天室
        template(v-slot:activator='{ on }')
          v-btn(icon='' small v-on='on' color='info' @click.stop='showChat()')
            v-icon(small) mdi-message-text

      v-tooltip(bottom v-if='playing') 暫停
        template(v-slot:activator='{ on }')
          v-btn(icon='' small v-on='on' @click.stop='playControl()')
            v-icon(small) mdi-play-pause
      v-tooltip(bottom v-if='!playing') 播放
        template(v-slot:activator='{ on }')
          v-btn(icon='' small v-on='on' color='info' @click.stop='playControl()')
            v-icon(small) mdi-play

      v-tooltip(bottom v-if='!muted') 靜音
        template(v-slot:activator='{ on }')
          v-btn(icon='' small v-on='on' @click.stop='mutedControl')
            v-icon(small) mdi-volume-high
      v-tooltip(bottom v-if='muted') 恢復聲音
        template(v-slot:activator='{ on }')
          v-btn(icon='' small v-on='on' color='info' @click.stop='mutedControl')
            v-icon(small) mdi-volume-mute

      v-tooltip(bottom v-if='linkCount > 0') 分享
        template(v-slot:activator='{ on }')
          v-btn(icon='' small v-on='on' @click.stop='share()')
            v-icon(small) mdi-share-variant
      v-tooltip(bottom v-if='!linkCount > 0') 分享
        template(v-slot:activator='{ on }')
          v-btn(icon='' small v-on='on' @click.stop='share()' disabled)
            v-icon(small) mdi-share-variant

      v-dialog(v-model='shareDialog' max-width='500' transition='dialog-transition')
        v-card.text-center(v-if='shareDialog')
          v-card-title.headline.grey.lighten-2(primary-title) 分享連結
          v-input.share_links(:messages='linksListDisplay' readonly)
          input(:messages='linksListDisplay' readonly style='display: none')
          v-card-actions
            v-spacer
              v-btn(color='info'
                    small
                    @click.stop='copyLinks'
                    v-clipboard:copy='linksListDisplay'
                    v-clipboard:error='onError'
              ) 
                h2.mx-3 複製連結
                v-icon(small) mdi-share-variant
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
      chatEmbed: String,
      shareDialog: false,
      linksList: [],
    }
  },
  computed: {
    linksListDisplay() {
      return `${window.location.href}?link=${this.linksList.join(',')}`
    },
    linkCount() {
      return this.$store.state.linkStore.linkCount
    },
    playing: {
      get() {
        return this.$store.state.appbar.controlbarStatus.playing
      },
      set(setPlayStatus) {
        this.$store.dispatch('appbar/updatePlayStatus', setPlayStatus)
      }
    },
    muted: {
      get() {
        return this.$store.state.appbar.controlbarStatus.muted
      },
      set(setMutedStatus) {
        this.$store.dispatch('appbar/updateMutedStatus', setMutedStatus)
      }
    },
    controlbarExpend: {
      get() {
        return this.$store.state.appbar.appbarStatus.controlbarExpend
      },
      set(setControlbarExpend) {
        this.$store.dispatch('appbar/updateControlbarStatus', setControlbarExpend)
      }
    }
  },
  methods: {
    showChat() {
      this.chat = !this.chat
      this.$store.state.appbar.controlbarStatus.chat = this.chat
    },
    playControl() {
      this.playing = !this.playing
      // this.$store.state.appbar.controlbarStatus.playing = this.playing
      const snackbarItem = {
        level: 1,
        messange: this.playing ? '全部播放' : '全部暫停'
      }
      this.$store.commit('messanges/bindMessange', snackbarItem)
    },
    mutedControl() {
      this.muted = !this.muted
      // this.$store.state.appbar.controlbarStatus.muted = this.muted
      const snackbarItem = {
        level: 1,
        messange: this.muted ? '全部靜音' : '取消全部靜音'
      }
      this.$store.commit('messanges/bindMessange', snackbarItem)
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
        const snackbarItem = {
          level: 1,
          messange: '連結複製成功'
        }
        this.$store.commit('messanges/bindMessange', snackbarItem)
        this.shareDialog = false
      })
    },
    onError() {
      const snackbarItem = {
        level: 1,
        messange: '連結複製失敗'
      }
      this.$store.commit('messanges/bindMessange', snackbarItem)
    },
    setControlDisplay() {
      this.controlbarExpend = !this.controlbarExpend
    },
  },
  updated() {
    this.$log.debug('chat: ', this.$store.state.appbar.controlbarStatus.chat)
    this.$log.debug('playing: ', this.$store.state.appbar.controlbarStatus.playing)
    this.$log.debug('muted: ', this.$store.state.appbar.controlbarStatus.muted)
  }
}
</script>

<style scoped lang='sass'>
#control_bar
  // border-right: 1px solid #aaa
.share_links
  margin: 2rem 1rem
  // border-radius: 4px
  // padding: 0rem .5rem .25rem
  // border: 1px solid #aaa
</style>