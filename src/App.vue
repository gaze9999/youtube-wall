<template lang="pug">
v-app
  v-app-bar(app, dark)
    v-toolbar-title.font-weight-bold Youtube 電視牆
    v-spacer
      div
    v-spacer
    inputbar
    v-spacer
    div.mr-5.btn_group
      v-btn(icon='')
        v-icon mdi-message-text
      v-btn(icon='')
        v-icon mdi-play
      v-btn(icon='')
        v-icon mdi-pause
      v-btn(icon='')
        v-icon mdi-volume-high
    div.btn_group
      v-btn(icon='', to='/youtube-wall/list')
        v-icon mdi-format-list-bulleted-square
      v-btn(icon='', to='/youtube-wall/')
        v-icon mdi-television
      removeall
    v-btn(icon='')
      v-icon mdi-dots-vertical
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
  ::selection
    background-color: #f79c6b
    color: #fff
  .btn_group
    > button, a
      margin-right: .5rem
      &::nth-last-child(1)
        margin-right: 0
</style>
