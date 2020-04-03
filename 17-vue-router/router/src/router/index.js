import Vue from 'vue'
import Router from 'vue-router'


// import HelloWorld from '@/components/HelloWorld'
// import home from '@/components/home'
// import about from '@/components/about'
// import user from '@/components/user'

// 路由懒加载方式
const HelloWorld =()=>import('@/components/HelloWorld')
const home =()=>import('@/components/home')
const about =()=>import('@/components/about')
const user =()=>import('@/components/user')

Vue.use(Router)


// 外部添加routes
let routes = [ 
  {
    path: '/',
    //重定向
    redirect:'/home'
  },
  {
    path: '/hellword',
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

  // 动态路由
  {
    path: '/user/:userName',
    name: 'user',
    component: user
  }
]

export default new Router({
  routes,
  // router模式：hash 和 history 默认是hash
   mode:'history',
   //统一选中的clss名字
  //  linkActiveClass:'myActiveClassName'
})
