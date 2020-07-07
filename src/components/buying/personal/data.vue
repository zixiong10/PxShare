<template>
<div class="data">
<!-- 修改个人资料 -->
   <van-form @submit="onSubmit">
        <van-field v-model="user_id"    name="user_id"    label="账号:"/>
        <van-field v-model="user_name"  name="user_name"  label="昵称:"/>
        <van-field  v-model="qianming"  name="qianming"   label="签名:" placeholder="这位同学很神秘，什么都没有写"/>
        <p style="padding:10px 70px"><van-button round block  color=" #1982e4" size="large" native-type="submit" >完成</van-button></p>
    </van-form>
  </div>
</template>
<script>
import { Dialog,Toast } from 'vant'
export default {
   data(){
     return {
          user_id:'',
          user_name:'',
          record_date:new Date(),
          text:'',
          qianming:''
     }
   },
   methods:{  
     onSubmit(values){       
           Dialog.confirm({
             title:'修改资料',
             message:'确认修改资料？'
           }).then(() => {
          this.$api.user.putdata(values).then(res => {
          if(res.code == -1){
               Toast(res.message)
          }
          else if(res.code == 1){
               Toast(res.message)
                let recordlist={ //产生新消息记录
                          record_date:this.record_date,
                          text:res.message,
                          name:this.$store.state.user.message.data.user.user_name,
                          status:1
            }
            this.$api.record.postrecord(recordlist).then(res=>{
          })
            this.$router.push('personal')
             }
           })
           })
       }
   },
          created() {
              this.$store.commit('setRight','')
              this.$store.commit('setTitle', '修改资料');
              this.$store.commit('setLeftArrow', true);
              this.$api.user.userinfo().then(res=>{//获取个人信息
              this.user_id=res.data.user.user_id
              this.user_name=res.data.user.user_name
              this.qianming=res.data.user.qianming              
          })
        },
}
</script>

<style scoped>
.van-button--info{
    color: #fff;
    background-color: #07c160;
    border: 1px solid #1982e4;
}
.van-cell{
  line-height:70px;
  padding: 10px 0px 0px 0px;
  height: 70px;
}
</style>