<template>
  <main>
    <div class="frames">
      <videoFrame v-on:removeLink="removeLink" v-for="link in this.$parent.videoLinks" :key="link.index" :videoLink="link"/>
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
  },
  methods: {
    removeLink(removeLinkIndex) {
      this.$parent.videoLinks.forEach(function(vLink, vLinkIndex, vLinkArray) {
        if (vLink.index === removeLinkIndex) { vLinkArray.splice(vLinkIndex, 1) }
      });
    }
  }
}
</script>
