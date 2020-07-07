<template>
  <div class="footer" > <br><br>  
    <!-- 标签栏 -->                                    <!-- 选中的颜色    未选中时的颜色 -->
    <van-tabbar route safe-area-inset-bottom fixed active-color="#e60a78"  inactive-color="rgb(121, 120, 120)">
    <van-tabbar-item  :to="coursePage"    icon="wap-home"> 首页</van-tabbar-item>
    <van-tabbar-item  :to="materialPage"  icon="photo">    素材</van-tabbar-item>
    <van-tabbar-item  :to="sharePage"     icon="share">    分享圈</van-tabbar-item>
    <van-tabbar-item  :to="personalPage"  icon="manager">  我</van-tabbar-item>
  <!-- replace是否在跳转时替换当前页面历史 -->
  <!-- to点击后跳转的目标路由对象 -->
</van-tabbar>
  </div>
</template>

<script>
export default {
    computed:{  //是计算属性
        sharePage(){ //首页uri
        return this.$store.state.sharePage
        },
        materialPage(){ //订单的uri
        return this.$store.state.materialPage
        },
        coursePage(){ //订单的uri
        return this.$store.state.coursePage
        },
        personalPage(){ //我的uri
        return this.$store.state.personalPage
        }
    }
}
</script>

<style scoped>
.footer{
  height: 100%;
}
.footer .van-tabbar{
  position: fixed;
  height: 40px;
  font-size: 15px;
}

</style>