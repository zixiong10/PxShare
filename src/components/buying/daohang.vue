<template>
  <div>
        <Header></Header>
        <div class="middle">
             <router-view ></router-view>
              <!-- 路由匹配到的组件将渲染在这里 -->
              <!-- 使用 router-link 组件来导航. -->
              <!-- 通过传入 `to` 属性指定链接. -->
        </div>
        <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/views/public/Header.vue'
import Footer from '@/views/public/Footer.vue'

export default {
    components:{
        Header,
        Footer
    }
}
</script>

<style scoped>
.middle{
  height: 100%;
    padding: 0px 0px 0px 0px;
}

</style>