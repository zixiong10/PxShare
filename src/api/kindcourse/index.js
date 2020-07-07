import api from '../index'
import urls from './urls'
export default {
  
   kindcourseinfo() {//获取所有教程小分类
       
        return api.get(urls.kindcourseinfo)
    },
  
}