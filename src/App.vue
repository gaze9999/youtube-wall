<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>
      <v-toolbar-title>Youtube 電視牆</v-toolbar-title>
      <v-spacer></v-spacer>

      <inputbar></inputbar>
      <v-spacer></v-spacer>

      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
    <toastr ref="toastr"></toastr>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    inputbar: () => import("@/components/inputbar.vue"),
    toastr: () => import("vue-toastr")
  },
  created() {
    if (localStorage.videoLocalStore) {
      this.$store.commit('updateLinks', JSON.parse(localStorage.videoLocalStore))
    } else {
      this.$store.state.videoStore.splice(0)
      localStorage.videoLocalStore = []
    }
  },
  methods: {
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
