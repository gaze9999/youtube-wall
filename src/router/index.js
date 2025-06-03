import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/main.vue'
import vtuberList from '../views/vtuberList.vue'

const routes = [
  {
    path: '/youtube-wall/',
    name: 'Home',
    component: Main
  },
  {
    path: '/youtube-wall/list',
    name: 'Vtuber List',
    component: vtuberList
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/youtube-wall/'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
