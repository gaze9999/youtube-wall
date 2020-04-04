import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'
import vtuberList from '../views/vtuberList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/youtube-wall/wall',
    name: 'Home',
    component: Main
  },
  {
    path: '/youtube-wall/list',
    name: 'Vtuber List',
    component: vtuberList
  },
  { path: '*',
    redirect: '/youtube-wall/wall'
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  hash: false,
})

export default router
