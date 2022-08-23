import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'HomeView',
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: '/',
    name: 'MainView',
    component: () => import("@/views/MainView.vue"),
  },
  {
    path: '/list',
    name: "List",
    component: () => import("@/components/Main/TaskList.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router