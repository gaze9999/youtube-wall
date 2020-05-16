<template lang='pug'>
div.mr-5.btn_group
  v-btn(icon='')
    v-icon mdi-message-text
  v-btn(icon='')
    v-icon mdi-play-pause
  v-btn(icon='')
    v-icon mdi-volume-high
  g-remove-all
</template>

<script>
export default {
  name: 'g-control-bar',
  components: {
    'g-remove-all': () => import('@/components/removeAll.vue'),
  }
  
}
</script>

<style scoped lang='sass'>
</style>