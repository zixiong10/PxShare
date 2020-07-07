<template>
  <div class="space">
<!-- 个人资料 -->
        <div class="xin" >
            <van-image class="touxiang" width="66px" height="66px" :src="'http://localhost:3000/images/upload/'+ user_photo "/>
                      <div class="xinxi">
                          <p class="name"><i class="fa fa-user-o"></i> {{user_name}}</p>          <!-- aria-hidden="true"这个是用于屏幕阅读器的 -->
                          <p class="id"><i class="fa fa-id-card-o"></i>:{{user_id}}</p>
                          <p class="role"><i class="fa fa-check-square-o "></i>:{{role}}</p>
                      </div>
                      <p style="font-size:7px;float:left;margin:0px 0px 0px 20px; color:#e60a78;">个人签名: {{qianming}}</p>
        </div><br><br>
 <!-- 朋友权限 -->
 <div class="friend" style="height:20px" >
                              <div class="left1" style="float:left;margin:0px 0px 0px 20px;font-size:14px" >
                                    <span>朋友权限</span>
                              </div>
                              <div class="right" style="float:right;margin:0px 20px 0px 0px;font-size:14px;color:rgb(192, 193, 194)">
                                    <i class="fa fa-chevron-right" aria-hidden="true" ></i>
                              </div>   
                      </div><br>

<!-- 分享圈图片 -->
  <div class="dongtai" style="height:80px" >
        <span style="float:left;padding:25px 0px 0px 20px;">分享圈</span>
            <div style="float:left" >
               <van-image class="hehe" v-for="(i,index) in list"  :key="index"  v-show="user_id==i.user.user_id"  width="60px" height="60px" style="margin:10px 0px 0px 20px" :src="'http://localhost:3000/images/upload/'+ i.user_photo " /><br>
            </div>    
  </div><br>
             
<!-- 更多信息  -->
    <div class="more" >
              <div class="left1" style="float:left;margin:0px 0px 0px 20px;font-size:14px" >
                    <span>更多信息</span>
              </div>
               <div class="right" style="float:right;margin:0px 20px 0px 0px;font-size:14px;color:rgb(192, 193, 194)">
                    <i class="fa fa-chevron-right" aria-hidden="true" ></i>
               </div>   
    </div><br><br>

  </div>
</template>

<script>
import { Dialog } from 'vant'
import {Toast} from 'vant'
export default {
    data(){
     return{
        role:'',
        user_id:this.$route.params.info.user.user_id,
        user_name:this.$route.params.info.user.user_name,
        user_photo:this.$route.params.info.user.user_photo,
        date:this.$route.params.info.date,
        location:this.$route.params.info.location,
        publish:this.$route.params.info.publish,
        qianming:this.$route.params.info.user.qianming,

     }
    },
  
   created() {
     this.$store.commit('setRight','')
     this.$store.commit('setTitle', '个人名片');
     this.$store.commit('setLeftArrow', true);
         if(this.$route.params.info.user.role==3){
            this.role ='&管理员'
        }else if(this.$route.params.info.user.role==2){
          this.role='大V博主'
        }else{
          this.role='普通用户'
        }
       this.list=this.$route.params.fo      
   },
}
</script>

<style scoped>
.space .xin{
  margin-top:30px
}
.space .xin  .touxiang{
  float:left;
  margin-left:20px;
 
}
.space .xinxi{
  margin:20px 0px;
  
}
.space .xinxi .name{
  width: 120px;
  margin:0px 0px 0px 80px;
  
}
.space .xinxi .id{
  margin:10px 0px 0px 45px;
  font-size:12px;
  width:120px;
}
.space .xinxi .role{
  margin:5px 0px 0px 65px;
  font-size:11px;
   width:120px;
}
 
</style>