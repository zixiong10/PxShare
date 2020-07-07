import api from '../index'
import urls from './urls'
export default {
  
    materialinfo() {//获取所有素材
        return api.get(urls.materialinfo)
    },
    findmaterial(params) {//通过用户名获得指定素材
        params={
            user_name:params
        }
        return api.post(urls.findmaterial,params)
    },
    postmaterial(params){//上传素材
        params={    
        user_id:params.user_id,
        id:params.id,
        check_time:params.check_time,
        user_name:params.user_name,
        kind:params.kind,
        user_photo:params.user_photo

    }
          return api.post(urls.postmaterial,params)
      }
}