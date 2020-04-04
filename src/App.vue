<template>
  <div id="app">
    <topbar/>
    <inputbar v-on:updateLinks="updateLinks"/>
    <router-view/>
    <toastr ref="toastr"></toastr>
  </div>
</template>

<script>
export default {
  components: {
    topbar: () => import('@/components/topbar.vue'),
    inputbar: () => import('@/components/inputbar.vue'),
    toastr: () => import('vue-toastr'),
  },
  props: {
  },
  data() {
    return {
      videoLinks: []
    }
  },
  methods: {
    updateLinks(vLinks) {
      this.videoLinks = vLinks
    }
  }
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
</style>
