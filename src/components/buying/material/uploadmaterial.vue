<template>
<div class="apply">
       <div class=apply1>
           <van-cell-group >
                <span style="width:70px;float:left;margin-left:20px;margin-top:30px;font-size:14px">素材img: </span><van-uploader v-model="user_photo" :max-count="1" style="float:left;margin-left:7px;padding:7px 0px 0px 0px"/>
                <van-field v-model="user_id"   label="用户ID：" disabled style="margin-left:-7px"/>
                <van-field v-model="id"  label="素材编号：" placeholder="请输入素材号"/>
                <div class="select"><div class="select1" style="float:left"><p style="width:70px;margin-left:27px;font-size:14px">素材种类：</p></div>
                                 <div class="select2" style="float:left;margin-top:15px;margin-left:6px">
                                     <select v-model="kind">
                                          <option value="人像">人像</option>
                                          <option value="风景">风景</option>
                                          <option value="建筑">建筑</option>
                                          <option value="美食">美食</option>
                                          <option value="汽车">汽车</option>
                                    </select>
                                  </div>
                </div>
                <van-field v-model="user_name" disabled label="原创作者：" placeholder="原创作者" />  
                <div style="float:left;font-size:14px;padding:12px 15px;margin-left:11px">
                                  发布时间：<span>{{time | formatDate}}</span>
                          </div><br><br>
                <div id="button"> <br><!-- justify就是两端对齐的文本效果，center就是居中对齐的效果 -->
                <van-row type="flex" justify="center" class="button">  
                    <van-col span="10" align="center">
                         <van-button type="primary"   icon="passed"  round size="small" @click="submit">确认上传</van-button></van-col>
                    <van-col span="10" align="center"> <!-- col列 相差10 --> 
                         <van-button type="danger"  icon="delete"  round size="small"  @click="reset"> 删除 </van-button></van-col>
                </van-row></div>
         </van-cell-group>
    </div>
          
</div>
</template>
<script>
import {Dialog, Toast} from 'vant'

export default {
  data() {
    return {
      id:'',
      text:'',
      kind: '',
      user_id: '',
      user_name: '',
      user_photo: [],
      time:new Date(),
    };
},

  methods:{  
    afterRead(file) {
      console.log(file);
    },
      submit(){
         if (this.user_id == '' ||this.id == undefined || this.kind =='') {
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
                id:this.id,
                check_time: this.time,
                user_name: this.user_name,
                kind: this.kind,
                user_photo:this.user_photo 
            }
                  console.log('submit',applyList ); 
                  this.$api.material.postmaterial(applyList).then(res => {
                          if(res.code ==1){        
                        Toast(res.data.message)
                          let recordlist={
                          record_date:this.time,
                          text:res.data.content,
                          name:this.$store.state.user.message.data.user.user_name,
                          status:1
                   }
                   this.$api.record.postrecord(recordlist).then(res=>{
                   })
                         this.$router.push('/buying/material')
                    }
                    else if(res.code==-1){
                          Toast(res.data.message)
                    }  
            })
        }  
      
      },
     
         reset()
          { // 清空填写情况  
            Dialog.confirm({  //用于确认消息，包含取消和确认按钮confirm cancel
                title: '清空',
                message: '确定清空所有内容？'
            }).then(() => { 

                 this.user_id=''
                 this.date = ''
                 this.id = ''
                 this.author = ''
                 this.kind = ''
            }).catch(() => {  })
      },

  },//图片压缩
    afterRead(event){
      // console.log(event);
      if(/\/(?:jpeg|png|jpg)/i.test(event.file.type) &&  event.file.size > 500000) {
        //创建canvas对象(画布)
        let canvas = document.createElement("canvas");
        //获取对应的CanvasRenderingContext2D对象(画笔)
        let context = canvas.getContext("2d");
        //创建新的图片对象
        let img = new Image();
        //指定图片的DataURL(图片的base编码数据)
        img.src = event.content;
        //监听浏览器加载图片完成，然后进行绘制
        img.onload = () => {
          //指定canvas画布大小，该大小为最后生成图片的大小
          canvas.width=400;
          canvas.height = 400;
          /* drawImage画布绘制的方法。(0,0)表示以Canvas画布左上角为起点，400，400是将图片按给定的像素进行缩小。
        如果不指定缩小的像素图片将以图片原始大小进行绘制，图片像素如果大于画布将会从左上角开始按画布大小部分绘制图片，最后的图片就是张局部图。*/
          context.drawImage(img,0,0,400,400);
          //将绘制完成的图片重新转换为base64编码，file.file.type为图片类型，0.92为默认压缩质量
          // console.log(event.file.type);
          event.content = canvas.toDataURL(event.file.type,0.92);
          // console.log(event.content);
          console.log(event)
          
          let file = this.dataURLtoFile(event.content,"image");
          // console.log(file)
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
    
    filters: {//过滤标准时间
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
                return y + '-' + MM + '-' + d + ' ' + h + ':' + m ;
              }
            },
          created() {
              this.$store.commit('setRight',false)
              this.$store.commit('setLeftArrow', true)
              this.$store.commit('setTitle', '上传素材')
              this.$api.user.userinfo().then(res=>{
              this.user_id=res.data.user.user_id
              this.user_name=res.data.user.user_name
      })
  },
          
}
</script>
<style>



.apply1{
         margin: 10px;
        box-shadow: 5px 5px 10px gray;
}

.button{
         padding:7px;
}  
        
</style>