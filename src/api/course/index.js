import api from '../index'
import urls from './urls'
export default {
    searchCourse(params) {//搜索时通过id去寻找指定教程
        params={
            id:params,
        }
        return api.post(urls.searchCourse,params)
    },
    
    foundcourse(params) {//通过id去寻找指定教程(上面与这并不冲突，只是为了方便搜索那里)
        params={
            id:params,
        }
        return api.post(urls.foundcourse,params)
    },
    findcourse(params) {//通过用户名去寻找指定教程
        params={
            user_name:params
        }
        return api.post(urls.findcourse,params)
    },

    courseinfo() {//获取所有的教程信息
        return api.get(urls.courseinfo)
    },
    
    postcourse(params){//上传新的教程
        params={    
        user_id:params.user_id,
        id:params.id,
        check_time:params.check_time,
        money:params.money,
        type:params.type,
        kind:params.kind,
        user_name:params.user_name,
        user_photo:params.user_photo,
        introduce:params.introduce,
        text:params.text
        

    }
          return api.post(urls.postcourse,params)
      },
      delectcourse(params) {//通过id删除指定教程
          params={
              id:params
          }
        return api.post(urls.delectcourse,params)
    },
}