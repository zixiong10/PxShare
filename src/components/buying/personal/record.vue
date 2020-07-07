<template>
<div class="record">
<!-- 消息记录 -->
        <span style="float:right;font-size:13px;margin:5px 10px 0px 0px;color:#e60a78" v-if="count!==0" @click="alldelect(list)">全部已读</span><br><br>
            <!-- 消息记录列表 -->
            <span v-for="(item,index) in list" :key="index" >
                <div class="touxiang" style="margin-top:-12px" > 
                    <van-swipe-cell>
                                <p style="margin:0px 145px 10px 0px;font-size:12px;color:#e60a78"><i class="fa fa-volume-down" aria-hidden="true" style="color:#e60a78;font-size:16px"></i>  尊贵的用户:{{item.user_name}}</p>   
                                <p style="margin:0px 0px 0px 0px;font-size:12px">{{item.text}}</p>
                                <span style="margin:10px 25px 0px 0px;float:right;font-size:8px">{{item.record_date}}</span><br>
                                <!-- 分割线 -->
                                <van-divider :style="{  borderColor: 'rgb(216, 215, 215)',width:'100%', padding: '2px 0px',margin:'10px 0px' }"></van-divider>
                                <template #right>
                                    <van-button square text="标为已读" @click="delect(item.id)" type="danger"  size="40" style="margin-top:4px;font-size:14px"/>
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
            list:[],//所有记录信息
            user_name:'',//用户名
            count:''//消息记录总数
        }
    },
    methods:{
         alldelect(list){ //全部标记已读
                this.$api.record.alldelect(list).then(res=>{
                      if(res.code==1){
                          Toast(res.data.message)
                        this.$router.go(0)
                    }
                })
         },
          delect(b){ //单条记录标记已读
            this.$api.record.delectrecord(b).then(res=>{
                    if(res.code==1){
                        this.$router.go(0)
                    }
              })  
          },
       },
            created(){
                this.$store.commit('setLeftArrow', true)
                this.$store.commit('setRight','')  
                this.user_name=this.$store.state.user.message.data.user.user_name //获取当前登录用户的所有收藏记录
                this.$api.record.recordinfo(this.user_name).then(res=>{   
                this.list=res.data.message
                this.count=(res.data.message.length)
                this.$store.commit('setTitle',('消息记录('+this.count)+')')
            })
     }
}
</script>
