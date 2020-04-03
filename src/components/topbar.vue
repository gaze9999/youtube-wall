<template>
  <div class="navbar">
    <h1>Youtube Wall</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "topbar"
};
</script>

<style scoped lang="sass">
.navbar
  background-color: #eee
#nav
  a 
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>
