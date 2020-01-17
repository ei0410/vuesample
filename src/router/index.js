import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import button from '@/components/button'
import form from '@/components/form'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    },
    {
      path: '/button',
      name: 'button',
      component: button 
    },
    {
      path: '/form',
      name: 'form',
      component: form 
    },
  ]
})
