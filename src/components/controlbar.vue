<template lang='pug'>
div.mr-5.btn_group
  v-tooltip(bottom v-if='!chat') 聊天室
    template(v-slot:activator='{ on }')
      v-btn(icon='' v-on='on' @click.native='showChat()')
        v-icon mdi-message-text
  v-tooltip(bottom v-if='chat') 聊天室
    template(v-slot:activator='{ on }')
      v-btn(icon='' v-on='on' color='info' @click.native='showChat()')
        v-icon mdi-message-text

  v-tooltip(bottom v-if='playing') 暫停
    template(v-slot:activator='{ on }')
      v-btn(icon='' v-on='on' @click.native='playing = !playing' disabled)
        v-icon mdi-play-pause
  v-tooltip(bottom v-if='!playing') 播放
    template(v-slot:activator='{ on }')
      v-btn(icon='' v-on='on' color='info' @click.native='playing = !playing')
        v-icon mdi-play

  v-tooltip(bottom v-if='!muted') 靜音
    template(v-slot:activator='{ on }')
      v-btn(icon='' v-on='on' @click.native='muted = !muted' disabled)
        v-icon mdi-volume-high
  v-tooltip(bottom v-if='muted') 恢復聲音
    template(v-slot:activator='{ on }')
      v-btn(icon='' v-on='on' color='info' @click.native='muted = !muted')
        v-icon mdi-volume-mute
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
    }
  },
  methods: {
    showChat() {
      this.chat = !this.chat
      this.$store.state.linkStore.chat = this.chat
    }
  },
  updated() {
    this.$log.debug('chat', this.$store.state.linkStore.chat)
    this.$log.debug('playing', this.$store.state.linkStore.playing)
    this.$log.debug('muted', this.$store.state.linkStore.muted)
  }  
}
</script>

<style scoped lang='sass'>
</style>