import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 1.main.js 程序入口文件，初始化vue实例，并引入使用需要的插件和各种公共组件
// 2.放置项目中经常会用到的插件和CSS样式。例如： 网络请求插件:axios和vue-resource、图片懒加载插件：vue-lazyload
// 3.存储全局变量。例如（用于的基本信息）

//import...from...是ES6语法里面的新特性，用来引入外部文件

//mint-ui的使用
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

import '../public/lib/font-awesome-4.7.0/css/font-awesome.min.css'
// 导入vant或MUI
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

import api from './api/install'
Vue.use(api)

import {Toast} from 'mint-ui'
Vue.prototype.$toast = Toast  //通过手动赋值


import '@/permission' // permission control

Vue.config.productionTip = false

new Vue({ // new Vue代表新建vue对象

  // el官方解释：为实例提供挂载元素。值可以是 CSS 选择符，或实际 HTML 元素，或返回 HTML 元素的函数。
  // 这里就通过index.html中的<div id="app"><div>中的id=“app”和这里的“#app”进行挂载。

//  main.js中new Vue对象中写入router，实际上是router:router，作用是main.js引入了router对象，
  router,  //根据路由的配置方法，需要将router对象加载到根main..js中。
  store,




  // el:"#app",//el可以是String | HTMLElement | Function, 一般来说，传一个id比较常用，
  // 这一步就是告诉vue,从这个节点开始，后面的内容就于vue开始接管了。


  render: h => h(App)  //Vue 在调用 render 方法时，会传入一个 createElement 函数作为参数，
  // 也就是这里的 h 的实参是 createElement 函数，这个函数的作用就是生成一个 VNode节点，
  // render 函数得到这个 VNode 节点之后，调用了 mount 方法，渲染成真实 DOM 节点
// 其实render: h => h(App)是 render: function (createElement) { return createElement(App);}

}).$mount('#app')   // 如果没有配置el属性，可以使用手动挂载$mount("#app")

