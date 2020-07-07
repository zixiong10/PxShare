import api from '../index'
import urls from './urls'
export default {
  
    remindinfo(params) {//通过用户名获取指定消息提醒状态值
        params={
            user_name:params
        }
        return api.post(urls.remindinfo,params)
    },
    postremind(params){//创建新的消息提醒状态值
        params={    
            user_name:params.user_name,
            status:params.status
    }
          return api.post(urls.postremind,params)
      },
  
}