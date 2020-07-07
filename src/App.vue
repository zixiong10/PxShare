<template>
  <div id="app">
    <router-view/>
  </div>
<!-- App.vue是项目的主组件，页面入口文件 ，所有页面都在App.vue下进行切换，app.vue负责构建定义及页面组件归集 -->


<!-- vue项目里其他的文件作用：

   1.index.html：vue编译后的html文件入口

   2.src：放置组件和入口文件

   3.node_modules：项目锁依赖的模块/包

   4.config：配置了路径端口值等

    5.build：配置webpack的基本配置、开发环境配置、生产环境配置等 -->
</template>
  

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111011;
  padding: 0px 0px;

}



</style>
