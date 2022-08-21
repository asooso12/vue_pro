import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: '/main',
    name: 'MainView',
    component: () => import("@/views/MainView.vue"),
  },
  {
    path: '/test',
    name: 'ChooseMeal',
    component: () => import("@/views/ChooseMeal.vue"),
  },
  {
    path: '/search/system',
    name: 'SearchSystem',
    component: () => import("@/views/SearchSystem.vue"),
  },
  {
    path: '/register',
    name: 'RegisterManager',
    component: () => import("@/views/RegisterManager.vue")
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router