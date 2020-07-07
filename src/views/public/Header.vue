<template>
  <div class="header">
    <!-- 导航栏 -->
  <van-nav-bar
  style="border: 0"
    :title="title"
    :left-arrow="leftArrow"
    @click-left="onClickleft"
    :right-text="right"
    @click-right="onClickright"
  >  
   
  </van-nav-bar>
  </div>
</template>

<script>
export default {

    methods:{
        onClickright(){
          this.$router.push('/buying/record')
        },
         onClickleft(){
           window.history.go(-1)
        }
    },
    computed:{
        leftArrow() { //是否显示首页
      return this.$store.state.leftArrow
    },
        title(){  //获得标题
           return this.$store.state.title
        },
        right(){
          return this.$store.state.right
        }
       
    
    }
}
</script>

<style scode>

.header .van-nav-bar{ 
  
  background-color:#e60a78;
  color: #e60a78;
  height:40px;
  z-index: 2;
  }


.header .van-nav-bar .van-nav-bar__left-arrow{
  color:rgb(15, 15, 15);
  font-size:24px;
 
}
.header .van-nav-bar .van-nav-bar__title{
      font-size: 17px;
      color: rgb(255, 255, 255);
}
.header .van-nav-bar__text{
      font-size: 17px;
      color: rgb(255, 255, 255);
      margin-top:3px
}

.header .van-nav-bar .van-icon-arrow-left{
  color:rgb(255, 255, 255);
  margin-top:-2px
}

</style>