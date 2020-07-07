<template>
    <div class="success">
        <span v-for="(item,index) in list" :key="index" >
            <div class="touxiang" @click="$router.push({ name:'watchcoursetext',params:{item:item}})" > 
                <van-swipe-cell >
                      <!-- 教程封面 -->
                      <van-image   width="66px" height="66px" :src="'http://localhost:3000/images/upload/'+ item.picture " style="float:left;margin:15px 0px 0px 15px"/>
                      <i  class="fa fa-chain-broken" aria-hidden="true" style="float:right;margin:30px 10px 0px 0px;color:whitesmoke ;font-weight:100;" @click="$router.push('message')"></i><br>
                        <!-- 右箭头 -->
                             <p style="margin:5px 145px 10px 0px;font-size:12px;">原创:{{item.author}}</p>  
                             <span style="margin:5px 15px 0px 0px;float:right;font-size:10px;">x{{item.money}}</span>        <!-- aria-hidden="true"这个是用于屏幕阅读器的 -->
                             <span style="margin:0px 0px 0px 0px;font-size:6px;">{{item.introduce}}</span><br>
                       <!-- 分割线 -->
                       <van-divider :style="{  borderColor: '#e60a78', width:'100%', padding: '10px 0px 0px 0px',margin:'0px 0px' }"></van-divider>
                       <!-- 删除 -->
                      <template #right>
                         <van-button square text="删除" @click="delect(item.id)" type="danger"   style="margin-top:24px"/>
                     </template>
                </van-swipe-cell>   
             </div>
        </span>
    </div>
</template>
<script>
import { Dialog,Toast } from 'vant'
export default {
    data(){
        return{
            list:[],//所有当前用户的交易记录
            user_name:'',//当前用户
            record_date:new Date(),//新创记录的时间
            text:'',//新创记录的内容
            successbuyingcount:''//成功交易的数量
        }
    },
    methods:{
          delect(b){
              Dialog.confirm({
                  title:'管理教程',
                  message:'确定要删除此教程？'
              }).then(()=>{
              this.$api.buy.delectbuy(b).then(res=>{    
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
                   })
              })
          }
    },
            created(){
            this.$store.commit('setRight','')
            this.$store.commit('setLeftArrow', true)
            this.user_name=this.$store.state.user.message.data.user.user_name 
            this.$api.buy.buyinfo(this.user_name).then(res=>{    
                this.list=res.data.message
                this.successbuyingcount=this.list.length
                this.$store.commit('setTitle',('已购教程('+this.successbuyingcount)+')')//成功交易教程的数量
            })
            }
}
</script>
<style scoped>
.success .touxiang{
    background-color: rgb(24, 23, 23);
    color:whitesmoke;
    height: 90px;
}


</style>