<template>
  <div id="app">
    <topbar/>
    <inputbar/>
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
