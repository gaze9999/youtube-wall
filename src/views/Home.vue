<template>
  <main class="main_area">
    <input  type="text" v-model="vLink" placeholder="輸入網址"/>
    <button type="button" @click="linkSubmit">新增</button>
    <div class="frame">
      <videoFrame :videolink='link'/>
    </div>
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
  watch: {
    vLink: function() {
      // console.log(val)
      return this.value
    }
  },
  methods: {
    linkSubmit: function() {
        this.link = this.vLink
    }
      // console.log(this.vLink)
      // console.log(this.link)
      // this.link  = 'https://www.youtube.com/embed/WbwxQYn4gBE?autoplay=1'
  }
}
</script>
<style scoped lang="sass">
.main_area
  width: 80%
  margin: 2rem auto 0
</style>