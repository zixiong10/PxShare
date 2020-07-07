import Vue from 'vue'
import VueRouter from 'vue-router'

//导入用户路由配置器
import user from './user.js'

//导入其他路由

import login from '@/components/login/login.vue'
import register from '@/components/register/register.vue'
import buyingIndex from '@/components/buying/daohang.vue'


//导入错误处理组件
import errorfourone from '@/views/error/error401.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:login,
   
  },
  {
    path: '/register',
    component: register
  },
 
  {
    path:'/buying',
    component:buyingIndex,
    children:user
  },
  {
    path:'/error401',
    component:errorfourone
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})


export default router
