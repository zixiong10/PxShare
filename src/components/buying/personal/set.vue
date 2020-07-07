<template>
<!-- 设置菜单 -->
<div class="setting">
      <!-- 修改密码 -->
            <div class="upload" @click="$router.push('password')" style="background-color:rgb(255, 255, 255);height:50px">
                  <div class="left1" >
                        <span> 修改密码</span>
                  </div>
                  <div class="right">
                       <i class="fa fa-chevron-right" aria-hidden="true" ></i>
                  </div>   
            </div>
      <!-- 收款账户 -->
            <div class="question"  style="background-color:rgb(255, 255, 255);height:50px">
                  <div class="left1" >
                        <span>收款账户</span>
                  </div>
                  <div class="right">
                       <i class="fa fa-chevron-right" aria-hidden="true" ></i>
                  </div>   
            </div>
      <!-- 护眼模式 -->
            <div class="remain"  style="background-color:rgb(255, 255, 255);height:50px">
                  <div class="left1" >
                        <span>护眼模式</span>
                  </div>
                   <span>
                         <van-switch v-model="checked" style="margin-top:13px;margin-left:155px" @input="onInput" size="18" active-color="#07c160" inactive-color="rgb(192, 191, 191)"/>
                  </span>
            </div>
      <!-- 通用设置 -->
            <div class="question"  style="background-color:rgb(255, 255, 255);height:50px">
                  <div class="left1" >
                        <span>通用设置</span>
                  </div>
                  <div class="right">
                        <i class="fa fa-chevron-right" aria-hidden="true" ></i>
                  </div>   
            </div>
      <!-- 帮助中心 -->
            <div class="question"  style="background-color:rgb(255, 255, 255);height:50px">
                  <div class="left1" >
                        <span>帮助中心</span>
                  </div>
                  <div class="right">
                        <i class="fa fa-chevron-right" aria-hidden="true" ></i>
                  </div>   
            </div>
      <!-- 注销 -->
            <div class="set" @click="out" style="background-color:rgb(255, 255, 255);height:50px">
                  <div class="left1" >
                        <span>注销</span>
                  </div>
                  <div class="right">
                        <i class="fa fa-chevron-right" aria-hidden="true" ></i>
                  </div>   
            </div>
</div>       
</template>
<script>
import {Dialog} from 'vant'

export default { 
    data(){
        return{
            checked:false,    
        }
    },
      methods:{
          onInput(checked) {
                  if(this.checked==true){
                        Dialog.alert({
                        title: '护眼模式',
                        message: '已打开',
                  }).then(() => {
                        this.checked = checked;
                        });
                  }else {
                  Dialog.alert({
                        title: '护眼模式',
                        message: '已关闭',
                        }).then(() => {
                        this.checked = checked;
                  });
               }
            },
            out() { 
                  Dialog.confirm({  //弹出框用于确认消息，包含取消和确认按钮confirm cancel
                  title: '退出登录',
                  message: '退出后将不会删除任何历史数据，下次登录依然可以用本账号登录'      
                  }).then(() => {
                  let message = {}
                  this.$store.commit('setuserMessage', message)
                  // 去除token，并返回登录页面
                  localStorage.removeItem('token')
                  this.$router.push('/')
            }).catch(() => {})
                  }
            },
         created(){
            this.$store.commit('setRight','')
            this.$store.commit('setLeftArrow', true)
            this.$store.commit('setTitle','设置')
      }
}

</script>

<style lang="scss" scoped>
.setting{
   width:100%;
   height:220px;
  
  .left1{
    float:left;
    margin:20px 0px 0px 35px;
    font-weight: bold;
    color:rgb(82, 81, 81);
    font-size:14px;
  }
  .right{
    float:left;
    margin-left:280px;
    margin-top:-18px;
    color:rgb(107, 106, 106);

   
  }
 
}
</style>