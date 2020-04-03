import Vue from 'vue'
import Router from 'vue-router'


// import HelloWorld from '@/components/HelloWorld'
// import home from '@/components/home'
// import about from '@/components/about'
// import user from '@/components/user'

// 路由懒加载方式
const HelloWorld = () => import('@/components/HelloWorld')
const home = () => import('@/components/home')
const homeNews = () => import('@/components/homeNews')
const homeMessage = () => import('@/components/homeMessage')
const about = () => import('@/components/about')
const user = () => import('@/components/user')
const Profile = () => import('@/components/profile')

Vue.use(Router)


// 外部添加routes
let routes = [
  {
    path: '/',
    //重定向
    redirect: '/home'
  },
  {
    path: '/hellword',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    // 嵌套路由。。
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        name: 'news',
        component: homeNews,
      },
      {
        path: 'message',
        name: 'message',
        component: homeMessage,
      }
    ]
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
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

const router = new Router({
  routes,
  // router模式：hash 和 history 默认是hash
  mode: 'history',
  //统一选中的clss名字
  //  linkActiveClass:'myActiveClassName',
  // beforeEach((to,from,next)=>{

  // })
})

//前置守卫（导航守卫）----全局守卫
router.beforeEach((to, from, next) => {
  console.log("+=+++++++");
  next()
})

//后置钩子（）----全局守卫
router.afterEach((to, from) => {
  console.log('-----------------');
  
})

export default router
