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
    videoLink: {
      index: Number,
      link:String
      }
  },
  // data() {
  //   videoLink: ''
  // },
  computed: {
    vLinkInput() {
      // var link = this.videoLink + 'ooo'
      var getValue = this.videoLink.link.split('https://www.youtube.com/watch?v=').join('')
          getValue = getValue.split('?')
      var link = 'https://www.youtube.com/embed/' + getValue[0] + '?autoplay=1'
      return link
    }
  },
  methods: {
    remove: function() {
      this.$emit('removeLink', this.videoLink.index)      
      this.$toastr.i("link removed");
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
