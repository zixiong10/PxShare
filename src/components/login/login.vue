<template>
<div class="login">
<!-- 登录-->
<div class="background" style="height:568px"></div><!-- 背景 -->
    <div class="content">
         <!-- 标题 -->
            <div class="title"><van-image round none width="5rem" height="5rem" src="/images/share/33.jpg"/><p>PxShare</p></div>
                    <!-- 主内容 -->
                    <div class="form">
                                <!-- 用户输入内容 -->
                                <div class="user" >
                                        <van-field v-model="child.user_id"  placeholder="请输入账号或工号" left-icon="contact" clearable >
                                            <div slot="left-icon"><i class="fa fa-user" aria-hidden="true"></i></div>
                                        </van-field>
                                        <van-field v-model="child.password" type="password" placeholder="请输入密码" clearable >
                                            <div slot="left-icon"><i class="fa fa-lock" aria-hidden="true"></i></div>
                                        </van-field>
                                </div>
                                <!-- 登录 -->
                                <div class="button"><button @click="login">登录</button></div>
                                <!-- 注册 -->
                                <div class="button"><button @click="register">注册</button></div>
                    </div>
            </div>
    </div>
</template>

<script>
import {setLocalStorage} from '@/utils/localStorage'
import {Toast} from 'vant'
export default {
   data () {
       return {
           child: {
                user_id: '',
                password: '',
           }
       }
   },
   methods:{
       register() {
           this.$router.push('/register');
       },
       login(){
           //trim是用来过滤的前后空白的地方  || this.child.password.trim() == 
           if(this.child.user_id == '' ){
                  return this.$toast({message:'请输入账号！',position:'top'})
           }else if(this.child.password == ''){
                  return this.$toast({message:'请输入密码！',position:'top'}) 
           }
           // then()方法是异步执行
           // 就是当.then()前的方法执行完后再执行then()内部的程序，这样就避免了，数据没获取到等的问题

           this.$api.user.postlogin(this.child).then(res => {   //异步函数相当于function(res){return res} 
               if(res.code == 1) {
                   setLocalStorage('Token', res.data.token)
                 
                   if(res.data.userInfo.role !==null){ 
                    this.$store.commit('setuserMessage',res.data.userInfo)
                    //更换底部菜单栏的uri
                      this.$store.commit('setCoursePage', '/buying')
                      this.$store.commit('setMaterialPage', '/buying/material')
                      this.$store.commit('setSharePage', '/buying/share')
                      this.$store.commit('setPersonalPage', '/buying/personal')
                    return this.$router.push('/buying')
                   }
                   }
                   else if(res.code==0){
                      Toast(res.data.message)
                   }
                   else if(res.code==-1){
                       Toast(res.data.message)
                   }
           })          
       }
   }

}
</script>
<style lang="less" scoped>
.login{
  .background {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -10;
        background-color: rgb(92, 130, 167);
        // z-index值较大的元素将叠加在z-index值较小的元素之上
        &:nth-of-type(2) {
            background-repeat: no-repeat;
            background-size: 100% 100%;
            filter: blur(10px);
        }  // vw和vh是相对于视口（viewport，也可以叫做视区、视界或可视范围）的宽度和高度
           // 1vw等于视口宽度（viewport width）的百分之属一，也就是说100vw就是视口的宽度,同理1vh
    }
    .content {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;         
    }
    .title {
        width: 100%;
        margin-top:-80px;     
        img {
            filter: drop-shadow(0 0 1px white);
        }
        p {
            margin-top: 0;
            font-size: 24px;
            font-weight: bold;
            color: rgba(255, 255, 255, 0.9);
            filter: drop-shadow(0 0 1px black);
        }
    }
    .form {
        width: 100%;
        line-height: 20px;
        .user {
            padding: 0px 20px 0px 20px;     
            .van-field,
            .van-field__control {
                font-size: 16px;         
                color: white;
                &::-webkit-input-placeholder {
                    color: rgb(224, 224, 224);
                }
            } 
            
        }
        .button {
            width: 300px;
            margin-top: 10px;
            button {
                width: 70%;
                height: 42px;
                border-radius: 25px;
                color: rgb(240, 240, 243);
                background-color: rgba(233, 62, 62, 0);
                border: 1px solid rgba(255, 255, 255, 0.6);

                &:active {
                    background-color: white;
                    color: gray;
                }
            }
        }

        .van-cell {
            background-color: rgba(0, 0, 0, 0);
        }
        .van-cell:not(:last-child)::after {
            display: none;
        }
    }
}
.background{
    color:rgb(48, 146, 236)
}
</style>






