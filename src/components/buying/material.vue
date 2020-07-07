<template>
<div class="index">
      <!-- 搜索 -->
       <div class="shosuo" >
            <van-search placeholder="如何快速抠图" show-action shape="round">
              <template #action>
                    <div ><i class="fa fa-plus"  aria-hidden="true" @click="$router.push('uploadmaterial')"></i></div>
              </template>
            </van-search>
      </div>

      <!-- 中间的海报logo -->
      <div class="first">
               <van-image class="hehe" width="110px" height="110px" src="/images/share/buy/u25.png"/><br>
               <van-image class="hehe" width="130px" height="70px" src="/images/share/logo.png"/><br><br>
              <!-- 素材选择的按钮 -->
                <div>  
                    <van-button type="info" style="width:250px" @click="show = true">素材选择</van-button><br><br>
                    <van-action-sheet v-model="show" :actions="actions" @select="onSelect"   cancel-text="取消" />
                </div>    
              <!-- 选择素材的导航栏   -->
              <div class="center">
                    <van-row >   
                        <van-col span="8" style="margin-top:5px;font-size:14px"  ><input type="checkbox" class="allCheckedInput" v-model="isAllChecked"    @click="checkAll()"/><br><span>全选素材</span></van-col>
                        <van-col span="8" style="margin-top:5px;font-size:14px"><input type="checkbox" class="allactiveInput" v-model="inactive"  @click="active()"/><br><span>选择素材</span></van-col>
                        <van-col span="8" style="margin-top:7px;font-size:14px" @click="upload(result)"><i class="fa fa-upload " aria-hidden="true" ></i><br><span>点击下载</span></van-col>
                    </van-row>
              </div>
        </div>
   
  <!-- 素材的展示区域 -->
    <div class="material" >
        <!-- 勾选栏 -->
        <van-checkbox-group v-model="result" ref="checkboxGroup"   >
            <span v-for="(i,index) in list"  :key="index" style="height:100px" class="help">
            <!-- 人像的分类 -->
                <div class="人像" >
                    <van-grid :border="false" :column-num="3"  v-show="isShow1"   >
                          <van-grid-item v-if="i.kind=='人像'&& i.status==2">
                                <van-checkbox :name="i.id" icon-size="18px"  v-show="wo" ></van-checkbox>
                                <van-image style="width:100%;height:100px;" @click="showPopup(index)"  :src="'http://localhost:3000/images/upload/'+ i.picture "  />
                                <van-popup v-model="istrue" closeable   overlay> 
                                  <van-image style="width:250px;height:200px;"  :src="'http://localhost:3000/images/upload/'+ ichild "  />
                                </van-popup>
                          </van-grid-item> 
                    </van-grid>        
                </div>
           <!-- 风景的分类 -->
                <div class="风景" >
                    <van-grid :border="false" :column-num="3"  v-show="isShow2"  >
                          <van-grid-item v-if="i.kind=='风景'&& i.status==2">
                                  <van-checkbox :name="i.id" icon-size="18px"  v-show="wo" ></van-checkbox>
                                  <van-image style="width:100%;height:100px;" @click="showPopup(index)"  :src="'http://localhost:3000/images/upload/'+ i.picture "  />
                                  <van-popup v-model="istrue" closeable   overlay> 
                                      <van-image style="width:250px;height:200px;"  :src="'http://localhost:3000/images/upload/'+ ichild "  />
                                  </van-popup>
                          </van-grid-item>
                      </van-grid>    
                  </div>
           <!-- 建筑的分类 -->
                <div class="建筑" >
                    <van-grid :border="false" :column-num="3"  v-show="isShow3"  >
                          <van-grid-item v-if="i.kind=='建筑'&& i.status==2">
                                  <van-checkbox :name="i.id" icon-size="18px"  v-show="wo" ></van-checkbox>
                                  <van-image style="width:100%;height:100px;" @click="showPopup(index)"  :src="'http://localhost:3000/images/upload/'+ i.picture "  />
                                  <van-popup v-model="istrue" closeable   overlay> 
                                      <van-image style="width:250px;height:200px;"  :src="'http://localhost:3000/images/upload/'+ ichild "  />
                                  </van-popup>
                          </van-grid-item>
                      </van-grid>    
                  </div>       
            <!-- 风景的分类 -->
                <div class="美食" >
                    <van-grid :border="false" :column-num="3"  v-show="isShow4"  >
                          <van-grid-item v-if="i.kind=='美食'&& i.status==2">
                                  <van-checkbox :name="i.id" icon-size="18px"  v-show="wo" ></van-checkbox>
                                  <van-image style="width:100%;height:100px;" @click="showPopup(index)"  :src="'http://localhost:3000/images/upload/'+ i.picture "  />
                                  <van-popup v-model="istrue" closeable   overlay> 
                                      <van-image style="width:250px;height:200px;"  :src="'http://localhost:3000/images/upload/'+ ichild "  />
                                  </van-popup>
                          </van-grid-item>
                      </van-grid>    
                  </div> 
            <!-- 汽车的分类 -->
                <div class="汽车" >
                    <van-grid :border="false" :column-num="3"  v-show="isShow5"  >
                          <van-grid-item v-if="i.kind=='汽车'&& i.status==2">
                                  <van-checkbox :name="i.id" icon-size="18px"  v-show="wo" ></van-checkbox>
                                  <van-image style="width:100%;height:100px;" @click="showPopup(index)"  :src="'http://localhost:3000/images/upload/'+ i.picture "  />
                                  <van-popup v-model="istrue" closeable   overlay> 
                                      <van-image style="width:250px;height:200px;"  :src="'http://localhost:3000/images/upload/'+ ichild "  />
                                  </van-popup>
                          </van-grid-item>
                      </van-grid>    
                  </div>
             </span>
        </van-checkbox-group>
             <p style="color:white;font-size:8px;">aaaaaaaaaaaaaaaaaaa</p>
             <!-- 素材下方显示不出来，垫垫页面充数 -->
      </div>
  </div>

</template>

<script>
import { Toast } from 'vant';
export default {
   data() {
    return {
       inactive:false,//是否选择素材的勾选框
       isAllChecked:false,//是否显示全选勾选框
       wo:false, //是否显示所有素材的勾选框
       list:[] ,//所有图片素材信息
       istrue:false,//是否显示素材详情
       result:[],//选中的图片素材
       record_date:new Date(),//新创消息记录的时间
       text:'',//新创消息记录的内容
       isShow1:true,//是否显示素材分类1.....
       isShow2:false,
       isShow3:false,
       isShow4:false,
       isShow5:false,
       show: false,//点击素材选择后是否显示内容
       ichild:'',//素材图片详情
      actions: [{ name: '人像',color:'black'}, { name: '风景',color:'black' }, { name: '建筑',color:'black' },{ name: '美食' ,color:'black'}, { name: '汽车',color:'black' }],
    }
   },
   created(){
      this.$store.commit('setRight','')
      this.$store.commit('setLeftArrow', false)
      this.$store.commit('setTitle', 'PS素材')
       this.$api.material.materialinfo().then(res=>{
          this.list=res.data.material
          
       })
    },

     methods: {
       upload(b){
         let list={
            id:b,
            user_name:this.$store.state.user.message.data.user.user_name
         }
            this.$api.uploadmaterial.postuploadmaterial(list).then(res=>{
                      if(res.code==-1){
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
                      else if(res.code==1){
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
       },
     //点击选择素材按钮的后续
     active(){ if(!this.inactive){ this.wo=true } else{ this.wo=false } },
     
     //图片详情
     showPopup(index){ 
       this.istrue=true
       this.ichild=this.list[index].picture
     },
      
     //全选
     checkAll() {
      if(!this.isAllChecked){
         this.$refs.checkboxGroup.toggleAll(true);
        
      }else{
         this.$refs.checkboxGroup.toggleAll(false);
      }
    },
    //分类
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      
      if(item.name=='人像'){
        this.isShow1=true
        this.isShow2=false
        this.isShow3=false
        this.isShow4=false
        this.isShow5=false
      }
      else if(item.name=='风景'){
        this.isShow1=false
        this.isShow2=true
        this.isShow3=false
        this.isShow4=false
        this.isShow5=false
      }
      else if(item.name=='建筑'){
        this.isShow1=false
        this.isShow2=false
        this.isShow3=true
        this.isShow4=false
        this.isShow5=false
      }
       else if(item.name=='美食'){
        this.isShow1=false
        this.isShow2=false
        this.isShow3=false
        this.isShow4=true
        this.isShow5=false
      }
      else if(item.name=='汽车'){
        this.isShow1=false
        this.isShow2=false
        this.isShow3=false
        this.isShow4=false
        this.isShow5=true
      }
      this.show = false;
    },
  },
}
</script>
<style  scoped>

.index {
    width:100%;
    height:100%;
    background: rgb(252, 251, 250);
    
}
.index .shosuo  /deep/.van-search--show-action{
  padding: 5px 2px;
}
.index .first{
    background-color:rgb(255, 254, 254);
    width:300px;
    border-width:1px;
    border-style:solid;
    border-color:rgb(49, 49, 49);
    border-radius: 2%;
    margin-left:10px;
    margin-bottom:5px;
    margin-top:3px;
    box-shadow: 3px 3px 5px rgb(22, 22, 22);
    
}




.fa-plus:before{
    font-size:20px;
    color:#008080
}
.index .first .center{
    background:rgb(247, 245, 245) ;
    margin-top:-2px;
    opacity: 80%;
}

.index .material  {
  width:100%;
  height: 100%;

}
.index .material .van-checkbox-group .van-grid{
  float:left;
  width:106px;
}
 .material /deep/ .van-grid-item__content{
  float:left;
  width:106px;
  padding: 2px 2px;
}

</style>