//整体框架组件

import material from '@/components/buying/material.vue'
import uploadmaterial from '@/components/buying/material/uploadmaterial.vue' //素材

import share from '@/components/buying/share.vue'
import publish from '@/components/buying/publish/publish.vue'               //分享圈
import shareinfo from '@/components/buying/publish/shareinfo.vue'

import course from '@/components/buying/course.vue'
import paying from '@/components/buying/course/paying.vue'   
import select from '@/components/buying/course/select.vue'
import kindcourse0 from '@/components/buying/course/kindcourse/kindcourse0.vue' 
import kindcourse1 from '@/components/buying/course/kindcourse/kindcourse1.vue' 
import kindcourse2 from '@/components/buying/course/kindcourse/kindcourse2.vue' 
import kindcourse3 from '@/components/buying/course/kindcourse/kindcourse3.vue' 
import kindcourse4 from '@/components/buying/course/kindcourse/kindcourse4.vue'                //教程
import kindcourse5 from '@/components/buying/course/kindcourse/kindcourse5.vue' 
import kindcourse6 from '@/components/buying/course/kindcourse/kindcourse6.vue' 
import kindcourse7 from '@/components/buying/course/kindcourse/kindcourse7.vue' 
import kindcourse8 from '@/components/buying/course/kindcourse/kindcourse8.vue' 
import courseinfo from '@/components/buying/course/courseinfo.vue'
import courseinfo2 from '@/components/buying/course/courseinfo2.vue'
import uploadcourse from '@/components/buying/course/uploadcourse.vue' 

import set from '@/components/buying/personal/set.vue'
import personal from '@/components/buying/personal.vue'                     //个人页面
import data from '@/components/buying/personal/data.vue'
import star from '@/components/buying/personal/star.vue'
import upload from '@/components/buying/personal/upload.vue'
import record from '@/components/buying/personal/record.vue'
import password from '@/components/buying/personal/password.vue'
import successbuying from '@/components/buying/personal/successbuying.vue'
import successupload from '@/components/buying/personal/successupload.vue'
import watchcoursetext from '@/components/buying/personal/watchcoursetext.vue'


export default [
   {
       path:'/',
       component:course,
   },
 
   {
    path:'personal',
    component: personal,
},
{
    path:'share',
    component: share,
},
{
    path:'material',
    component: material,
},
{
    path:'password',
    component:password
},
{
    path:'data',
    component:data
},
{
    path:'set',
    component:set
},
{
    path:'select',
    name:'select',
    component:select,
},
        {
          path: 'kindcourse0',
          name:'kindcourse0',
          component:kindcourse0,
        },
        {
            path: 'kindcourse1',
            name:'kindcourse1',
            component:kindcourse1,
        },
        {
            path: 'kindcourse2',
            name:'kindcourse2',
            component:kindcourse2,
        },
        {
            path: 'kindcourse3',
            name:'kindcourse3',
            component:kindcourse3,
        },
        {
            path: 'kindcourse4',
            name:'kindcourse4',
            component:kindcourse4,
      },
        {
            path: 'kindcourse5',
            name:'kindcourse5',
            component:kindcourse5,
       },
        {
            path: 'kindcourse6',
            name:'kindcourse6',
            component:kindcourse6,
        },
        {
            path: 'kindcourse7',
            name:'kindcourse7',
            component:kindcourse7,
        },
        {
            path: 'kindcourse8',
            name:'kindcourse8',
            component:kindcourse8,
        },
{
    path:'uploadmaterial',
    component:uploadmaterial
},
{
    path:'successupload',
    name:'successupload',
    component:successupload
},
{
    path:'uploadcourse',
    component:uploadcourse
},
{
    path:'publish',
    component:publish
},
{
    path:'shareinfo',
    name:'shareinfo',
    component:shareinfo
},
{
    path:'courseinfo',
    name:'courseinfo',
    component:courseinfo
},
{
    path:'courseinfo2',
    name:'courseinfo2',
    component:courseinfo2
},
{
    path:'paying',
    name:'paying',
    component:paying
},
{
    path:'upload',
    name:'upload',
    component:upload
},
{
    path:'successbuying',
    name:'successbuying',
    component:successbuying
},
{
    path:'star',
    name:'star',
    component:star
},
{
    path:'record',
    name:'record',
    component:record
},
{
    path:'watchcoursetext',
    name:'watchcoursetext',
    component:watchcoursetext
},

]