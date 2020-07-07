import api from '../index'
import urls from './urls'
export default {
  
    recordinfo(params) {//通过用户名获取指定记录信息
        params={
            user_name:params
        }
        return api.post(urls.recordinfo,params)
    },
    postrecord(params){//创建新的消息记录
        params={    
            user_name:params.name,
            status:params.status,
            text:params.text,
            record_date:params.record_date
    }
          return api.post(urls.postrecord,params)
      },
      delectrecord(params) {//通过id删除指定消息记录
          params={
            id:params
          }
          
        return api.post(urls.delectrecord,params)
    },
    alldelect(params) {//删除所有消息记录
        params={
          list:params
        }
        
      return api.post(urls.alldelect,params)
  },
}