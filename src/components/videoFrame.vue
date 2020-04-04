<template lang="pug">
v-col.youtube_frame
  v-btn.remove_frame(@click='remove') 刪除
  iframe(type='text/html', :src='vLinkInput', allowfullscreen)
</template>

<script>
export default {
  name: 'videoframe',
  props: {
    videoLink: {
      index: Number,
      videoId:String
      }
  },
  data() {
    return {
      updateLinks: []
    };
  },
  computed: {
    vLinkInput() {
      var linkEmbed = `https://www.youtube.com/embed/${this.videoLink.videoId}?autoplay=1`
      return linkEmbed
    }
  },
  methods: {
    remove: function() {
      this.$store.commit('removeLink', this.videoLink)
      localStorage.videoLocalStore = JSON.stringify(this.$store.state.videoStore)
      this.$toastr.i("link removed");
    }
  }
}
</script>

<style scoped lang="sass">
$playerWidth: 720px

iframe
  border: none
  background: #ccc
  max-width: $playerWidth
  max-height: $playerWidth * 0.5625
  width: $playerWidth
  height: $playerWidth * 0.5625
</style>
