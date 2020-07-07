<template>
    <div class="success">
      <van-tabs title-inactive-color="black"  scrollsp="true" swipe-threshold="3" line-width="0px" v-model="activeName">
          <van-tab title="新手教程" name="新手教程" >
              <span v-for="(item,index) in list" :key="index">
                  <div class="touxiang" v-if="item.kindchild=='新手教程'" @click="$router.push({name:'courseinfo',params:{item:item,list:list}})"> 
                            <!-- 教程封面 -->
                            <van-image   width="100px" height="76px" :src="'http://localhost:3000/images/upload/'+ item.picture " style="float:left;margin:5px 0px 0px 15px"/>
                            <span style="float:right;margin:28px 40px 0px 0px ;font-size:12px;" >教程{{item.id}}</span><br>
                              <!-- 右箭头 -->
                                  <p style="margin:10px 105px 10px 0px;font-size:12px">原创:{{item.user_name}}</p>  
                                  <span v-if="item.money==0" style="margin:12px 10px 0px 0px;float:right;font-size:10px;color:#e60a78">免费</span>
                                  <span v-else style="margin:12px 10px 0px 0px;float:right;font-size:10px;color:#e60a78">x{{item.money}}</span>          <!-- aria-hidden="true"这个是用于屏幕阅读器的 -->
                                  <p style="margin:0px 0px 0px 0px;font-size:12px">{{item.introduce}}</p><br>
                            <!-- 分割线 -->
                            <van-divider :style="{  borderColor: 'rgb(216, 215, 215)',width:'100%', padding: '2px 0px',margin:'0px 0px' }"></van-divider>
                        
                  </div>
              </span>
           </van-tab>
                      <van-tab title="技巧教程" name="技巧教程">
                          <span v-for="(item,index) in list" :key="index">
                                <div class="touxiang" v-if="item.kindchild=='技巧教程'"  @click="$router.push({name:'courseinfo',params:{item:item,list:list}})" > 
                                          <!-- 教程封面 -->
                                        <van-image   width="100px" height="76px" :src="'http://localhost:3000/images/upload/'+ item.picture " style="float:left;margin:5px 0px 0px 15px"/>
                                          <span style="float:right;margin:28px 40px 0px 0px ;font-size:12px;" >教程{{item.id}}</span><br>
                                            <!-- 右箭头 -->
                                                <p style="margin:10px 105px 10px 0px;font-size:12px">原创:{{item.user_name}}</p>  
                                                <span v-if="item.money==0" style="margin:12px 10px 0px 0px;float:right;font-size:10px;color:#e60a78">免费</span>
                                                <span v-else style="margin:12px 10px 0px 0px;float:right;font-size:10px;color:#e60a78">x{{item.money}}</span>          <!-- aria-hidden="true"这个是用于屏幕阅读器的 -->
                                                <p style="margin:0px 0px 0px 0px;font-size:12px">{{item.introduce}}</p><br>
                                          <!-- 分割线 -->
                                          <van-divider :style="{  borderColor: 'rgb(216, 215, 215)',width:'100%', padding: '2px 0px',margin:'0px 0px' }"></van-divider>
                                      
                                </div>
                           </span>
                      </van-tab>
                      <van-tab title="工具教程" name="工具教程">
                         <span v-for="(item,index) in list" :key="index">
                                <div class="touxiang" v-if="item.kindchild=='工具教程'"  @click="$router.push({name:'courseinfo',params:{item:item,list:list}})"> 
                                          <!-- 教程封面 -->
                                             <van-image   width="100px" height="76px" :src="'http://localhost:3000/images/upload/'+ item.picture " style="float:left;margin:5px 0px 0px 15px"/>
                                          <span style="float:right;margin:28px 40px 0px 0px ;font-size:12px;" >教程{{item.id}}</span><br>
                                            <!-- 右箭头 -->
                                                <p style="margin:10px 105px 10px 0px;font-size:12px">原创:{{item.user_name}}</p>  
                                                <span v-if="item.money==0" style="margin:12px 10px 0px 0px;float:right;font-size:10px;color:#e60a78">免费</span>
                                                <span v-else style="margin:12px 10px 0px 0px;float:right;font-size:10px;color:#e60a78">x{{item.money}}</span>          <!-- aria-hidden="true"这个是用于屏幕阅读器的 -->
                                                <p style="margin:0px 0px 0px 0px;font-size:12px">{{item.introduce}}</p><br>
                                          <!-- 分割线 -->
                                          <van-divider :style="{  borderColor: 'rgb(216, 215, 215)',width:'100%', padding: '2px 0px',margin:'0px 0px' }"></van-divider>
                                      
                                </div>
                           </span>
                      </van-tab>
                      <van-tab title="通道教程" name="通道教程">
                         <span v-for="(item,index) in list" :key="index">
                                <div class="touxiang" v-if="item.kindchild=='通道教程'"  @click="$router.push({name:'courseinfo',params:{item:item,list:list}})"> 
                                          <!-- 教程封面 -->
                                      <van-image   width="100px" height="76px" :src="'http://localhost:3000/images/upload/'+ item.picture " style="float:left;margin:5px 0px 0px 15px"/>
                                          <span style="float:right;margin:28px 40px 0px 0px ;font-size:12px;" >教程{{item.id}}</span><br>
                                            <!-- 右箭头 -->
                                                <p style="margin:10px 105px 10px 0px;font-size:12px">原创:{{item.user_name}}</p>  
                                                <span v-if="item.money==0" style="margin:12px 10px 0px 0px;float:right;font-size:10px;color:#e60a78">免费</span>
                                                <span v-else style="margin:12px 10px 0px 0px;float:right;font-size:10px;color:#e60a78">x{{item.money}}</span>          <!-- aria-hidden="true"这个是用于屏幕阅读器的 -->
                                                <p style="margin:0px 0px 0px 0px;font-size:12px">{{item.introduce}}</p><br>
                                          <!-- 分割线 -->
                                          <van-divider :style="{  borderColor: 'rgb(216, 215, 215)',width:'100%', padding: '2px 0px',margin:'0px 0px' }"></van-divider>
                                      
                                </div>
                           </span>
                        </van-tab> 
                      <van-tab title="其他教程" name="其他教程">
                         <span v-for="(item,index) in list" :key="index">
                                <div class="touxiang" v-if="item.kindchild=='其他教程'"  @click="$router.push({name:'courseinfo',params:{item:item,list:list}})"> 
                                          <!-- 教程封面 -->
                                       <van-image   width="100px" height="76px" :src="'http://localhost:3000/images/upload/'+ item.picture " style="float:left;margin:5px 0px 0px 15px"/>
                                          <span style="float:right;margin:28px 40px 0px 0px ;font-size:12px;" >教程{{item.id}}</span><br>
                                            <!-- 右箭头 -->
                                                <p style="margin:10px 105px 10px 0px;font-size:12px">原创:{{item.user_name}}</p>  
                                                <span v-if="item.money==0" style="margin:12px 10px 0px 0px;float:right;font-size:10px;color:#e60a78">免费</span>
                                                <span v-else style="margin:12px 10px 0px 0px;float:right;font-size:10px;color:#e60a78">x{{item.money}}</span>          <!-- aria-hidden="true"这个是用于屏幕阅读器的 -->
                                                <p style="margin:0px 0px 0px 0px;font-size:12px">{{item.introduce}}</p><br>
                                          <!-- 分割线 -->
                                          <van-divider :style="{  borderColor: 'rgb(216, 215, 215)',width:'100%', padding: '2px 0px',margin:'0px 0px' }"></van-divider>
                                      
                                </div>
                           </span>
                      </van-tab>
                      <van-tab title="理论教程" name="理论教程">  
                          <span v-for="(item,index) in list" :key="index">
                                <div class="touxiang" v-if="item.kindchild=='理论教程'"  @click="$router.push({name:'courseinfo',params:{item:item,list:list}})"> 
                                          <!-- 教程封面 -->
                                      <van-image   width="100px" height="76px" :src="'http://localhost:3000/images/upload/'+ item.picture " style="float:left;margin:5px 0px 0px 15px"/>
                                          <span style="float:right;margin:28px 40px 0px 0px ;font-size:12px;" >教程{{item.id}}</span><br>
                                            <!-- 右箭头 -->
                                                <p style="margin:10px 105px 10px 0px;font-size:12px">原创:{{item.user_name}}</p>  
                                                <span v-if="item.money==0" style="margin:12px 10px 0px 0px;float:right;font-size:10px;color:#e60a78">免费</span>
                                                <span v-else style="margin:12px 10px 0px 0px;float:right;font-size:10px;color:#e60a78">x{{item.money}}</span>          <!-- aria-hidden="true"这个是用于屏幕阅读器的 -->
                                                <p style="margin:0px 0px 0px 0px;font-size:12px">{{item.introduce}}</p><br>
                                          <!-- 分割线 -->
                                          <van-divider :style="{  borderColor: 'rgb(216, 215, 215)',width:'100%', padding: '2px 0px',margin:'0px 0px' }"></van-divider>
                                 </div>
                            </span>
                      </van-tab>         
        </van-tabs>
    </div>
    

</template>
<script>
import {Toast} from 'vant'
export default {
    data(){
        return{
            list:[],
            user_name:'',
            bigname:'',
           activeName: ''      
        }
    },
    created(){
       this.$store.commit('setRight','')
       this.$store.commit('setLeftArrow', true)
       this.activeName=this.$route.params.name
       this.bigname=this.$route.params.bigname
       this.$store.commit('setTitle',this.bigname)
       this.user_name=this.$store.state.user.message.data.user.user_name //获取当前登录用户的所有收藏记录
       this.$api.course.courseinfo().then(res=>{   
           this.list=res.data.course

       })
    }
}
</script>
<style scoped>
.success{
  position: fixed;
  z-index: 10;
  margin-top:-2px ;
  border-color:#e60a78 ;
}
.success /deep/.van-tabs__line{
  background-color: none;
  width: 120px;
}
.success /deep/ .van-tab--active{
  color:white;
  background-color:#e60a78;
}
.success  .van-tab {
  color: #e60a78;
}
</style>
