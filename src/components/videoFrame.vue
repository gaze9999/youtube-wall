<template lang="pug">
v-col.youtube_frame()
  v-btn(icon='', @click='remove', color='white', absolute, large, right)
    v-icon mdi-close-circle
  iframe(type='text/html', :src='vLinkInput', allowfullscreen, absolute, width='100%', height='360px * 0.5625')
</template>

<script>
export default {
  name: 'videoframe',
  props: {
    videoLink: {
      index: Number,
      videoId:String
      },
  },
  data() {
    return {
      updateLinks: [],
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
    },
  }
}
</script>

<style scoped lang="sass">
$playerWidth: 720px

.youtube_frame
  position: relative

iframe
  border: none
  background: #ccc
  // height: calc(100% * 0.5625)
</style>
