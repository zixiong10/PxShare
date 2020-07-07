<template>
<div class="courseinfo">  
<!-- 教程的页面分布 -->
        <div class="background"><!-- 教程效果图 -->
                <van-image  width="140px"  height="180px"  :src="'http://localhost:3000/images/upload/'+ item.picture "/>
        </div>     

        <div class="introduce"> <!-- 教程简介 -->
            <span style="font-size:21px">{{item.introduce}}</span><br><br>
              <span v-if="!item.money==0" style="font-size:19px;"><i class="fa fa-jpy" aria-hidden="true"></i>{{item.money}}</span>
                 <span v-if="item.money==0" style="font-size:19px;">免费</span>
        </div>   

        <div> <!-- logo -->
              <van-image  width="100%" height="50px" src="/images/share/buy/LGo.jpg"/>
        </div>              
        <!-- 分割线 -->
          <van-divider :style="{  borderColor: 'rgb(216, 215, 215)', padding: '10px 0px',margin:'0px 0px' }"></van-divider>


<!-- 相关教程 -->
         <div class="other">
                <p style="margin:0px 10px;float:left">相关教程</p><br><br>
                    <div class="others" v-for="(i,index) in list"  :key="index"  v-show="i.kind==item.kind && i.id!==item.id" >
                        <van-image class="hehe"  width="100px" height="90px"  :src="'http://localhost:3000/images/upload/'+ i.picture " @click="$router.push({name:'courseinfo2',params:{item:i,list:list}})" /><br>
                        <p  style=" width:90px;font-size:13px;margin:5px 0px" >{{i.introduce}}</p>
                        <p style="font-size:13px;margin:5px 0px" v-if="!i.money==0"><i class="fa fa-jpy" aria-hidden="true"></i>{{i.money}}</p>
                        <p style="font-size:12px;margin:5px 0px" v-if="i.money==0">免费</p>
                    </div> 
        </div>  

        <!-- 分割线 -->
          <van-divider :style="{  borderColor: 'rgb(216, 215, 215)',width:'100%', padding: '0px 0px',margin:'0px 0px' }"></van-divider>


<!-- 底部购买分享收藏栏 -->
        <div class="buy">
                    <van-row >
                        <!-- 分享 -->
                            <van-col span="5" style="margin-top:15px;padding-left:15px;font-size:14px" @click="showShare=true">
                                <i class="fa fa-commenting-o" aria-hidden="true"></i> 分享
                            </van-col>
                        <!-- 收藏 -->
                            <van-col span="6"  style="margin-top:15px;font-size:14px;padding-right:2px" >
                                <span v-show="staring"  v-if="staring_ing==item.id"   @click="delect()"><i class="fa fa-star" aria-hidden="false" ></i> 已收藏</span>
                                <span  v-show="stared" v-if="staring_id==null && staring_ing !==item.id"  @click="star()"><i class="fa fa-star-o" aria-hidden="false"></i> 收藏</span>
                            </van-col>
                        <!-- 购买 -->
                            <van-col span="8" style="margin-left:51px;font-size:20px;" >
                                    <van-button v-if="item.money==0" size="large" type="info"  @click="submit(item)"  round>立即下载</van-button>
                                     <van-button v-else size="large" type="info"  @click="$router.push({ name:'paying',params:{item:item}})"  round>立即购买</van-button>
                            </van-col>
                    </van-row>
        </div>

          <!-- 分割线 -->
          <van-divider :style="{  borderColor: 'rgb(216, 215, 215)',width:'100%', padding: '2px 0px',margin:'0px 0px' }"></van-divider>
   
                  
<!-- 分享面板 -->
        <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect"/>

        </div>
</template>
<script>
import {Dialog, Toast} from 'vant'
export default {
    data(){
        return{
         item:[],//当前页面的教程记录
         list:[],//所有的教程记录
         showShare: false,//分享的v-model
         staring:true,//已收藏的v-show条件
         stared:true, //收藏的v-show条件
         starlist:[],//当前登录用户的收藏记录
         staring_id:'',//收藏的v-if判定条件
         staring_ing:'',//已收藏的v-if判定条件
         record_date:new Date(),//新创记录的时间
         text:'',//新创记录的内容
         options: [
            { name: '微信', icon: 'wechat' },
            { name: 'QQ', icon: 'qq' },
            { name: '复制链接', icon: 'link' },
            { name: '分享海报', icon: 'poster' },
            { name: '二维码', icon: 'qrcode' },
             ],
        }
    },
    methods:{
        submit(b){     
           Dialog.confirm({
             title:'下载教程',
             message:'确认下载教程'+b.id+'?'
           }).then(() => {
          let buylist={
               item:b,
               user:this.$store.state.user.message.data.user,
               date:this.record_date,
           }
           this.$api.buy.postbuy(buylist).then(res=>{
             if(res.code==1){
                Toast(res.data.nomoney)
                let recordlist={
                       record_date:this.record_date,
                       text:res.data.nomoneycontent,
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
                       record_date:this.record_date,
                       text:res.data.content,
                       name:this.$store.state.user.message.data.user.user_name,
                       status:1
                   }
                   this.$api.record.postrecord(recordlist).then(res=>{
                   })
            }
        })
        }
           )
        },
        onSelect(option) { //分享的选项
            Toast(option.name);
            this.showShare = false;          
    },
       star(){ //收藏的方法
           let starlist={
               item:this.item,
               user_name:this.$store.state.user.message.data.user.user_name,
               status:1
           }
         
               this.staring=true, //显示已收藏
               this.stared=false  //不显示收藏
               this.staring_ing=this.item.id //加上判定条件
           this.$api.star.poststar(starlist).then(res =>{ //添加数据库收藏记录进而收藏成功
               if(res.code ==1){
                  Toast(res.data.message)
                    let recordlist={
                       record_date:this.record_date,
                       text:res.data.content,
                       name:this.$store.state.user.message.data.user.user_name,
                       status:1
                   }
                   console.log('star',recordlist)
                   this.$api.record.postrecord(recordlist).then(res=>{

                   })
               } 
           })
       },
       //删除收藏记录的一系列操作
       delect(){
           let stardelect={
                item:this.item,//当前教程页面记录
                user_name:this.$store.state.user.message.data.user.user_name,//当前用户
           } 
                    
           this.$api.star.delectstar(stardelect).then(res =>{ //删除收藏记录
               if(res.code==1){ //成功则加上v-if的判定条件(详细请看上面代码)
                   this.staring_id=null
                   this.staring=false
                   this.stared=true
                   this.staring_ing=null
                   Toast(res.data.message)
                   let recordlist={
                       record_date:this.record_date,
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
        this.item=this.$route.params.item //通过路径传参得到参数
        this.list=this.$route.params.list //通过路径传参得到参数
        this.$store.commit('setRight','')
        this.$store.commit('setLeftArrow',true)   
        this.$store.commit('setTitle',this.item.kind)

        this.user_name=this.$store.state.user.message.data.user.user_name //当前用户
        this.$api.star.starinfo(this.user_name).then(res=>{    //查询当前用户的收藏记录
           this.starlist=res.data.message  //获得当前用户收藏的记录数据
           this.staring_id=null            //加上v-if条件
           for(var i=0;i<this.starlist.length;i++){
        if(this.starlist[i].star_id==this.item.id){  //判断当前页面教程是否为已收藏
             this.staring_ing=this.item.id           //是则加上v-if判断条件
        }
        
       }
       })
      
    }
    
}
</script>

<style scoped>
.courseinfo .background{
    width:100%;
    height:250px;
    background-color:rgb(41, 40, 40)
}

.courseinfo .background .van-image{
    box-shadow:  5px 5px 5px rgb(85, 84, 84);
  
    margin-top:30px
}

.courseinfo .introduce{
    margin:10px 0px 5px 0px
}
.courseinfo .other{
    height: 200px;
}
.courseinfo .other .others{
    float:left;
    padding: 5px 2px ;
    width:100px
}
.courseinfo .other .others .van-image{
    padding:0px 2px;
}
.courseinfo .buy{
    height:44px;
    padding:5px 0px 0px 0px
}
</style>