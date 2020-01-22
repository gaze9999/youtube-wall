<template>
  <div class="frame">
    <iframe type="text/html" width="720" height="405" :src='videolink' allowfullscreen/>
  </div>
</template>

<script>
export default {
  name: 'videoframe',
  props: {
    videolink: String
  }
}
</script>

<style scoped lang="sass">
iframe
  // border: none
</style>
