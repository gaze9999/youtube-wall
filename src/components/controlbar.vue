<template lang="pug">
div.mr-5.btn_group
  v-btn(icon='' disabled)
    v-icon mdi-message-text
  v-btn(icon='' disabled)
    v-icon mdi-play-pause
  v-btn(icon='' disabled)
    v-icon mdi-volume-high
  g-remove-all
</template>

<script>
export default {
  name: 'controlbar',
  components: {
    'g-remove-all': () => import("@/components/removeAll.vue"),
  }
  
}
</script>

<style scoped lang="sass">
</style>