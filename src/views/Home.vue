<template>
  <main class="main_area">
    <input  type="text" v-model="vLink" placeholder="輸入網址"/>
    <button type="button" @click="linkSubmit">新增</button>
    <videoFrame :videolink='link'/>
  </main>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'videoLinkInput',
  components: {
    videoFrame: () => import('@/components/videoFrame.vue')
  },
  data() {
    return {
      vLink: this.value,
      link: ''
    }
  },
  // watch: {
  //   vLink: function() {
  //     return this.value
  //   }
  // },
  methods: {
    linkSubmit: function() {
      var getValue = this.vLink.split('https://www.youtube.com/watch?v=').join(''),
          getValue = getValue.split('?'),
          link = 'https://www.youtube.com/embed/' + getValue[0] + '?autoplay=1'
        this.link = link
        this.vLink = ''
    }
      // console.log(this.link)
      // https://www.youtube.com/watch?v=ITz2Rl0gbOs?autoplay=1
      // this.link  = 'https://www.youtube.com/embed/ITz2Rl0gbOs?autoplay=1'
  }
}
</script>
<style scoped lang="sass">
.main_area
  width: 80%
  margin: 2rem auto 0
</style>