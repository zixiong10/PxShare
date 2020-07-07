<template>
<div class="apply" style="margin:0px">

  <!-- 上传图片加发布动态 -->
        <div class="text">
              <div  style="float:left">
                    <van-field name="user_photo" > 
                            <template #input><van-uploader v-model="user_photo"  max-count="1"  /></template>
                    </van-field>
              </div>
              <div style="float:left">
                  <van-field v-model="publish" type="textarea" rows="3" autosize  placeholder="想到什么就说什么吧" maxlength="1001" style="margin:0px" show-word-limit/>
              </div>  
        </div>

  <!-- 位置     -->
        <div class="location">
              <div style="float:left;margin-top:15px;margin-left:20px"><van-icon name="location-o" /></div>
              <div style="float:left;font-size:12px;color:rgb(116, 116, 116);"><van-field readonly clickable :value="value" placeholder="位置" @click="showPicker = true" style="padding:10px 5px"/></div>
        </div><br>

<!-- 时间和发布按钮submit -->
                <div class="button" style="height:50px">                 
                          <div style="float:left;font-size:12px;color:rgb(116, 116, 116);padding:5px 15px">
                                  发布时间：<span>{{time | formatDate}}</span>
                          </div>
                          <div style="float:left;margin-left:235px;margin-top:-50px;"> 
                              <van-button type="primary"   round size="small" @click="submit" >发表</van-button>
                          </div>  
                </div>
                <!-- 时间选择器 -->
                <van-popup v-model="showPicker" round position="bottom">
                        <van-picker
                          show-toolbar
                          :columns="columns"
                          @cancel="showPicker = false"
                          @confirm="onConfirm"
                        />
                </van-popup>
                
</div>
</template>
<script>
import {Dialog, Toast} from 'vant'
export default {
  data() {
    return {
      user_id:'',//发布的ID
      publish: '',//发布的动态
      user_photo:[],//发布的图片
      location:'',//发布的地址
      time:new Date(),//发布的时间
      record_date:new Date(),//新创消息记录的时间
      text:'',//新创消息内容的时间
      value: '',//时间监听的内容
      showPicker: false,//时间选择器
      columns: ['从化区', '增城区', '白云区', '越秀区', '黄浦区'],//地址选择  
    }
  },  
    methods:{
        onConfirm(value) {//获得选择的时间
           this.value = value;
           this.showPicker = false;
      },
         submit(){      
                if (this.publish == '' ||this.publish == undefined) {
                    Dialog.alert({ 
                        title: '出错啦 ！！！',
                        message: '所有地方不能留有空格<br>请确认是否填写完整 ?'
                    })
                    return false
                }
        else if(this.user_photo.length == 0){
          this.user_photo = '';
      }
      else{
         this.user_photo =  this.user_photo[0].content
         let applyList = {
                user_id: this.user_id,
                publish: this.publish,
                date:this.time,
                location:this.value,
                user_photo:this.user_photo   
            }
             console.log('submit',applyList );  // then()方法是异步执行
                  this.$api.publish.postpublish(applyList).then(res => { //异步函数相当于function(res){return res} 
                          if(res.code ==1){       
                        Toast(res.data.message)
                      let recordlist={
                          record_date:this.record_date,
                          text:res.data.content,
                          name:this.$store.state.user.message.data.user.user_name,
                          status:1
                     }
                   this.$api.record.postrecord(recordlist).then(res=>{
                   })
                         this.$router.push('/buying/share')
                    }                   
            })  
         }
      }
  },



      // 将base64格式的图片转换为file
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },

        filters: {//过滤时间标准形式
              formatDate: function (value) {
                let date = new Date(value);
                let y = date.getFullYear();
                let MM = date.getMonth() + 1;
                MM = MM < 10 ? ('0' + MM) : MM;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                let h = date.getHours();
                h = h < 10 ? ('0' + h) : h;
                let m = date.getMinutes();
                m = m < 10 ? ('0' + m) : m;
                // let s = date.getSeconds();
                // s = s < 10 ? ('0' + s) : s;
                // return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
                return y + '-' + MM + '-' + d + ' ' + h + ':' + m ;
              }
            },
        created() {
          this.$store.commit('setRight','')
          this.$store.commit('setLeftArrow', true)
          this.$store.commit('setTitle', '发布动态')
          this.$api.user.userinfo().then(res=>{
          this.user_id=res.data.user.user_id
     })
  },
   
}
</script>
<style>

.van-field__control{
  color:rgb(150, 148, 148)
}

</style>