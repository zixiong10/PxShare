<template>
  <div class="error401">
       <Header></Header>
       <div class="middle">
         <van-image
          width="100%" :src="require('../../assets/img/401.png')"/>
       </div>
       <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/views/public/Header.vue'
import Footer from '@/views/public/Footer.vue'
import {Toast} from 'vant'

var time

export default {
    components:{
      Header,
      Footer
    },
    created(){
      this.$store.commit('setLeftArrow',true)
      this.$store.commit('setTitle','401')

      //定时返回上一页
      const toast = Toast({
        duration:0 ,
        position:'bottom',
        message:'没有权限4秒后返回'
      });
      let second = 4
      time = setInterval(() => {
        second--
        if(second){
          Toast.message = `没有权限${second}秒后返回`
        }else{
          clearInterval(time)
          Toast.clear()
          window.history.go(-1)
        }
      },1000);
    },
    beforeRouteLeave:(to, from, next) => {
       clearInterval(time)
       Toast.clear()
       next()

}
}
</script>

<style scoped>

.middle{
  margin-top: 47px;
  margin-bottom: 49px;
}

</style>