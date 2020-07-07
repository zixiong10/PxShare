<template>
<div class="index">
<!-- 搜索 -->
       <div class="shosuo" > 
          <form action="/">
              <van-search placeholder="人像精修教程" v-model="value" @search="onSearch" show-action shape="round">
                 <template #action>
                    <div ><i class="fa fa-list" aria-hidden="true" @click="$router.push('buying/select')"></i></div>      
                 </template>
             </van-search>
          </form>
      </div>
<!-- 轮播 -->
     <div class="lunbo">
          <van-swipe :autoplay="3000">
              <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" width="100%;" height="190px;" />
              </van-swipe-item>
          </van-swipe>
       </div>    
<!-- 中间的导航栏 -->
     <div class="center">
          <van-row >
              <van-col span="8" style="margin-top:12px;font-size:14px"><i class="fa fa-check-square" aria-hidden="true"></i> 正品保障</van-col>
              <van-col span="8" style="margin-top:12px;font-size:14px"><i class="fa fa-heart" aria-hidden="true"></i> 细致服务</van-col>
              <van-col span="8" style="margin-top:12px;font-size:14px" @click="$router.push('buying/uploadcourse')"><i class="fa fa-upload" aria-hidden="true"></i> 上传教程</van-col>
          </van-row>
      </div>
<!-- 课程的大分类 -->
     <div class="list" style="padding:0px 0px;background-color:black">
          <van-grid :border="false" :column-num="3" class="ah" >
                <!-- 基础课程 -->
                    <van-grid-item @click="$router.push({name:'select',params:{name:0}})" >
                        <van-image style="width:100% ;height:70px;padding:0px" src="/images/share/all/B1.jpg"  />
                        <span style="font-size:13px;font-weight:bold;margin-top:5px;padding:0px">基础课程</span>
                    </van-grid-item>
                <!-- 滤镜课程 -->
                    <van-grid-item @click="$router.push({name:'select',params:{name:1}})">
                      <van-image  style="width:100% ;height:70px;" src="/images/share/all/B2.jpg" />
                        <span style="font-size:13px;font-weight:bold;margin-top:5px">滤镜教程</span>
                    </van-grid-item>
                <!-- 文字特效 -->
                    <van-grid-item @click="$router.push({name:'select',params:{name:2}})">
                      <van-image style="width:100% ;height:70px;"  src="/images/share/all/B3.png" />
                        <span style="font-size:13px;font-weight:bold;margin-top:5px">文字特效</span>
                    </van-grid-item>
                <!-- 美化教程 -->
                    <van-grid-item @click="$router.push({name:'select',params:{name:3}})">
                      <van-image style="width:100% ;height:70px;" src="/images/share/all/B4.jpg" />
                        <span style="font-size:13px;font-weight:bold;margin-top:5px">美化教程</span>
                    </van-grid-item>
                <!-- 照片处理 -->
                    <van-grid-item @click="$router.push({name:'select',params:{name:5}})">
                      <van-image style="width:100% ;height:70px;" src="/images/share/all/B5.png" />
                        <span style="font-size:13px;font-weight:bold;margin-top:5px">照片处理</span>
                    </van-grid-item>
                <!-- 抠图教程 -->
                    <van-grid-item @click="$router.push({name:'select',params:{name:6}})">
                      <van-image style="width:100% ;height:70px;" src="/images/share/all/B6.jpg" />
                        <span style="font-size:13px;font-weight:bold;margin-top:5px">抠图教程</span>
                    </van-grid-item>
                <!-- 合成教程 -->
                    <van-grid-item @click="$router.push({name:'select',params:{name:8}})">
                      <van-image style="width:100% ;height:70px;" src="/images/share/all/B7.png" />
                      <span style="font-size:13px;font-weight:bold;margin-top:5px">合成教程</span>
                    </van-grid-item>
                <!-- 修复教程 -->
                    <van-grid-item @click="$router.push({name:'select',params:{name:7}})">
                      <van-image style="width:100% ;height:70px;" src="/images/share/all/B8.jpg" />
                        <span style="font-size:13px;font-weight:bold;margin-top:5px">修复教程</span>
                    </van-grid-item>
                <!-- 更多 -->
                    <van-grid-item @click="$router.push({name:'select',params:{name:9}})">
                      <van-image style="width:100% ;height:70px;" src="/images/share/buy/main/30.png" />
                        <span style="font-size:13px;font-weight:bold;margin-top:5px" @click="$router.push('buying/select')">更多</span>
                    </van-grid-item>
         </van-grid>
    </div>

        <!-- 最新发布 -->
        <div class="lately">
                <van-row >
                      <van-col span="8" style="margin-top:12px;font-size:14px">
                        <i class="fa fa-upload" aria-hidden="true"></i> 最新上传
                      </van-col>
                </van-row>
        </div>

   <!-- 最新发布的教程 -->
     <div class="right"  >
            <span  v-for="(i,index) in list" :key="index" >
                  <p class="course" >
                    <van-image style="width:100% ;height:100px;" :src="'http://localhost:3000/images/upload/'+ i.picture" @click="$router.push({name:'courseinfo',params:{item:i,list:list}})" />
                    <span style="font-size:13px;margin-top:5px">{{i.introduce}}</span><br>
                    <span v-if="!i.money=='0'" style="font-size:10px;margin-top:5px;font-weight:bold"><i class="fa fa-jpy" aria-hidden="true"></i>{{i.money}}</span>
                    <span v-if="i.money=='0'"  style="font-size:10px;margin-top:3px;font-weight:bold">免费</span>
                  </p>
            </span>  
       </div>
               <p style="color:rgb(238, 236, 236) ;font-size:8px;">aaaaaaaaaaaaaaaaaaa</p>
                <!-- 素材下方显示不出来，垫垫页面充数 -->
</div>
</template>

<script>
import {Toast} from 'vant'
export default {
   data() {
    return {
       list:[],//所有教程信息
       rank:'',//分类里面的排名
       name:'',//select里面的name
       value:'',//监听搜索内容
       images: //通告轮播
            [ 
              '../images/share/buy/hai1.jpg',
              '../images/share/buy/hai2.jpg',
              '../images/share/buy/hai3.jpg',
              '../images/share/buy/hai4.jpg',
            ],
    }},
   methods:{
        onSearch(value){
            this.$api.course.searchCourse(value).then(res=>{
                if(res.code==1){
                  this.$router.push({name:'courseinfo',params:{item:res.data.message,list:this.list}})
                }
                else if(res.code==0)
                {
                  this.rank=res.data.message.kind
                  if(this.rank=='基础教程'){this.name=0}
                  else if(this.rank=='滤镜教程'){this.name=1}
                   else if(this.rank=='文字特效'){this.name=2}
                    else if(this.rank=='美化教程'){this.name=3}
                     else if(this.rank=='调色教程'){this.name=4}
                      else if(this.rank=='照片处理'){this.name=5}
                       else if(this.rank=='抠图教程'){this.name=6}
                        else if(this.rank=='修复教程'){this.name=7}
                         else if(this.rank=='合成教程'){this.name=8}
                   this.$router.push({name:'select',params:{name:this.name}})
                }
                else{
                 Toast(res.data.message)}})
            }
       },
            created(){
                this.$store.commit('setRight','')
                this.$store.commit('setLeftArrow', false)
                this.$store.commit('setTitle', 'PS教程')
                this.$api.course.courseinfo().then(res=>{
                this.list=res.data.course
            }) 
    }
}
</script>
<style  scoped>
.list  .ah /deep/ .van-grid-item__content{
  padding: 5px 2px;
}
.shosuo{
 background-color:rgb(189, 189, 189)
}
.index{
  background-color:rgb(238, 236, 236) ;
  padding: 0px 0px;
  height:100%;
}

.center{
  width:100%;
  height:45px;
  background-color:rgb(255, 255, 255) ;
  opacity: 90%;
  margin-top:5px;
  padding: 0px;

}
.lately{
  width:100%;
  background-color:rgb(255, 255, 255) ;
  opacity: 90%;
  margin-top:6px;
  padding: 0px 0px;
}
.index /deep/ .right{
  height:100%;

}
.list{
  margin-top:1px;
}
.index  .shosuo  .van-search--show-action{
  padding: 0px 0px;
}

.index .right .course{
  width:150px;
  float: left;
  margin: 0px;
  padding: 5px 0px 2px 5px;
}


.fa-list:before{
  font-size:20px;
  opacity: 60%;
}
</style>