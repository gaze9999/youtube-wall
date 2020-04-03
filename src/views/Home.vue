<template>
  <main>
    <div class="frames">
      <videoFrame v-for="link in this.$parent.videoLinks" :key="link.index" :videoLink="link.link">
      </videoFrame>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home',
  components: {
    videoFrame: () => import('@/components/videoFrame.vue')
  },
  props: {
    videoLinks: [{
      index: Number,
      link: String
    }]
  }
}
</script>
