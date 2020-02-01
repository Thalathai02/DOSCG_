import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import API from '@/components/API'
import MyCv from '@/components/MyCv'
import Line_bot from '@/components/Line_bot'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },{
    path: '/API',
    name: 'API',
    component: API
  },{
    path: '/portfolio',
    name: 'portfolio',
    component: MyCv
  },{
    path: '/Line_bot',
    name: 'Line_bot',
    component: Line_bot
  }
  ]
})
