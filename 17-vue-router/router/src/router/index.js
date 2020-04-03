import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import about from '@/components/about'

Vue.use(Router)


// 外部添加routes
let routes = [ 
  {
    path: '/',
    //重定向
    redirect:'/home'
  },
  {
    path: '/vue',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
]

export default new Router({
  routes
   
})
