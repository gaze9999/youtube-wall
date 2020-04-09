<template lang="pug">
v-app
  v-app-bar(app, dark)
    v-toolbar-title.font-weight-bold Youtube 電視牆
    v-spacer
    inputbar
    v-spacer
    v-btn.mx-1(icon='', to='/youtube-wall/list')
      v-icon mdi-format-list-bulleted-square
    v-btn.mx-1(icon='', to='/youtube-wall/')
      v-icon mdi-television
    removeall
  v-content
    router-view
</template>

<script>
export default {
  name: "App",
  components: {
    removeall: () => import("@/components/removeAll.vue"),
    inputbar: () => import("@/components/inputbar.vue"),
    toastr: () => import("vue-toastr")
  },
  created() {
    if (localStorage.videoLocalStore !== '[]') {
      this.$store.commit('updateLinks', JSON.parse(localStorage.videoLocalStore))
    } else {
      this.$store.state.videoStore.splice(0)
      localStorage.videoLocalStore = '[]'
    }
  }
};
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  background-color: #666
</style>
