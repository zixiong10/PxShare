import { getLocalStorage } from '@/utils/localStorage'
import router from './router'
import store from '@/store/index.js'
import api from '@/api/apiList.js'
import { Toast } from 'vant'

//to: Route: 即将要进入的目标路由对象
//from: Route: 当前导航正要离开的路由
//next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

router.beforeEach((to, from, next) => { //判断用户登录
    //beforeEach每个路由守卫方法接收三个参数：
    if (to.path === '/' || to.path === '/register') { //登录注册页面不判断
        next()
    } else {
        if (getLocalStorage('Token')) { //当token存在
            //保证页面刷新时,始终可以拿到token,vuex保存的信息不丢失
            api.user.userinfo().then(msg => {
                // console.log(msg.data.user)
                   if (msg.data.user.role !== null) {
                      store.commit('setuserMessage', msg)
                      //更换底部菜单栏的uri
                      store.commit('setCoursePage', '/buying')
                      store.commit('setMaterialPage', '/buying/material')
                      store.commit('setSharePage', '/buying/share')
                      store.commit('setPersonalPage', '/buying/personal')
                      if (to.path ==='/buying') { //禁止访问
                          next()
                      } else {
                          next()
                      }
                  }
            })
        
        } else {//token不存在，重新登录
            Toast('登录过期，请重新登录')
            next('/')
        }
    }
})