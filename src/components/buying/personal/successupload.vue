<template>
<div class="success">
<!-- 成功上传的宝库 -->

<!-- 上传的分类 -->
            <div style="padding:5px 0px 5px 0px;font-size:14px;color:#e60a78">
                <span style="float:left;margin-left:25px" @click="courseshow=true,material=false,jiao=true,su=false"><i  class="fa fa-check-square" v-show="jiao" style="color:#e60a78;" ></i>上传教程 ({{coursecount}})</span>
                <span style="float:right;margin-right:25px;" @click="material=true,courseshow=false,su=true,jiao=false"><i  class="fa fa-check-square" v-show="su" style="color:#e60a78;" ></i>上传素材 ({{materialcount}})</span>
            </div><br>
 <!-- 上传的教程 -->
        <span v-for="(item,index) in list" :key="index" v-show="courseshow">
            <div class="touxiang"  > 
                <van-swipe-cell>
                      <!-- 教程封面 -->
                      <van-image  round width="66px" height="66px" :src="'http://localhost:3000/images/upload/'+ item.picture " style="float:left;margin:15px 0px 0px 15px"/>
                      <i  class="fa fa-check-square" aria-hidden="true" style="float:right;margin:30px 10px 0px 0px ;font-weight:100;color:#e60a78;" ></i><br>
                        <!-- 右箭头 -->
                             <p style="margin:10px 135px 10px 0px;font-size:12px">原创:{{item.user_name}}</p>  
                             <span style="margin:5px 25px 0px 0px;float:right;font-size:10px">x{{item.money}}</span>        <!-- aria-hidden="true"这个是用于屏幕阅读器的 -->
                             <p style="margin:0px 160px 0px 0px;font-size:12px">教程{{item.id}}</p><br>
                       <!-- 分割线 -->
                       <van-divider :style="{  borderColor: 'rgb(216, 215, 215)',width:'100%', padding: '2px 0px',margin:'0px 0px' }"></van-divider>
                      
                      <template #right>
                         <van-button square text="删除" @click="delect(item.star_id)" type="danger"   style="margin-top:24px"/>
                     </template>
                </van-swipe-cell>   
             </div>
        </span>
<!-- 上传的素材 -->
          <span v-for="(item,index) in materiallist" :key="index" v-show="material">
            <div class="touxiang"  > 
                <van-swipe-cell>
                      <!-- 教程封面 -->
                      <van-image  round width="66px" height="66px" :src="'http://localhost:3000/images/upload/'+ item.picture " style="float:left;margin:15px 0px 0px 15px"/>
                      <i  class="fa fa-check-square" aria-hidden="true" style="float:right;margin:30px 10px 0px 0px ;font-weight:100;color:#e60a78;" ></i><br>
                        <!-- 右箭头 -->
                             <p style="margin:10px 135px 10px 0px;font-size:12px">原创:{{item.user_name}}</p>  
                             <span style="margin:5px 25px 0px 0px;float:right;font-size:10px">素材id:{{item.id}}</span>       
                             <p style="margin:0px 140px 0px 0px;font-size:12px">素材分类:{{item.kind}}</p><br>
                       <!-- 分割线 -->
                       <van-divider :style="{  borderColor: 'rgb(216, 215, 215)',width:'100%', padding: '5px 0px',margin:'0px 0px' }"></van-divider>
                      
                      <template #right>
                         <van-button square text="删除" @click="delect(item.star_id)" type="danger"   style="margin-top:24px"/>
                     </template>
                </van-swipe-cell>   
             </div>
        </span>

    </div>
</template>
<script>
import {Toast} from 'vant'
export default {
    data(){
        return{
            su:false,//是否显示素材图标
            jiao:true,//是否显示教程图标
            list:[],//教程信息
            user_name:'',//用户
            record_date:new Date(),//记录的时间
            text:'',//记录的内容
            count:'',//总数量
            materiallist:'',//素材信息
            materialcount:'',//素材的数量
            coursecount:'',//教程的数量
            courseshow:true,//是否显示教程
            material:false//是否显示素材
        }
    },
    methods:{
          delect(b){
         let stardelect={
            item:b,//当前教程页面记录
            user_name:this.$store.state.user.message.data.user.user_name,
            } 
            this.$api.star.delect(stardelect).then(res=>{
                    if(res.code==1){
                        Toast(res.data.message)
                        this.$router.go(0)
                    }
              })  
           }       
        },
            created(){
            this.$store.commit('setRight','')
            this.$store.commit('setLeftArrow', true)
            this.user_name=this.$store.state.user.message.data.user.user_name //获取当前登录用户的所有收藏记录
            this.$api.course.findcourse(this.user_name).then(res=>{   
                this.list=res.data.message//上传的教程信息
                this.coursecount=this.list.length//上传的教程数量
            
                this.$api.material.findmaterial(this.user_name).then(res=>{  
                    this.materiallist=res.data.message //素材的信息
                    this.materialcount=this.materiallist.length //上传素材的数量
                    this.count=this.coursecount + this.materialcount //上传总数
                    this.$store.commit('setTitle',('已上传('+this.count)+')')//标题
            })
            })
        }
}
</script>
