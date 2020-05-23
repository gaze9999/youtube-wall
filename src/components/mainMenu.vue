<template lang='pug'>
v-menu(offset-y
      :close-on-click="closeOnClick"
      :close-on-content-click="closeOnContentClick"
      disabled
)
  template(v-slot:activator='{ on }')
    v-btn(icon='' v-on='on')
      v-icon mdi-dots-vertical
  v-list(dark)
    v-list-item(v-for='(item, index) in items'
                :key='index'
                dark
                @click=''
                disabled
    )
      v-list-item-title {{ item.title }}
</template>

<script>
export default {
  name: 'g-main-menu',
  data() {
    return {
      items: [
        { title: '測試a' },
        { title: '測試b' },
        { title: '測試c' },
        { title: '測試d' },
      ],
      closeOnClick: true,
      closeOnContentClick: true,
    }
  },
  methods: {
  }
};
</script>

<style scoped lang='sass'>
</style>
