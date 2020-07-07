<template>
<div class="password">
  <!-- 修改密码 -->
      <van-form @submit="onSubmit">
              <van-field v-model="user_id" name="user_id" label="账号:" disabled  style="font-weight:50"/>
              <van-fieldv-model="oldpassword" type="password" name="oldpassword" label="原密码：" placeholder="原密码"/>
              <van-fieldv-model="newpassword" type="password" name="newpassword" label="新密码：" placeholder="新密码"/>
              <van-field v-model="repeatpassword" type="password" name="repeatpassword" label="确认密码：" placeholder="新密码"/>   
              <div style="margin:35px 96px;">
                  <van-button round block  color=" #1982e4" native-type="submit">完成</van-button>
              </div>
      </van-form>
  </div>
</template>

<script>
import { Dialog } from 'vant'
import {Toast} from 'vant'
export default {
   data(){
     return {
          oldpassword:'',
          newpassword:'',
          repeatpassword:'',
          user_id:'',
          record_date:new Date(),
          text:'',
     };
   },
   methods:{
     onSubmit(values){
       if(this.oldpassword == '' || this.oldpassword.trim() == ''){
           Toast('请输入原密码!')
       }else if(this.newpassword == '' || this.newpassword.trim() == ''){
           Toast('请输入新密码!')
       }else if(this.repeatpassword == '' || this.repeatpassword.trim() == ''){
           Toast('再次输入新密码!')
       }else if(this.newpassword !== this.repeatpassword){
           Toast('新密码两次输入不一致')
       }else{
           Dialog.confirm({
             title:'设置密码',
             message:'确认修改新密码？'
           }).then(() => {
             this.$api.user.putpassword(values).then(res => {
             if(res.code == -1){
               Toast(res.message)
                  let recordlist={
                          record_date:this.record_date,
                          text:res.content,
                          name:this.$store.state.user.message.data.user.user_name,
                          status:1
                   }
                   this.$api.record.postrecord(recordlist).then(res=>{
                   })
             }else if(res.code == 1){
               Toast(res.message)
                  let recordlist={
                          record_date:this.record_date,
                          text:res.message,
                          name:this.$store.state.user.message.data.user.user_name,
                          status:1
                   }
                   this.$api.record.postrecord(recordlist).then(res=>{
                   })
                this.$router.push('personal')}})})}}
         },
            created(){
                this.$store.commit('setRight','')
                this.$store.commit('setTitle', '设置密码');
                this.$store.commit('setLeftArrow', true);
                this.$api.user.userinfo().then(res=>{
                this.user_id=res.data.user.user_id
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
  line-height:40px;
}
</style>