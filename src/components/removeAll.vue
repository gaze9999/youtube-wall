<template lang='pug'>
  v-dialog(v-model='dialog' max-width='500' transition='dialog-transition')
    template(v-slot:activator='{ on }')
      v-btn(icon='' small v-on='on' color='white')
        v-icon(small) mdi-close
    v-card.text-center
      v-card-title.headline.grey.lighten-2(primary-title) 清除全部
      v-card-text 確定要清除全部影片?
      v-card-actions
        v-spacer
          v-btn.mx-3(small color='info' @click.stop='dialog = false') 不要
          v-btn.mx-3(small color='success' @click.stop='removeAll') 好
</template>

<script>
export default {
  name: 'g-remove-all',
  props: {
    videoStore: [{
      index: Number,
      videoId: String
    }],
    linkCount: Number,
    linkIndex: Number,
    videoWidth: String    
  },
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    removeAll() {
      this.$store.commit('linkStore/removeAllLinks')
      localStorage.videoLocalStore = JSON.stringify(this.$store.state.linkStore.videoStore)
      this.$toastr.i('全部影片都刪除了!')
      this.dialog = false;
    }
  }
};
</script>

<style scoped lang='sass'>
  
</style>