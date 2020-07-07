<template>
<div class="success">
<!-- 上传的素材 -->
          <span v-for="(item,index) in materiallist" :key="index" >
            <div class="touxiang" > 
                <van-swipe-cell>
                      <!-- 教程封面 -->
                      <van-image   width="96px" height="76px" :src="'http://localhost:3000/images/upload/'+ item.picture " style="float:left;margin:15px 0px 0px 15px"/>
                      <!-- 右箭头 -->
                       <i  class="fa fa-upload" aria-hidden="true" style="float:right;margin:30px 10px 0px 0px ;font-weight:100;color:#e60a78;" ></i><br>
                       <p style="margin:10px 50px 10px 0px;font-size:12px">素材id:{{item.material_id}}</p>  
                       <p style="margin:0px 50px 0px 0px;font-size:12px">素材分类:{{item.kind}}</p><br>
                       <!-- 分割线 -->
                       <van-divider :style="{  borderColor: 'rgb(216, 215, 215)',width:'100%', padding: '5px 0px',margin:'0px 0px' }"></van-divider>
                       <!-- 删除 -->
                      <template #right>
                         <van-button square text="删除" @click="delect(item.material_id)" type="danger"   style="margin-top:24px"/>
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
            user_name:'',//用户
            materiallist:'',//素材信息
            materialcount:'',//素材的数量
        }
    },
    methods:{
          delect(b){//删除
            this.$api.uploadmaterial.delect(b).then(res=>{
                    if(res.code==1){
                        this.$router.go(0)
                    }
              })  
          },
    },
     created(){
        this.$store.commit('setRight','')
        this.$store.commit('setLeftArrow', true)
        this.user_name=this.$store.state.user.message.data.user.user_name //获取当前登录用户的所有收藏记录
        this.$api.uploadmaterial.uploadmaterialinfo(this.user_name).then(res=>{  
              this.materiallist=res.data.message //下载素材的信息
              this.materialcount=this.materiallist.length //下载素材的数量
              this.$store.commit('setTitle',('已下载('+this.materialcount)+')')//标题
      })
   }
}
</script>
<style scoped>



</style>