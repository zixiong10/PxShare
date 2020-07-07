import api from '../index'
import urls from './urls'
export default {
  
    publishinfo() {//获取所有动态
        return api.get(urls.publishinfo)
    },
    postpublish(params){//发表动态
        params={    
        user_id:params.user_id,
        publish:params.publish,
        date:params.date,
        location:params.location,
        user_photo:params.user_photo

    }
          return api.post(urls.postpublish,params)
      },
      delectpublish(params) {//通过id删除指定动态信息
          params={
              id:params
          }
        return api.post(urls.delectpublish,params)
    },
}