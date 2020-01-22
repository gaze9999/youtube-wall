<template>
  <main class="main_area">
    
    <div class="frame">
      
      <!-- <videoFrame videolink="https://www.youtube.com/embed/9rZxl57IgVk?autoplay=1" /> -->
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import videoFrame from '@/components/videoFrame.vue'

export default {
  name: 'frame',
  components: {
    videoFrame
  }
}
</script>
<style scoped lang="sass">
.main_area
  width: 80%
  margin: 2rem auto 0
</style>