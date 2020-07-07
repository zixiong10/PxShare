import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//导入committee和volunteer
import userModule from '@/store/user.js'


// 由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态

//存放共有数据
var state = {
  setting:false,
  leftArrow: false, 
  right:'',
  sharePage:'/buying/share',  //首页的uri,
  coursePage:'/buying', //订单表的uri
  materialPage:'/buying/material', //订单表的uri
  personalPage:'/buying/personal',  //个人中心uri
  title:'' //标题
}

// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
// 同步操作
var mutations = {   // 最多支持两个参数，其中，参数1： 是 state 状态； 参数2： 通过 commit 提交过来的参数

  setSetting(state, val) { //是否显示返回按钮
    state.setting = val
  },
  setLeftArrow(state, val) { //是否显示返回按钮
    state.leftArrow = val
  },
  setSharePage(state,uri) { //更换首页uri
    state.sharePage = uri
  },
  setCoursePage(state,uri) { //更换
    state.coursePage = uri
  },
  setMaterialPage(state,uri) { //更换我的uri
    state.materialPage = uri
  },
  setPersonalPage(state,uri) { //更换我的uri
    state.personalPage = uri
  },
  setTitle(state, val) { //设置当前标题
    state.title = val
  },
  setRight(state, val) { //设置当前标题
    state.right = val
  }
}


// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作
// Action 通过 store.dispatch 方法触发：
var actions = {}

//各自数据
var modules = {  
    user:userModule,
  
}
// module其实只是解决了当state中很复杂臃肿的时候，
// module可以将store分割成模块，每个模块中拥有自己的state、mutation、action和getter

// new Vuex.Store() 实例，得到一个 数据仓储对象
var vuex = new Vuex.Store({
  state,mutations,actions,modules
})

export default vuex
