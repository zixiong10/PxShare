import api from '../index'
import urls from './urls'
export default {
  
    uploadmaterialinfo(params) {//获取所有下载素材信息
        params={
            user_name:params
        }
        return api.post(urls.uploadmaterialinfo,params)
    },
    postuploadmaterial(params){//上传新的素材信息
        params={    
            user_name:params.user_name,
            id:params.id
    }
          return api.post(urls.postuploadmaterial,params)
      },
      delect(params) {//删除指定的素材信息
        params={
            id:params
        }
        return api.post(urls.delect,params)
    },
}