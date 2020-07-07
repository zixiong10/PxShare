<template>
<div class="paying">
       <!-- 订单号 -->
        <div class="dingdan">
            <p style="font-size:16px;font-weight:bold;margin:12px 0px 5px 0px">PxShare教程订单-2020{{item.id}}</p>
            <p style="font-size:24px;font-weight:bold;margin:8px 0px 10px 0px"><i class="fa fa-jpy" aria-hidden="true"></i>{{item.money}}.00</p>
       </div>
        <!-- 收款方 -->
        <div class="shoqian">
                  <van-divider :style="{  borderColor: 'rgb(230, 230, 230)',width:'100%', padding: '2px 0px',margin:'0px 0px' }"></van-divider>
                  <span style="float:left;margin-left:15px;line-height:30px">收款方</span>
                  <span style="float:right;margin-right:15px;line-height:30px">{{item.user_name}}</span>
                  <van-divider :style="{  borderColor: 'rgb(230, 230, 230)',width:'100%', padding: '2px 0px',margin:'0px 0px' }"></van-divider>              
        </div><br>
        <!-- 支付按钮 -->
        <van-button type="primary" size="large" style="width:95%" @click="submit">立即支付</van-button>
            <van-dialog v-model="show" title="PxShare" confirmButtonText="取消" confirmButtonColor="rgb(85, 84, 84)">
                <p style="font-size:24px;font-weight:bold;margin:20px 0px;"><i class="fa fa-jpy" aria-hidden="true"></i>{{item.money}}.00</p> 
                <span style="float:left;margin-left:15px;font-size:13px">支付方式</span>
                <span style="float:right;margin-right:15px;font-size:13px">账户余额:<i class="fa fa-jpy" aria-hidden="true"></i>{{user.cash}}</span><br>
                <van-button  @click="onsubmit" type="primary" style="font-size:15px;margin:35px 0px 5px 0px;">确认支付</van-button>
            </van-dialog>
</div>

</template>
<script>
import {Toast,Dialog} from 'vant'
export default {
    data(){
        return{
           item:[],
           show:false,
           user:'',
           date:new Date(),
           text:'',
        }
    },
    methods:{
        submit(){ //立即支付按钮
          this.show=true
        },
        onsubmit(){//确认提交按钮
          let buylist={
               item:this.item,
               user:this.user,
               date:this.date,
           }
             this.$api.buy.postbuy(buylist).then(res=>{
            if(res.code==-1){
                Toast(res.data.message)
                let recordlist={
                       record_date:this.date,
                       text:res.data.content,
                       name:this.$store.state.user.message.data.user.user_name,
                       status:1
                   }
                   this.$api.record.postrecord(recordlist).then(res=>{
                   })
                this.$router.push('/buying')
            }
            else if(res.code==1){
                Toast(res.data.message)
                let recordlist={
                       record_date:this.date,
                       text:res.data.content,
                       name:this.$store.state.user.message.data.user.user_name,
                       status:1
                   }
                   this.$api.record.postrecord(recordlist).then(res=>{
                   })
                this.$router.push('/buying')
            }
              else if(res.code==-2){
                 Toast(res.data.message)
                   let recordlist={
                       record_date:this.date,
                       text:res.data.content,
                       name:this.$store.state.user.message.data.user.user_name,
                       status:1
                   }
                   this.$api.record.postrecord(recordlist).then(res=>{
                   })
            }
        })
        }
    },
    created(){
        this.$store.commit('setRight','')
        this.$store.commit('setTitle','支付')
        this.$store.commit('setLeftArrow', true)
        this.item=this.$route.params.item
        this.user=this.$store.state.user.message.data.user  
    }
}
</script>


<style scoped>
.paying{
    height: 450px;
   
}
.paying .shoqian{
    background-color: rgb(250, 249, 249);
    height: 40px;
}

</style>