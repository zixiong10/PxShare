<template>
    <div class="success">
        <span v-for="(item,index) in list" :key="index">
            <div class="touxiang"  > 
                <van-swipe-cell>
                      <!-- 教程封面 -->
                      <van-image  round width="66px" height="66px" :src="'http://localhost:3000/images/upload/'+ item.picture " style="float:left;margin:15px 0px 0px 15px"/>
                      <i  class="fa fa-heart" aria-hidden="true" style="float:right;margin:30px 10px 0px 0px ;font-weight:100;color:#e60a78;" @click="on(item.star_id)"></i><br>
                        <!-- 右箭头 -->
                             <p style="margin:10px 145px 10px 0px;font-size:12px">原创:{{item.author}}</p>  
                             <span style="margin:5px 25px 0px 0px;float:right;font-size:10px">x{{item.money}}</span>        <!-- aria-hidden="true"这个是用于屏幕阅读器的 -->
                             <p style="margin:0px 170px 0px 0px;font-size:12px">教程{{item.star_id}}</p><br>
                       <!-- 分割线 -->
                       <van-divider :style="{  borderColor: 'rgb(216, 215, 215)',width:'100%', padding: '2px 0px',margin:'0px 0px' }"></van-divider>       
                       <!-- 删除 -->
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
            list:[],//获得当前用户收藏的所有教程信息
            user_name:'',//当前用户
            allcourse:[],//获得所有教程信息
            course:[],//获得当前点击教程信息
            starcount:''//收藏的数量
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
          },
          on(b){
              this.$api.course.foundcourse(b).then(res=>{  //获取当前点击的教程信息
                this.course=res.data.message      
              this.$api.course.courseinfo().then(res=>{ //获取所有教程信息  
                 this.allcourse=res.data.course 
                 this.$router.push({name:'courseinfo',params:{item:this.course,list:this.allcourse}}) //跳转到此页面顺带传参
                })
            })               
          }
    },
    created(){
       this.$store.commit('setRight','')
       this.$store.commit('setLeftArrow', true)
       this.user_name=this.$store.state.user.message.data.user.user_name //获取当前登录用户的所有收藏记录
       this.$api.star.starinfo(this.user_name).then(res=>{   
           this.list=res.data.message
           this.starcount=this.list.length
           this.$store.commit('setTitle',('喜欢('+this.starcount)+')')
       })
    }
}
</script>
<style scoped>



</style>