import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Calendar from '@/components/calendar'
import CarType from '@/components/carType'
import Mine from '@/components/mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { keepAlive: true }
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: Calendar,
      meta: { keepAlive: true }
    },
    {
      path: '/CarType',
      name: 'CarType',
      component: CarType,
      meta: { keepAlive: true }
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine,
      meta: { keepAlive: true }
    },
  ]
})
