<template>
  <div class="personal" style="border: null">
<!-- 个人信息 -->
              <div class="background">
                      <!-- 头像 -->
                      <van-image class="touxiang" round width="66px" height="66px" :src="'http://localhost:3000/images/upload/'+ user_photo "/>
                      <i  class="fa fa-chevron-right" aria-hidden="true" style="margin-left:270px;margin-top:27px;   font-weight: 100;color:white;" @click="$router.push('data')"></i>
                        <!-- 右箭头 -->
                        <div class="xinxi">
                              <p><span style="font-size:16px;margin-left:10px;color:white"><i class="fa fa-user"></i> {{user_name}}</span></p>          <!-- aria-hidden="true"这个是用于屏幕阅读器的 -->
                              <p class="left"><i class="fa fa-id-card-o"></i>:{{user_id}}</p>
                              <p class="right"><i class="fa fa-check-square-o "></i>:{{role}}</p>
                        </div>
                        <!-- 个人信息 -->
               </div> 
<!-- 喜欢与购买列 -->
            <div class="like">
                   <van-row gutter="18" type="flex" justify="center">
                            <van-col span="12" @click="$router.push('successbuying')">  
                                      <div class="left" >
                                          <i class="fa fa-shopping-bag" aria-hidden="true" style="color:#e60a78;margin-right: 10px;font-size:20px;margin-left:20px;float:left"></i>
                                        <span style="font-size:15px;float:left;margin-bottom:2px">购买</span>
                                        <!-- 购买 -->
                                      </div>
                                      <div class="right">
                                          <span style="font-size:16px;float:left;margin-left:35px;margin-top:3px" >{{successbuyingcount}}</span> 
                                           <i id="right1" class="fa fa-chevron-right" aria-hidden="true" style=" color:#e60a78;float:right;margin-right:11px;margin-top:5px;font-size:13px"></i>
                                      </div>
                                        <!-- 图标 -->
                              </van-col>
                            <van-col span="12" @click="$router.push('star')">
                                        <!-- 喜欢 -->
                                      <div class="left">
                                          <i class="fa fa-star" aria-hidden="true" style="margin-right: 10px;color:#e60a78;font-size:20px;margin-left:20px;float:left"></i>
                                        <span style="font-size:15px;float:left;margin-bottom:2px">喜欢</span>
                                      </div>
                                      <div class="right">
                                          <span style="float:left;margin-left:38px;margin-top:3px;font-size:16px">{{starcount}}</span> <i id="right1" class="fa fa-chevron-right" aria-hidden="true" style=" color:#e60a78;float:right;margin-right:10px;margin-top:5px;font-size:13px"></i>
                                      </div>
                                        <!-- 图标 -->
                              </van-col>
                        </van-row><br>
                 </div> 
                   <!-- 分割线 -->
                   <van-divider :style="{  borderColor: 'rgb(219, 218, 218)', padding: '10px 15px  0px 15px' }"></van-divider>
<!-- 钱包列 -->
               <div class="bag" style="margin-left:5px">
                          <van-row gutter="10" type="flex" justify="center">
                                <van-col span="8"><i class="fa fa-suitcase" aria-hidden="true" style="color:#e60a78;font-size:26px"></i> <span style="font-size:22px;font-weight:400">钱包</span></van-col>
                                <van-col span="5"><i class="fa fa-jpy" aria-hidden="true" style="font-size:13px;">{{cash}}</i><br><span style="font-size:13px">余额</span></van-col>
                                <van-col span="5"><span style="font-size:13px;font-weight:bold">{{benefit}}</span><br><span style="font-size:13px">优惠劵</span></van-col>
                                <van-col span="5"><span style="font-size:13px;font-weight:bold">{{gold}}</span><br><span style="font-size:13px">金币</span></van-col>
                          </van-row>
                </div><br>
                   <!-- 分割线 -->
                   <van-divider :style="{  borderColor: 'rgb(219, 218, 218)', padding: '0px 10px' }"></van-divider>

<!-- 设置中下部子页面导航列表 -->
            <div class="setting">
              <!-- 创作中心 -->
                <div class="upload" @click="$router.push('successupload')" style="background-color:rgb(255, 255, 255);height:40px">
                             <div class="left1" >
                                  <span>创作中心</span>
                             </div>
                             <div class="right2" style="float:right;margin:20px 28px 0px 0px;">
                                    {{allcount}} <i class="fa fa-chevron-right" aria-hidden="true" style="color:#e60a78"></i>
                              </div>   
                     </div>  
              <!-- 消息提醒 -->
                <div class="remain"  style="background-color:rgb(255, 255, 255);height:40px">
                              <div class="left1" >
                                    <span>消息提醒</span>
                              </div>
                                  <span v-if="remind_status==1"><van-switch v-model="checked" style="margin-top:13px;margin-left:155px" @input="onInput" size="18" active-color="#07c160" inactive-color="rgb(192, 191, 191)"/></span>
                                  <span v-else><van-switch v-model="check" style="margin-top:13px;margin-left:155px" @input="onInput" size="18" active-color="#07c160" inactive-color="rgb(192, 191, 191)"/></span>
                               
                  </div>
                <!-- 我的下载 -->
                   <div class="question" @click="$router.push('upload')" style="background-color:rgb(255, 255, 255);height:40px">
                              <div class="left1" >
                                    <span>我的下载</span>
                              </div>
                              <div class="right2" style="float:right;margin:20px 28px 0px 0px;">
                                    {{uploadmaterialcount}} <i class="fa fa-chevron-right" aria-hidden="true" style="color:#e60a78"></i>
                              </div>   
                      </div>
                  <!-- 设置 -->
                 <div class="set" @click="$router.push('set')" style="background-color:rgb(255, 255, 255);height:40px">
                              <div class="left1" >
                                    <span>设置</span>
                              </div>
                              <div class="right">
                                    <i class="fa fa-chevron-right" aria-hidden="true" ></i>
                              </div>   
                   </div>
                
            </div>
      </div>
</template>

<script>
import {Dialog} from 'vant'
export default {
    data(){
        return{
            user_id:'',//用户ID
            user_name:this.$store.state.user.message.data.user.user_name,//用户名
            role:'',//用户角色
            user_photo:'',//用户头像
            checked:true,//监听消息提醒开关(用户已开启)
            check:false,//监听消息提醒开关(用户未开启)
            cash:'',//余额
            benefit:'',//优惠劵
            gold:'',//金币
            successbuyingcount:'',//成功购买的数量
            starcount:'',//收藏的数量
            list:[],//交易记录的信息内容
            starlist:[],//收藏记录的信息内容
            remind_status:[],//消息提醒的状态值
            count:'',//消息记录的数量
            uploadmaterial:'',//下载素材的信息
            uploadmaterialcount:'',//下载素材的数量
            coursecount:'',//上传教程的数量
            courselist:'',
            material:'',//上传的素材信息
            materialcount:'',//上传的素材数量
            allcount:''//上传的总数量
            
        }
    },
    methods:{
       
    onInput(checked) {
        if(this.checked==true){
              Dialog.alert({
                title: '消息通知',
                message: '已打开消息提醒',
              }).then(() => {
                let remind={
                  user_name:this.$store.state.user.message.data.user.user_name,
                  status:1
                }
                this.$api.remind.postremind(remind).then(res=>{ window.history.go(0)})
              });
        }else {
            Dialog.alert({
                title: '消息通知',
                message: '已关闭消息提醒',
              }).then(() => 
              {
                let remind={
                  user_name:this.$store.state.user.message.data.user.user_name,
                  status:null
                }
                this.$api.remind.postremind(remind).then(res=>{ window.history.go(0)})
              });
          }
  }
    },
    created(){
       this.$store.commit('setLeftArrow', false)
       this.$store.commit('setTitle','')   
      this.$api.remind.remindinfo(this.user_name).then(res=>{
         for(var i=0;i<res.data.message.length;i++){
               this.remind_status=res.data.message[i].status //消息提醒的状态值    
               if(this.remind_status==1){
                  this.$api.record.recordinfo(this.user_name).then(res=>{   
                  this.count=(res.data.message.length)
                  if(this.count==0){
                     this.$store.commit('setRight',<i class="fa fa-bell" aria-hidden="true"></i>)
                  }else{
                     this.$store.commit('setRight',<van-icon color="white" dot><i class="fa fa-bell" aria-hidden="true"></i></van-icon>)}})
                    }
              else{
                    this.$store.commit('setRight',<i class="fa fa-bell-slash" aria-hidden="true"></i>)
              } 
         }
      })


           // 获取用户资料
       this.$api.user.userinfo().then(res=>{
           this.user_id=res.data.user.user_id
           this.user_photo=res.data.user.user_photo
           this.gold=res.data.user.gold
           this.cash=res.data.user.cash
           this.benefit=res.data.user.benefit
           this.user_name=res.data.user.user_name

           //购买教程成功的数量
           let b=this.user_name
           this.$api.buy.buyinfo(b).then(res=>{
           this.list=res.data.message
           this.successbuyingcount=this.list.length
        })
          //收藏教程的数量
           let c=this.user_name
           this.$api.star.starinfo(c).then(res=>{
           this.starlist=res.data.message
           this.starcount=this.starlist.length
       })
           //下载
           this.$api.uploadmaterial.uploadmaterialinfo(this.user_name).then(res=>{  
           this.uploadmaterial=res.data.message //素材的信息
           this.uploadmaterialcount=this.uploadmaterial.length //下载素材的数量
       })
           //上传教程
          this.$api.course.findcourse(this.user_name).then(res=>{   
           this.courselist=res.data.message//上传的教程信息
           this.coursecount=this.courselist.length//上传的教程数量
       })
           //上传素材
             this.$api.material.findmaterial(this.user_name).then(res=>{  
              this.material=res.data.message //素材的信息
              this.materialcount=this.material.length //上传素材的数量
                this.allcount=this.materialcount+this.coursecount
       })
             
            if(res.data.user.role==1){
                this.role='普通用户'
            }
            else if(res.data.user.role==2){
                this.role='提款机'
            }
            else{
                this.role='管理员'
            }
       })      
    }    
}

</script>

<style scoped>

 .personal {
  background: rgb(254, 255, 255);
  width:100%;
  height:100%;
  }
.background /deep/{
  width:100%;
  height:96px;
  position:fixed;
  z-index: 10;
  margin-top:-1px;
  background-color: #e60a78;
}

.touxiang{
        position: absolute;
        left: 20px;
        top: 0px;
        border: 1px  white;
        box-shadow: 0 0 5px white;
        padding:1px
    }
 .xinxi{
    position: absolute;
      align-items: stretch;
        left: 95px;
        top: 10px;
        text-align: left;
        font-weight: bolder;
        color:rgb(238, 236, 236);
        font-size:8px;
}
 .xinxi   p.left{
            float:left;
            color:white;
            margin-top:1px;
            margin-left:5px;
 }
 .xinxi p.right{
            float:left;
            color:white;
            margin-top:0px;
            margin-left:10px;
    
    }



.like{
  width:100%;
  padding: 110px 0px 10px 0px;
  height: 30px;
}

 .van-divider{
   margin: 0px 0px 10px 0px;
 }

.setting{
   width:100%;
   height:220px;
} 
.setting  .left1{
    float:left;
    margin:20px 0px 0px 35px;
    font-weight: bold;
    color:rgb(43, 43, 43);
    font-size:14px;
  }
.setting  .right{
    float:left;
    margin-left:280px;
    margin-top:-18px;
    color:#e60a78; 
  }
 
</style>