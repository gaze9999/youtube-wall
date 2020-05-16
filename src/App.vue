<template lang="pug">
v-app
  v-app-bar(app, dark)
    v-toolbar-title.font-weight-bold Youtube 電視牆
    v-spacer
      g-testing-bar
    v-spacer
    g-input-bar
    v-spacer
    g-control-bar
    div.btn_group
      v-tooltip(bottom) vtuber list
        template(v-slot:activator='{ on }')
          v-btn(icon='', to='/youtube-wall/list', v-on='on')
            v-icon mdi-format-list-bulleted-square
      v-tooltip(bottom) youtube wall
        template(v-slot:activator='{ on }')
          v-btn(icon='', to='/youtube-wall/', v-on='on')
            v-icon mdi-television
    v-btn(icon='')
      v-icon mdi-dots-vertical
  v-content
    router-view
  g-snack-bar
</template>

<script>
export default {
  name: 'App',
  components: {
    'g-input-bar': () => import("@/components/inputbar.vue"),
    'g-control-bar': () => import("@/components/controlbar.vue"),
    'g-snack-bar': () => import("@/components/snackbar.vue"),
    'g-testing-bar': () => import("@/components/testingbar.vue"),
    toastr: () => import("vue-toastr")
  },
  created() {
    this.$store.dispatch('linkStore/updateLinks')
    this.$log.info('storage: ', JSON.parse(localStorage.videoLocalStore))
  }
};
</script>

<style lang="sass">
html
  overflow-y: auto !important
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  background-color: #666
  ::selection
    background-color: #f79c6b
    color: #fff
  v-tooltip
  .btn_group
    > button, a
      margin-right: .5rem
      &::nth-last-child(1)
        margin-right: 0
</style>
