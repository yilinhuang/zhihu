import Vue from 'vue'
import Router from 'vue-router'
import moment from 'moment'
import Detail from '@/views/detail.vue'
import Home from '@/views/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:date(\\d{4}\\d{2}\\d{2})',
      name: 'date',
      component: Home
    },
    {
      path: '/story/:id(\\d+)',
      name: 'story',
      component: Detail
    },
    {
      path:'*',
      redirect: `/${moment().format('YYYYMMDD')}`
    }
  ]
})
