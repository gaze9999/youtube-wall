import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'
import vtuberList from '../views/vtuberList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
  {
    path: '/list',
    name: 'Vtuber List',
    component: vtuberList
  },
  { path: '*',
    redirect: '/'
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  hash: false,
})

export default router
