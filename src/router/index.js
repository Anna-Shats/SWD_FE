import Vue from 'vue'
import VueRouter from 'vue-router'
import Skull from '../components/Skull.vue'
import HomePage from '../components/HomePage.vue' // new for homepage
import AppAccounts from '../components/AppAccounts.vue'

Vue.use(VueRouter)

const routes = [
  {  path: '/HomePage',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/skull',
    name: 'Skull',
    component: Skull
  },
  {
    path: '/accounts',
    name: 'AppAccounts',
    component: AppAccounts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
