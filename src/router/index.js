import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloFromVux from '@/components/HelloFromVux'
import Home from '@/components/Home'
import Loan from '@/components/Loan'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloFromVux',
      name: 'HelloFromVux',
      component: HelloFromVux
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/loan',
      name: 'Loan',
      component: Loan
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
  ]
})
