<template>
  <div class="frame">
    <button class="remove_frame" type="button" @click="remove">刪除</button>
    <iframe type="text/html" :src='vLinkInput' allowfullscreen/>
  </div>
</template>

<script>
export default {
  name: 'videoframe',
  props: {
    videoLink: String,
    key: Number
  },
  // data() {
  //   videoLink: ''
  // },
  computed: {
    vLinkInput() {
      // var link = this.videoLink + 'ooo'
      var getValue = this.videoLink.split('https://www.youtube.com/watch?v=').join('')
          getValue = getValue.split('?')
      var link = 'https://www.youtube.com/embed/' + getValue[0] + '?autoplay=1'
      return link
    }
  },
  methods: {
    remove: function() {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
}
</script>

<style scoped lang="sass">
$playerWidth: 720px

.frame
  display: flex
  flex-flow: row wrap
  justify-content: space-evenly
  .remove_frame
    width: 4rem

iframe
  border: none
  background: #ccc
  max-width: $playerWidth
  max-height: $playerWidth * 0.5625
  width: $playerWidth
  height: $playerWidth * 0.5625
</style>
