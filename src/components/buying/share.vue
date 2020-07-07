<template>
<div class="share">
<!-- 导航栏 -->
  <van-tabs  swipeable title-active-color="teal" title-inactive-color="rgb(121, 120, 120)">

        <div class="guanzhu" >
               <!-- 第一个标题里的内容 -->
            <van-tab title="关注" >  
                   <!-- 分享圈背景 -->
                  <van-image  v-if="talking0==true || talking1==true || id==user_id" class="beijing" width="320" height="200" src="/images/share/material/people/6.jpg" style="padding: 5px 0px"/>
                   <van-image v-if="talking2==true && id!==user_id" class="beijing" width="320" height="200" src="/images/share/all/46.jpg" style="padding: 5px 0px"/>
                   <!-- 分享圈头像 -->
                   <van-image v-if="talking0==true || talking1==true" class="touxiang"  width="66px" round height="66px" :src="'http://localhost:3000/images/upload/'+ user_photo " @click="personal()"/>
                   <van-image v-if="talking2==true" class="touxiang"  width="66px" round height="66px" :src="'http://localhost:3000/images/upload/'+ photo " />
                    <!-- 分享圈用户昵称 -->
                    <p v-if="talking0==true || talking1==true" class="userID"> {{user_name}}</p>
                    <p v-if="talking2==true" class="userID"> {{name}}</p><br><br>
                <!-- 发布分享+  -->
                <van-button v-if="!talking2==true" type="info" style="width:42px;height:40px ;margin-right:0px;position:fixed;right:2px;top:450px;z-index:1" round @click="$router.push('publish')"><van-icon name="plus" size="20px" /></van-button>
               <!-- 发表动态的内容列表 -->
              <div class="dongtai" v-for="(item,i) in list"  :key="i">
                                  <!-- 所有动态页面 -->
                                    <p v-show="talking0">
                                        <van-image class="hehe" round width="50px" height="50px" :src="'http://localhost:3000/images/upload/'+ item.user.user_photo " style="float:left;margin-left:10px" @click="other(item)"/>
                                        <span style="float:left;margin-left:10px;margin-top:10px;font-weight:bold;font-size:10px;color:rgb(63, 62, 62)">{{item.user.user_name}}</span>
                                        <span style="float:left;margin:0px 0px 0px 65px;width:200px;font-size:10px;color:rgb(63, 62, 62)">{{item.publish}}</span><br>
                                        <van-image class="hehe" width="200px" height="150px" style="margin:10px 0px 0px 20px" :src="'http://localhost:3000/images/upload/'+ item.user_photo " /><br>
                                        <span style="margin:0px 0px 0px 0px;font-size:10px;color:rgb(63, 62, 62)">{{item.location}}</span>
                                        <span style="float:left;margin:2px 0px 0px 80px;font-size:10px;color:rgb(63, 62, 62)">{{item.date}}</span><br>
                                    </p>
                                    <!-- 个人动态页面 -->
                                      <p  v-show="talking1" v-if="item.user_id==user_id">
                                        <span style="font-size:10px;opacity:60%;margin:0px 0px 0px 140px;color:red" @click="delect(item.id)">删除</span>
                                        <van-image class="hehe" round width="50px" height="50px" :src="'http://localhost:3000/images/upload/'+ item.user.user_photo "  style="float:left;margin-left:10px"/>
                                        <span style="float:left;margin-left:10px;margin-top:10px;font-weight:bold;font-size:10px;color:rgb(63, 62, 62)">{{item.user.user_name}}</span>
                                        <span style="float:left;margin:0px 0px 0px 65px;width:200px;font-size:10px;color:rgb(63, 62, 62)">{{item.publish}}</span><br>
                                        <van-image class="hehe" width="200px" height="150px" style="margin:10px 0px 0px 20px" :src="'http://localhost:3000/images/upload/'+ item.user_photo " /><br>
                                        <span style="margin:0px 0px 0px 0px;font-size:10px;color:rgb(63, 62, 62)">{{item.location}}</span>
                                        <span style="float:left;margin:2px 0px 0px 80px;font-size:10px;color:rgb(63, 62, 62)">{{item.date}}</span><br>
                                    </p>
                                    <!-- 他人动态页面 -->
                                      <p  v-show="talking2" v-if="item.user.user_photo==photo">
                                        <span v-if="id==user_id" style="font-size:10px;opacity:60%;margin:0px 0px 0px 140px;color:red" @click="delect(item.id)">删除</span>
                                        <van-image class="hehe" round width="50px" height="50px" :src="'http://localhost:3000/images/upload/'+ item.user.user_photo " style="float:left;margin-left:10px" @click="$router.push({name:'shareinfo',params:{info:item,fo:list}})"/>
                                        <span style="float:left;margin-left:10px;margin-top:10px;font-weight:bold;font-size:10px;color:rgb(63, 62, 62)">{{item.user.user_name}}</span>
                                        <span style="float:left;margin:0px 0px 0px 65px;width:200px;font-size:10px;color:rgb(63, 62, 62)">{{item.publish}}</span><br>
                                        <van-image class="hehe" width="200px" height="150px" style="margin:10px 0px 0px 20px" :src="'http://localhost:3000/images/upload/'+ item.user_photo " /><br>
                                        <span style="margin:0px 0px 0px 0px;font-size:10px;color:rgb(63, 62, 62)">{{item.location}}</span>
                                        <span style="float:left;margin:2px 0px 0px 80px;font-size:10px;color:rgb(63, 62, 62)">{{item.date}}</span><br>
                                       
                                    </p>
                        </div>
        
                  </van-tab>
          </div>
          <!-- 第二个标题里的内容 -->
        <div class="tuijian">
                  <van-tab title="推荐"><span style="float:left;font-size:14px;margin-left:15px;margin-top:5px;color:rgb(63, 62, 62);font-weight:bold;">热门话题</span><br><br>
                      <van-grid direction="horizontal" :column-num="2">
                          <van-grid-item icon="/images/share/all/8.jpg" text="#抠图教程 2416条内容" />
                          <van-grid-item icon="/images/share/all/B3.png" text="#logo设计 155条内容" />
                          <van-grid-item icon="/images/share/all/22.png" text="#人像这样修 183条内容"  />
                          <van-grid-item icon="/images/share/all/16.jpg" text="#我要这样学 8505条内容"/>
                      </van-grid>  

                      <van-divider :style="{  borderColor: 'rgb(160, 158, 158)', padding: '10px 10px',margin:'5px 5px' }"></van-divider>
                 <!-- 海报 -->
              <div class="text">
                          <span style="float:left;font-size:14px;margin-left:15px;margin-top:5px;color:rgb(63, 62, 62);font-weight:bold;">推荐话题</span><br><br>
                          <van-image width="292" height="250" src="/images/share/all/28.jpg" />
              </div>

                  </van-tab>
            </div>

           <!-- 第三个标题里的内容 -->
       <div class="zuixing">
              <van-tab title="最新">
                    <van-image width="98%" height="420" src="/images/share/all/lately.jpg" style="padding:5px 0px" />
                
                        <br><br><br><br>
                        </van-tab>
            </div>
            <!-- 第四个标题里的内容 -->
        <div class="hot">
                  <van-tab title="热榜">
                    <span style="float:left;font-size:14px;margin-left:15px;margin-top:15px;color:rgb(63, 62, 62);font-weight:bold;">官方认证</span><br><br><br><br>
                     <van-image width="85" height="70" round src="/images/share/buy/main/55.jpg" style="margin-right:30px" />
                     
                      <van-image width="85" height="70" round src="/images/share/buy/main/56.jpg" style="margin-left:20px" />
                        <br><span style="float:left;margin-left:72px;margin-top:5px">ICE</span> <span style="float:right;margin-top:2px;margin-right:55px">巧P人心</span>
                        <br><span style="float:left;margin-left:-43px;margin-top:10px;font-size:12px;color:rgb(104, 104, 104)">平面创意设计</span>
                         <span style="float:right;margin-top:9px;margin-right:-60px;font-size:12px;color:rgb(104, 104, 104)">专业工具人</span>

                         <br><span style="float:left;margin-left:-60px;width:50px;margin-top:13px;font-size:12px;color:rgb(104, 104, 104);background-color:teal;color:white">+关注</span>
                         <span style="font-size:12px;width:50px;float:right;margin-right:60px;margin-top:13px;color:rgb(104, 104, 104);background-color:teal;color:white">+关注</span>
                        <br><br><br>

                     <span style="float:left;font-size:14px;margin-left:15px;margin-top:5px;color:rgb(63, 62, 62);font-weight:bold;">热榜活动</span><br><br>
                          <van-image width="292" height="250" src="/images/share/all/hot1.jpg" />
                          <van-image width="292" height="250" src="/images/share/all/hot2.png" />
                          <van-image width="292" height="250" src="/images/share/all/hot3.jpg" />
                  </van-tab>
            </div>
    </van-tabs>
    
</div>

</template>
<script>
import {Toast,Dialog} from 'vant'
export default {
      data(){
          return{
              user_id:'',//用户ID
              user_name:'',//用户名
              user_photo:'',//用户头像
              list: [],//信息列表
              talking1:false,//是否显示个人动态页面
              talking0:true, //是否显示所有动态页面
              talking2:false,//是否显示他人动态页面
              photo:'',//他人头像
              name:'',//他人用户名
              id:'',//他人ID
              record_date:new Date(),//新创消息记录的时间
              text:'',//新创消息记录的内容
               
      }
      },
     methods:{
        personal(){
          this.talking1=true,
          this.talking0=false,
          this.talking2=false,
           this.$store.commit('setTitle','我的动态')
        
        },
      
        other(b){
           this.id=b.user.user_id
           this.name=b.user.user_name,
           this.photo=b.user.user_photo,
           this.talking0=false,
           this.talking1=false,
           this.talking2=true,
           this.$store.commit('setTitle','他的动态')

        },
        delect(b){
          Dialog.confirm({
          title: '动态消息',
          message: '确定删除这条动态？',
      }).then(()=>{
        this.$api.publish.delectpublish(b).then(res=>{
           if(res.code==1){
             Toast(res.data.message)
                let recordlist={
                          record_date:this.record_date,
                          text:res.data.content,
                          name:this.$store.state.user.message.data.user.user_name,
                          status:1
                   }
                   this.$api.record.postrecord(recordlist).then(res=>{
                   })
             this.$router.go(0)
           }
           else{
             Toast('删除失败')
           }
        })
      })
     },
     },
    

      created(){
        this.$store.commit('setRight','')
        this.$store.commit('setTitle','分享圈')
        this.$api.publish.publishinfo().then(res=>{
               this.list=res.data.publish
        })
        this.user_photo=this.$store.state.user.message.data.user.user_photo
        this.user_name=this.$store.state.user.message.data.user.user_name
        this.user_id=this.$store.state.user.message.data.user.user_id
      }
}
</script>
<style scoped>

.guanzhu .userID{
    position: absolute;
    top:215px;
    margin-left: 248px;
    color:white;
    font-size:11px;
    font-weight: bold;
    z-index: 2;
    
}
.guanzhu .touxiang{
    position: absolute;
    left: 242px;
    top: 154px;
    padding:1px;
    z-index: 3;
    
}


.van-grid-item /deep/.van-grid-item__icon+.van-grid-item__text{
  width:75px;
  margin-left:2px;
  color:rgb(13, 119, 119);
  font-weight: bold;
  padding: 2px;
}

.van-grid-item /deep/.van-icon{
  font-size:50px
}

.van-grid-item /deep/.van-grid-item__content{
  padding: 2px;
}



</style>