<template>
<div class="register">
        <div class="background" ></div> <!-- 背景 -->
<!-- 内容 -->
        <div class="content">
                <!-- 后退 -->
                    <div class="history" style="color:white;width:20px;float:left;top:20px;position:fixed">
                        <van-icon name="arrow-left" onClick="javascript :history.back(-1);" class="fanhui"></van-icon>
                    </div>
                
<!-- 提交表单 -->
      <div class="form">
          <div class="user">
            <van-form @submit="onSubmit" >
                   <!-- 头像 -->
                    <van-field name="user_photo"  > 
                          <template #input>
                              <van-uploader v-model="user_photo" max-count="1" max-size="20px" :after-read="afterRead" />
                          </template>
                          <div slot="left-icon" style="margin-top:28px">
                            <i class="fa fa-user-plus" aria-hidden="true"></i> 
                          </div>
                    </van-field><br>

                    <!-- 账号 -->
                    <van-field v-model="user_id" name="user_id" placeholder="账号" >
                        <div slot="left-icon" >
                            <i class="fa fa-keyboard-o" aria-hidden="true"></i> 
                        </div>
                    </van-field><br>

                     <!-- 密码 -->
                    <van-field v-model="password" name="password" placeholder="密码" type="password">
                        <div slot="left-icon" >
                            <i class="fa fa-lock" aria-hidden="true"></i> 
                        </div>
                    </van-field><br>

                    <!-- 昵称 -->
                    <van-field v-model="user_name"  name="user_name"  placeholder="昵称" >
                        <div slot="left-icon" >
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> 
                        </div>
                    </van-field><br>

                    <!-- 角色 -->
                    <van-field name="role" >
                            <template #input>
                                <van-radio-group v-model="role" direction = "horizontal">
                                    <van-radio name="1"><span style="color:white  ">普通用户</span></van-radio>
                                    <van-radio name="2"><span style="color:white  ">大V博主</span></van-radio>
                                </van-radio-group>
                            </template>
                            <div slot="left-icon">
                                <i class="fa fa-user-o" aria-hidden="true"></i> 
                            </div>
                    </van-field><br>

                    <!-- 提交按钮 -->
                    <div class="button"><button native-type="submit">确认注册</button></div>
             </van-form>  
          </div> 
      </div>
  </div>
</div>
</template>

<script>
import {Toast} from 'vant'
export default {
  data() {
    return {
      user_name:'',
      user_id: '',
      password: '',
      role:'',
      user_photo:[],
    };
  },
  methods: {
  
    onSubmit(values) {
      console.log('submit', values);  //trim是用来过滤的前后空白的地方  || this.child.password.trim() == ''
      if(values.user_name == '' || values.user_name.trim()== ''){
          return Toast('请输入昵称')
    }
      else if(values.user_id == '' || values.user_id.trim()== ''){
          return Toast('请输入账号')
    }
    else if(values.password == '' || values.password.trim()== ''){
          return Toast('请输入密码')
    }
    else if(values.role == '' || values.role.trim()== ''){
          return Toast('请勾选角色')
    }

     //判断是否上传图片
      if(values.user_photo.length == 0){
        values.user_photo = '';
      }else{
       values.user_photo =  values.user_photo[0].content
       this.$api.user.postuser(values).then(res=>{
        if(res.code ==1){
          Toast(res.data.message)
          this.$router.push('/')
        }
        else if(res.code ==-1){
            Toast(res.data.message)
          
        }
      })
    }
    },
  //图片压缩
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
    }
  }

   
}
</script>

<style lang="scss">
.register {
    .background {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -10;
        background-color: rgb(92, 130, 167);
        z-index值较大的元素将叠加在z-index值较小的元素之上
        &:nth-of-type(2) {
            background-repeat: no-repeat;
            background-size: 100% 100%;
            filter: blur(10px);
        }  // vw和vh是相对于视口（viewport，也可以叫做视区、视界或可视范围）的宽度和高度
           // 1vw等于视口宽度（viewport width）的百分之属一，也就是说100vw就是视口的宽度,同理1vh
    }
    .content {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;         
    }
    .title {
        width: 100%;
        margin-top:-80px;     
        img {
            filter: drop-shadow(0 0 1px white);
        }
        p {
            margin-top: 0;
            font-size: 24px;
            font-weight: bold;
            color: rgba(255, 255, 255, 0.9);
            filter: drop-shadow(0 0 1px black);
        }
    }
    .form {
        width: 100%;
        margin-top:-80px;
        line-height: 20px;
        .user {
            padding: 0px 20px 0px 20px;       
            .van-field,
            .van-field__control {
                font-size: 16px;         
                color: white;
                &::-webkit-input-placeholder {
                    color: rgb(224, 224, 224);
                }
            }    
            .van-field__control  {
                padding-left: 5px;
                &:nth-of-type(1) {
                    font-size: 15px;
                    border-bottom: 1px solid rgba(116, 114, 114, 0.6);
                }
            }
        }
        .button {
            width: 200px;
            text-align: center;
            padding: 20px 0px 0px 35px;
            button {
                width: 70%;
                height: 42px;
                border-radius: 25px;
                color: rgb(240, 240, 243);
                background-color: rgba(233, 62, 62, 0);
                border: 1px solid rgba(255, 255, 255, 0.6);

                &:active {
                    background-color: white;
                    color: gray;
                }
            }
        }

        .van-cell {
            background-color: rgba(0, 0, 0, 0);
        }
        .van-cell:not(:last-child)::after {
            display: none;
        }
    }
}
</style>
