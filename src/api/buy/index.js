import api from '../index'
import urls from './urls'
export default {
  
    buyinfo(params) {//获取交易记录信息
        params={
            user_name:params
        }
        return api.post(urls.buyinfo,params)
    },
    postbuy(params){//创建交易记录
        params={    
         user:params.user,
         item:params.item,
         date:params.date,
    }
          return api.post(urls.postbuy,params)
    },
    delectbuy(params) {//删除交易记录
          params={
              id:params
          }
        return api.post(urls.delectbuy,params)
    },
}