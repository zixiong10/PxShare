import api from '../index'
import urls from './urls'
export default {
  
    starinfo(params) {//通过用户名获取指定的收藏记录
        params={
            user_name:params
        }
        return api.post(urls.starinfo,params)
    },
    poststar(params){//收藏新的教程
        params={    
          item:params.item,
          user_name:params.user_name,
          status:params.status
    }
          return api.post(urls.poststar,params)
      },
      delectstar(params) {//取消收藏指定教程
          params={
            item:params.item,
            user_name:params.user_name,
          }
          
        return api.post(urls.delectstar,params)
    },
    delect(params) {//取消收藏指定教程
        params={
          item:params.item,
          user_name:params.user_name,
        }
        
      return api.post(urls.delect,params)
  },
}