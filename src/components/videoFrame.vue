<template>
  <div class="frame">
    <div class="wrapper">
      <button class="remove_frame" type="button" @click="remove">刪除</button>
      <iframe type="text/html" :src='videolink' allowfullscreen/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'videoframe',
  props: {
    videolink: String
  },
  methods: {
    remove: function() {
      
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
  .wrapper
    display: flex
    flex-flow: column wrap
    align-items: flex-end
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
