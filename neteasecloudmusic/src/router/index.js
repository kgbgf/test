import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/rank',
    name: 'Rank',
    component: () => import('../views/Rank.vue')
  },
  {
    path: '/song_sheet',
    name: 'SongSheet',
    component: () => import('../views/SongSheet.vue')
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () => import('../views/Singer.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../views/Video.vue')
  },
  {
    path: '/mv',
    name: 'MV',
    component: () => import('../views/MV.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
