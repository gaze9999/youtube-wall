<template lang="pug">
v-col.youtube_frame
  v-hover(v-slot:default='{ hover }', close-delay='400')
    v-btn(icon='', @click='remove', color='white', absolute, large, right, :style='`opacity: ${hover ? 1 : .2}`')
      v-icon mdi-close-circle
  iframe(type='text/html', :src='vLinkInput', allowfullscreen, absolute, width='100%', height='100%')
</template>

<script>
export default {
  name: 'videoframe',
  props: {
    videoLink: {
      index: Number,
      videoId:String
      },
    linkIndex: Number,
  },
  data() {
    return {
      videoCount: this.$store.state.videoStore.length,
      widthSet: '',
      heightSet: 0
    };
  },
  computed: {
    vLinkInput() {
      var linkEmbed = `https://www.youtube.com/embed/${this.videoLink.videoId}?autoplay=1`
      return linkEmbed
    },
    updateHeight() {
      return this.heightSet
    }
  },
  mounted() {
    this.$store.commit('updateWidth', this.$el.clientWidth)
    this.widthSet = this.$el.clientWidth
    this.heightSet = this.$store.state.videoWidth
  },
  methods: {
    remove: function() {
      this.$store.commit('removeLink', this.videoLink)
      this.$store.commit('updateWidth', this.$el.clientWidth)
      this.heightSet = this.$store.state.videoWidth
      localStorage.videoLocalStore = JSON.stringify(this.$store.state.videoStore)
      this.$toastr.i("link removed");
    },
  }
}
</script>

<style scoped lang="sass">
.youtube_frame
  position: relative

iframe
  border: none
  background: #ccc
  // height: calc(100% * 0.5625)
</style>
