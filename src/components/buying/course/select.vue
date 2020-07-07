<template>
 <div class="daohang" >
     <div class="left">
            <van-sidebar v-model="activeKey" @change="onChange">
                <van-sidebar-item title="基础教程" />
                <van-sidebar-item title="滤镜教程" />
                <van-sidebar-item title="文字特效" />
                <van-sidebar-item title="美化教程" />
                <van-sidebar-item title="调色教程" />
                <van-sidebar-item title="照片处理" />
                <van-sidebar-item title="抠图教程" />
                <van-sidebar-item title="修复教程" />
                <van-sidebar-item title="合成教程" />
            </van-sidebar>
     </div>

      <!-- 基础教程 -->
           <van-grid  :column-num="2" v-show="isShow1" >
                     <!-- 新手教程 -->
                    <van-grid-item  @click="$router.push({name:'kindcourse0',params:{name:'新手教程',bigname:'基础教程'}})">
                      <van-image style="width:100% ;height:100px;padding:0px" src="/images/share/buy/main/13.jpg"  />
                      <span style="font-size:13px;margin-top:5px">新手教程</span>
                    </van-grid-item>
                    <!-- 技巧教程 -->
                    <van-grid-item @click="$router.push({name:'kindcourse0',params:{name:'技巧教程',bigname:'基础教程'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/12.jpg" />
                        <span style="font-size:13px;margin-top:5px">技巧教程</span>
                    </van-grid-item>
                    <!-- 工具教程 -->
                    <van-grid-item @click="$router.push({name:'kindcourse0',params:{name:'工具教程',bigname:'基础教程'}})" >
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/224.jpg"  />
                      <span style="font-size:13px;margin-top:5px">工具教程</span>
                    </van-grid-item>
                     <!-- 通道教程 -->
                    <van-grid-item @click="$router.push({name:'kindcourse0',params:{name:'通道教程',bigname:'基础教程'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/15.jpg" />
                        <span style="font-size:13px;margin-top:5px">通道教程</span>
                    </van-grid-item>
                     <!-- 其他教程 -->
                    <van-grid-item @click="$router.push({name:'kindcourse0',params:{name:'其他教程',bigname:'基础教程'}})">
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/16.jpg"  />
                      <span style="font-size:13px;margin-top:5px">其他教程</span>
                    </van-grid-item>
                    <!-- 理论教程 -->
                    <van-grid-item @click="$router.push({name:'kindcourse0',params:{name:'理论教程',bigname:'基础教程'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/17.jpg" />
                        <span style="font-size:13px;margin-top:5px">理论教程</span>
                    </van-grid-item>
             </van-grid>
      <!-- 滤镜教程 -->
           <van-grid  :column-num="2" v-show="isShow2" >
                     <!-- 滤镜作图 -->
                    <van-grid-item @click="$router.push({name:'kindcourse1',params:{name:'滤镜作图',bigname:'滤镜教程'}})" >
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/18.png"  />
                      <span style="font-size:13px;margin-top:5px">滤镜作图</span>
                    </van-grid-item>
                     <!-- 滤镜使用 -->
                    <van-grid-item @click="$router.push({name:'kindcourse1',params:{name:'滤镜使用',bigname:'滤镜教程'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/19.png" />
                        <span style="font-size:13px;margin-top:5px">滤镜使用</span>
                    </van-grid-item>
                     <!-- 边框教程 -->
                    <van-grid-item @click="$router.push({name:'kindcourse1',params:{name:'边框教程',bigname:'滤镜教程'}})" >
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/20.png"  />
                      <span style="font-size:13px;margin-top:5px">边框教程</span>
                    </van-grid-item>
                    <!-- 动画闪字 -->
                    <van-grid-item @click="$router.push({name:'kindcourse1',params:{name:'动画闪字',bigname:'滤镜教程'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/22.jpg" />
                        <span style="font-size:13px;margin-top:5px">动画闪字</span>
                    </van-grid-item>
                    <!-- 动画教程 -->
                    <van-grid-item @click="$router.push({name:'kindcourse1',params:{name:'动画教程',bigname:'滤镜教程'}})">
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/21.gif"  />
                      <span style="font-size:13px;margin-top:5px">动画教程</span>
                    </van-grid-item>
                    <!-- 闪图闪字 -->
                    <van-grid-item @click="$router.push({name:'kindcourse1',params:{name:'闪图闪字',bigname:'滤镜教程'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/23.gif" />
                        <span style="font-size:13px;margin-top:5px">闪图闪字</span>
                    </van-grid-item>
            </van-grid>
      

      <!-- 文字特效 -->
           <van-grid  :column-num="2" v-show="isShow3" >
                    <!-- 立体字 -->
                    <van-grid-item @click="$router.push({name:'kindcourse2',params:{name:'立体字',bigname:'文字特效'}})" >
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/24.png"  />
                      <span style="font-size:13px;margin-top:5px">立体字</span>
                    </van-grid-item>
                    <!-- 普通字 -->
                    <van-grid-item @click="$router.push({name:'kindcourse2',params:{name:'普通字',bigname:'文字特效'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/25.png" />
                        <span style="font-size:13px;margin-top:5px">普通字</span>
                    </van-grid-item>
                    <!-- 火焰字 -->
                    <van-grid-item @click="$router.push({name:'kindcourse2',params:{name:'火焰字',bigname:'文字特效'}})" >
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/26.png"  />
                      <span style="font-size:13px;margin-top:5px">火焰字</span>
                    </van-grid-item>
                    <!-- 冰雪字 -->
                    <van-grid-item @click="$router.push({name:'kindcourse2',params:{name:'冰雪字',bigname:'文字特效'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/27.jpg" />
                        <span style="font-size:13px;margin-top:5px">冰雪字</span>
                    </van-grid-item>
                    <!-- 金属字 -->
                    <van-grid-item @click="$router.push({name:'kindcourse2',params:{name:'金属字',bigname:'文字特效'}})">
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/28.jpg"  />
                      <span style="font-size:13px;margin-top:5px">金属字</span>
                    </van-grid-item>
                    <!-- 可爱字 -->
                    <van-grid-item @click="$router.push({name:'kindcourse2',params:{name:'可爱字',bigname:'文字特效'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/29.jpg" />
                        <span style="font-size:13px;margin-top:5px">可爱字</span>
                    </van-grid-item>
            </van-grid>
      

      <!-- 美化教程 -->
           <van-grid  :column-num="2" v-show="isShow4" >
                    <!-- 磨皮教程 -->
                    <van-grid-item @click="$router.push({name:'kindcourse3',params:{name:'磨皮教程',bigname:'美化教程'}})" >
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/32.jpg"  />
                      <span style="font-size:13px;margin-top:5px">磨皮教程</span>
                    </van-grid-item>
                     <!-- 人像精修 -->
                    <van-grid-item  @click="$router.push({name:'kindcourse3',params:{name:'人像精修',bigname:'美化教程'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/33.jpg" />
                        <span style="font-size:13px;margin-top:5px">人像精修</span>
                    </van-grid-item>
                    <!-- 美白教程 -->
                   <van-grid-item  @click="$router.push({name:'kindcourse3',params:{name:'美白教程',bigname:'美化教程'}})" >
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/34.jpg"  />
                      <span style="font-size:13px;margin-top:5px">美白教程</span>
                    </van-grid-item>
                    <!-- 上色教程 -->
                    <van-grid-item  @click="$router.push({name:'kindcourse3',params:{name:'上色教程',bigname:'美化教程'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/35.jpg" />
                        <span style="font-size:13px;margin-top:5px">上色教程</span>
                    </van-grid-item>
                     <!-- 美色教程 -->
                    <van-grid-item  @click="$router.push({name:'kindcourse3',params:{name:'美色教程',bigname:'美化教程'}})">
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/36.jpg"  />
                      <span style="font-size:13px;margin-top:5px">美色教程</span>
                    </van-grid-item>
                    <!-- 其他教程 -->
                    <van-grid-item @click="$router.push({name:'kindcourse3',params:{name:'其他教程',bigname:'美化教程'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/1.jpg" />
                        <span style="font-size:13px;margin-top:5px">其他教程</span>
                    </van-grid-item>
            </van-grid>
     

      <!-- 调色教程 -->
           <van-grid  :column-num="2" v-show="isShow5" >
                     <!-- 人物调色 -->
                    <van-grid-item @click="$router.push({name:'kindcourse4',params:{name:'人物调色',bigname:'调色教程'}})" >
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/37.png"  />
                      <span style="font-size:13px;margin-top:5px">人物调色</span>
                    </van-grid-item>
                     <!-- 风景调色 -->
                    <van-grid-item @click="$router.push({name:'kindcourse4',params:{name:'风景调色',bigname:'调色教程'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/38.jpg" />
                        <span style="font-size:13px;margin-top:5px">风景调色</span>
                    </van-grid-item>
                    <!-- 影楼调色 -->
                   <van-grid-item @click="$router.push({name:'kindcourse4',params:{name:'影楼调色',bigname:'调色教程'}})" >
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/39.jpg"  />
                      <span style="font-size:13px;margin-top:5px">影楼调色</span>
                    </van-grid-item>
                     <!-- LR教程 -->
                    <van-grid-item @click="$router.push({name:'kindcourse4',params:{name:'LR教程',bigname:'调色教程'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/40.png" />
                        <span style="font-size:13px;margin-top:5px">LR教程</span>
                    </van-grid-item>
                     <!-- 调色效果 -->
                    <van-grid-item @click="$router.push({name:'kindcourse4',params:{name:'调色效果',bigname:'调色教程'}})">
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/41.jpg"  />
                      <span style="font-size:13px;margin-top:5px">调色效果</span>
                    </van-grid-item>
            </van-grid>
      


      <!-- 照片处理 -->
           <van-grid  :column-num="2" v-show="isShow6" >
                     <!-- 效果教程 -->
                    <van-grid-item @click="$router.push({name:'kindcourse5',params:{name:'效果教程',bigname:'照片处理'}})" >
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/40.png"  />
                      <span style="font-size:13px;margin-top:5px">效果教程</span>
                    </van-grid-item>
                     <!-- 转手绘 -->
                    <van-grid-item @click="$router.push({name:'kindcourse5',params:{name:'转手绘',bigname:'照片处理'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/41.png" />
                        <span style="font-size:13px;margin-top:5px">转手绘</span>
                    </van-grid-item>
                     <!-- 艺术画效 -->
                   <van-grid-item @click="$router.push({name:'kindcourse5',params:{name:'艺术画效',bigname:'照片处理'}})" >
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/42.jpg"  />
                      <span style="font-size:13px;margin-top:5px">艺术画效</span>
                    </van-grid-item>
                    <!-- 艺术效果 -->
                    <van-grid-item @click="$router.push({name:'kindcourse5',params:{name:'元素效果',bigname:'照片处理'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/43.png" />
                        <span style="font-size:13px;margin-top:5px">元素效果</span>
                    </van-grid-item>
                     <!-- 怀旧风格 -->
                    <van-grid-item @click="$router.push({name:'kindcourse5',params:{name:'怀旧风格',bigname:'照片处理'}})">
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/44.jpg"  />
                      <span style="font-size:13px;margin-top:5px">怀旧风格</span>
                    </van-grid-item>
                    <!-- 动漫签 -->
                    <van-grid-item @click="$router.push({name:'kindcourse5',params:{name:'动漫签',bigname:'照片处理'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/45.jpg" />
                        <span style="font-size:13px;margin-top:5px">动漫签</span>
                    </van-grid-item>
            </van-grid>
      
      <!-- 抠图教程 -->
           <van-grid  :column-num="2" v-show="isShow7" >
                    <!-- 通道抠图 -->
                    <van-grid-item @click="$router.push({name:'kindcourse6',params:{name:'通道抠图',bigname:'抠图教程'}})" >
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/46.png"  />
                      <span style="font-size:13px;margin-top:5px">通道抠图</span>
                    </van-grid-item>
                     <!-- 滤镜抠图 -->
                    <van-grid-item @click="$router.push({name:'kindcourse6',params:{name:'滤镜抠图',bigname:'抠图教程'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/47.png" />
                        <span style="font-size:13px;margin-top:5px">滤镜抠图</span>
                    </van-grid-item>
                    <!-- 其他抠图 -->
                    <van-grid-item @click="$router.push({name:'kindcourse6',params:{name:'其他抠图',bigname:'抠图教程'}})" >
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/48.png"  />
                      <span style="font-size:13px;margin-top:5px">其他抠图</span>
                    </van-grid-item>
                    <!-- 抠透明物 -->
                    <van-grid-item @click="$router.push({name:'kindcourse6',params:{name:'抠透明物',bigname:'抠图教程'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/49.png" />
                        <span style="font-size:13px;margin-top:5px">抠透明物</span>
                    </van-grid-item>
                     <!-- 抠头发 -->
                    <van-grid-item @click="$router.push({name:'kindcourse6',params:{name:'抠头发',bigname:'抠图教程'}})">
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/50.png"  />
                      <span style="font-size:13px;margin-top:5px">抠头发</span>
                    </van-grid-item>
                    <!-- 抠背景 -->
                    <van-grid-item @click="$router.push({name:'kindcourse6',params:{name:'抠背景',bigname:'抠图教程'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/51.jpg" />
                        <span style="font-size:13px;margin-top:5px">抠背景</span>
                    </van-grid-item>
            </van-grid>
      

      <!-- 修复教程 -->
           <van-grid  :column-num="2" v-show="isShow8" >
                      <!-- 清除杂物 -->
                      <van-grid-item @click="$router.push({name:'kindcourse7',params:{name:'清除杂物',bigname:'修复教程'}})" >
                        <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/56.jpg"  />
                        <span style="font-size:13px;margin-top:5px">清除杂物</span>
                      </van-grid-item>
                      <!-- 矫正调色 -->
                      <van-grid-item @click="$router.push({name:'kindcourse7',params:{name:'矫正调色',bigname:'修复教程'}})">
                        <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/57.jpg" />
                          <span style="font-size:13px;margin-top:5px">矫正调色</span>
                      </van-grid-item>
                      <!-- 旧照翻新 -->
                      <van-grid-item @click="$router.push({name:'kindcourse7',params:{name:'旧照翻新',bigname:'修复教程'}})" >
                        <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/58.jpg"  />
                        <span style="font-size:13px;margin-top:5px">旧照翻新</span>
                      </van-grid-item>
                      <!-- 清除水印 -->
                      <van-grid-item @click="$router.push({name:'kindcourse7',params:{name:'清除水印',bigname:'修复教程'}})">
                        <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/59.png" />
                          <span style="font-size:13px;margin-top:5px">清除水印</span>
                      </van-grid-item>
                      <!-- 清除网纹 -->
                      <van-grid-item @click="$router.push({name:'kindcourse7',params:{name:'清除网纹',bigname:'修复教程'}})">
                        <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/59.jpg"  />
                        <span style="font-size:13px;margin-top:5px">清除网纹</span>
                      </van-grid-item>
                      <!-- 模糊锐化 -->
                      <van-grid-item @click="$router.push({name:'kindcourse7',params:{name:'模糊锐化',bigname:'修复教程'}})">
                        <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/60.jpg" />
                          <span style="font-size:13px;margin-top:5px">模糊锐化</span>
                      </van-grid-item>
            </van-grid>
      

      <!-- 合成教程 -->
           <van-grid  :column-num="2" v-show="isShow9" >
                     <!-- 照片合成 -->
                    <van-grid-item @click="$router.push({name:'kindcourse8',params:{name:'照片合成',bigname:'合成教程'}})" >
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/52.png"  />
                      <span style="font-size:13px;margin-top:5px">照片合成</span>
                    </van-grid-item>
                     <!-- 恶搞图片 -->
                    <van-grid-item  @click="$router.push({name:'kindcourse8',params:{name:'恶搞图片',bigname:'合成教程'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/53.jpg" />
                        <span style="font-size:13px;margin-top:5px">恶搞图片</span>
                    </van-grid-item>
                     <!-- 换头换脸 -->
                    <van-grid-item  @click="$router.push({name:'kindcourse8',params:{name:'换脸换头',bigname:'合成教程'}})" >
                      <van-image style="width:100% ;height:100px;" src="/images/share/buy/main/54.jpg"  />
                      <span style="font-size:13px;margin-top:5px">换脸换头</span>
                    </van-grid-item>
                     <!-- 明星合成 -->
                    <van-grid-item  @click="$router.push({name:'kindcourse8',params:{name:'明星合成',bigname:'合成教程'}})">
                      <van-image  style="width:100% ;height:100px;" src="/images/share/buy/main/55.jpg" />
                        <span style="font-size:13px;margin-top:5px">明星合成</span>
                    </van-grid-item>
            </van-grid>
    
    
 </div>
</template>
<script>


export default {
  data(){
      return{
       isShow1:true,
       isShow2:false,
       isShow3:false,
       isShow4:false,
       isShow5:false,
       isShow6:false,
       isShow7:false,
       isShow8:false,
       isShow9:false,
       activeKey: 0,
      }
    
  },
  methods: {
    onChange(index) {
     if(index==0){
        this.isShow1=true
        this.isShow2=false
        this.isShow3=false
        this.isShow4=false
        this.isShow5=false
        this.isShow6=false
        this.isShow7=false
        this.isShow8=false
        this.isShow9=false
      }
      else if(index==1){
        this.isShow1=false
        this.isShow2=true
        this.isShow3=false
        this.isShow4=false
        this.isShow5=false
        this.isShow6=false
        this.isShow7=false
        this.isShow8=false
        this.isShow9=false
      }
      else if(index==2){
        this.isShow1=false
        this.isShow2=false
        this.isShow3=true
        this.isShow4=false
        this.isShow5=false
        this.isShow6=false
        this.isShow7=false
        this.isShow8=false
        this.isShow9=false
      }
       else if(index==3){
        this.isShow1=false
        this.isShow2=false
        this.isShow3=false
        this.isShow4=true
        this.isShow5=false
        this.isShow6=false
        this.isShow7=false
        this.isShow8=false
        this.isShow9=false
      }
      else if(index==4){
        this.isShow1=false
        this.isShow2=false
        this.isShow3=false
        this.isShow4=false
        this.isShow5=true
        this.isShow6=false
        this.isShow7=false
        this.isShow8=false
        this.isShow9=false
      }
      else if(index==5){
        this.isShow1=false
        this.isShow2=false
        this.isShow3=false
        this.isShow4=false
        this.isShow5=false
        this.isShow6=true
        this.isShow7=false
        this.isShow8=false
        this.isShow9=false
      }
      else if(index==6){
        this.isShow1=false
        this.isShow2=false
        this.isShow3=false
        this.isShow4=false
        this.isShow5=false
        this.isShow6=false
        this.isShow7=true
        this.isShow8=false
        this.isShow9=false
      }
      else if(index==7){
        this.isShow1=false
        this.isShow2=false
        this.isShow3=false
        this.isShow4=false
        this.isShow5=false
        this.isShow6=false
        this.isShow7=false
        this.isShow8=true
        this.isShow9=false
      }
        else if(index==8){
        this.isShow1=false
        this.isShow2=false
        this.isShow3=false
        this.isShow4=false
        this.isShow5=false
        this.isShow6=false
        this.isShow7=false
        this.isShow8=false
        this.isShow9=true
      }
    },
  },
  created(){
      this.$store.commit('setRight','')
      this.$store.commit('setLeftArrow',true)
       this.$store.commit('setTitle','教程库')
       this.activeKey=this.$route.params.name
       if(this.activeKey==1){
        this.isShow1=false
        this.isShow2=true
       }
       else if(this.activeKey==2){
          this.isShow1=false
          this.isShow3=true
       }
        else if(this.activeKey==3){
          this.isShow1=false
          this.isShow4=true
       }
        else if(this.activeKey==4){
          this.isShow1=false
          this.isShow5=true
       }
        else if(this.activeKey==5){
          this.isShow1=false
          this.isShow6=true
       }
        else if(this.activeKey==6){
          this.isShow1=false
          this.isShow7=true
       }
        else if(this.activeKey==7){
          this.isShow1=false
          this.isShow8=true
       }
        else if(this.activeKey==8){
          this.isShow1=false
          this.isShow9=true
       }
  }
};

</script>

<style scoped>


.daohang .left{
    float:left;
    
}
.daohang .van-sidebar /deep/.van-sidebar-item--select{
    color:#e60a78; 
}
.daohang .van-sidebar .van-sidebar-item{
    padding: 14px 12px;
    line-height: 11px;
    font-size: 13px;
    font-weight: bolder;
   background-color: rgb(226, 225, 226);
}
.daohang /deep/.van-sidebar-item--select::before{
   background-color:rgb(226, 225, 226) ;
   position:fixed;
 }

.daohang  /deep/ .van-grid-item__content{
  padding:0px 2px 5px 2px ;
}

</style>