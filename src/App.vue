<template lang="pug">
v-app
  v-app-bar(app dark dense)
    v-toolbar-title.font-weight-bold Youtube 電視牆
    v-spacer
    //-   g-testing-bar
    //- v-spacer
    g-input-bar
    v-spacer
    g-control-bar
    div.btn_group
      v-tooltip(bottom) vtuber 列表
        template(v-slot:activator='{ on }')
          v-btn(icon='' small to='/youtube-wall/list' v-on='on' disabled)
            v-icon(small) mdi-format-list-bulleted-square
      v-tooltip(bottom) 電視牆
        template(v-slot:activator='{ on }')
          v-btn(icon='' small to='/youtube-wall/' v-on='on')
            v-icon(small) mdi-television
    g-main-menu
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
    'g-main-menu': () => import("@/components/mainMenu.vue"),
  },
  created() {
    this.$store.dispatch('linkStore/updateLinks')
    this.$store.dispatch('appbar/updateAppbarStatus')
  },
  mounted() {
    this.$log.debug('storage: ', JSON.parse(localStorage.videoLocalStore))
    this.$log.debug('appbarStatus: ', JSON.parse(localStorage.appbarStatus))
    this.$log.debug('controlbarStatus: ', JSON.parse(localStorage.controlbarStatus))
  },
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
  .btn_group
    > button, a
      margin-right: .5rem
      &::nth-last-child(1)
        margin-right: 0
</style>
