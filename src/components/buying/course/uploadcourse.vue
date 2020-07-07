<template>
<div class="apply">
     <div class=apply1>
          <van-cell-group > 
          <!-- 教程内容 -->
             <div><van-field v-model="text"  v-show="on" type="textarea" label="教程内容:" autosize maxlength="2500" placeholder="请输入教程内容" show-word-limit  style="margin:0px 60px 0px 0px;padding:0px;height:455px;width:90%;position:fixed;z-index:5"/></div>        
          <!-- 是否显示教程内容编辑    -->
                   <van-button type="info" style="width:62px;height:40px ;margin-right:15px;position:fixed;right:2px;top:235px;z-index:6" round @click="comeon()">内容</van-button>         
          <!-- 教程封面 -->
                  <span style="width:70px;float:left;margin-left:20px;margin-top:30px;font-size:14px">教程封面: </span><van-uploader v-model="user_photo" :max-count="1" style="float:left;margin-left:7px;padding:7px 0px 0px 0px"/>
          <!-- 用户ID -->
                <van-field v-model="user_id"   label="用户ID：" disabled/>          
          <!-- 教程编号 -->
                 <van-field v-model="id"  label="教程编号：" placeholder="请输入教程号"/>


          <!-- 教程分类 -->
                <div class="select"><div class="select1" style="float:left"><p style="width:70px;margin-left:27px;font-size:14px">教程种类：</p></div>
                          <div class="select2" style="float:left;margin-top:15px;margin-left:6px">
                                  <select v-model="kind">
                                          <option value="基础教程">基础教程</option>
                                          <option value="滤镜教程">滤镜教程</option>
                                          <option value="美化教程">美化教程</option>
                                          <option value="文字特效">文字特效</option>
                                          <option value="调色教程">调色教程</option>
                                          <option value="抠图教程">抠图教程</option>
                                          <option value="修复教程">修复教程</option>
                                          <option value="合成教程">合成教程</option>
                                          <option value="照片处理">照片处理</option>
                                </select>
                          </div>
                </div><br><br><br>
         <!-- 教程简介 -->
             <van-field v-model="introduce"  type="textarea" label="教程简介:" autosize maxlength="24" placeholder="请输入24字以内的教程简介" show-word-limit  style="padding:5px 13px;height:50px"/><br> 


        <!-- 教程版权 -->
        <div class="select">

              <div class="select1" style="float:left;margin:0px">
                    <span style="width:70px;margin-left:27px;font-size:14px">教程版权：</span>
              </div>

              <div class="select2" style="float:left;margin-top:0px;margin-left:6px"> 
                    <van-radio-group v-model="radio" direction="horizontal"  >
                            <van-radio name="1" @click="free()">免费</van-radio>
                            <van-radio name="2" @click="charge()">收费</van-radio>
                    </van-radio-group>
              </div>
      </div><br><br>

      <!-- 收费金额 -->
      <van-field  v-show="type" type="number" v-model="money"  label="金额(元)：" placeholder="请输入教程费用" style="padding:0px 16px 10px 16px"/> 
      
      <!-- 发布时间 -->
          <div style="float:left;font-size:11px;padding:18px 15px;margin-left:11px;opacity:75%">
                          发布时间：<span>{{time | formatDate}}</span>
          </div><br><br><br>

      <!-- 提交按钮 -->
          <div id="button"> 
                  <van-row type="flex" justify="center" class="button">  
                            <van-col span="10" align="center">
                                  <van-button type="primary"   icon="passed"  round size="small" @click="submit">确认上传</van-button>
                            </van-col>
                  </van-row>
          </div>

     </van-cell-group>
  </div>

</div>
</template>

<script>
import {Dialog, Toast} from 'vant'

export default {
  data() {
    return {
      user_id: '',//用户id
      id:'',//教程id
      introduce: '',//教程简介
      kind: '',//教程分类
      time:new Date(),//上传教程时间
      value: '',//时间值
      radio:'',//收费类型
      user_photo: [],//上传的教程封面
      money:'',//收费金额
      type:false,//是否显示收费
      user_name:'',//用户名
      text:'',//新创消息记录的内容
      on:false//是否显示教程内容输入框
  }
},
  
  methods:{  
    //点击显示教程内容的后续方法
    comeon(){ if(this.on==false){this.on=true} else if(this.on==true){this.on=false } },
    //点击收费的按钮的后续方法
    charge(){ this.type=true },
    //点击免费的按钮的后续方法
    free(){ this.type=false ,this.money=null},
       //提交
      submit(){
         if (this.user_id == '' ||this.id == undefined || this.kind =='') {
                    Dialog.alert({  // Dialog 弹出框警告  用于提示一些消息，只包含一个确认按钮alert
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
                user_id:this.user_id,
                id:this.id,
                check_time: this.time,
                user_name: this.user_name,
                type:this.radio,
                money:this.money,
                kind: this.kind,
                user_photo:this.user_photo,
                introduce:this.introduce,
                text:this.text    
            }
                  console.log('submit',applyList ); 
                  this.$api.course.postcourse(applyList).then(res => {
                    if(res.code ==1){          //异步函数相当于function(res){return res} 
                     Toast(res.data.message)
                     let recordlist={
                       record_date:this.time,
                       text:res.data.content,
                       name:this.$store.state.user.message.data.user.user_name,
                       status:1
                   }
                   this.$api.record.postrecord(recordlist).then(res=>{
                   })
                         this.$router.push('/buying')
                 }else if(res.code==-1){
                   Toast(res.data.message)
                 }
            })
        }  
      
      },
  },
    afterRead(event){ //图片压缩
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
          event.content = canvas.toDataURL(event.file.type,0.92)
          console.log(event)
          let file = this.dataURLtoFile(event.content,"image");
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
                // let s = date.getSeconds();
                // s = s < 10 ? ('0' + s) : s;
                // return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
                return y + '-' + MM + '-' + d + ' ' + h + ':' + m ;
              }
            },
       created() {
            this.$store.commit('setRight','')
            this.$store.commit('setLeftArrow', true)
            this.$store.commit('setTitle', '上传教程')
            this.$api.user.userinfo().then(res=>{
            this.user_id=res.data.user.user_id
            this.user_name=res.data.user.user_name
      })
  },
          
}
</script>
<style scoped>

.apply /deep/{
  height: 432px;
}
.apply .apply1{
    height: 520px;
    margin: 10px;     
}
.van-radio{
  font-size:14px;   
}

</style>