import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Profile from '@/components/Profile.vue'
import Skills from '@/components/Skills.vue'
import Output from '@/components/Output.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/outputs',
    name: 'Output',
    component: Output
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
