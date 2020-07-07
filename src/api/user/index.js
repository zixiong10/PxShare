import api from '../index'
import urls from './urls'
export default {
    userinfo() { //获得所有用户信息
        return api.get(urls.userinfo)
    },

    postlogin(params) {//登录判断
        params={
            user_id:params.user_id,
            password:params.password
        }
        return api.post(urls.postlogin,params)
    },
    postuser (params){//注册新的用户
        params={user_id:params.user_id,
        user_name:params.user_name,
        password:params.password,
        role:params.role ,
        user_photo:params.user_photo     
    }
          return api.post(urls.postuser,params)
      },
    putpassword(params){//修改密码
        params = {
            user_id:params.user_id,
            oldpassword:params.oldpassword,
            newpassword:params.newpassword,
            repeatpassword:params.repeatpassword
        }
        return api.put(urls.putpassword,params)
    },

    putdata(params){//修改用户信息
        params = {
            user_id:params.user_id,
            user_name:params.user_name,
            qianming:params.qianming
        }
        return api.put(urls.putdata,params)
    },
}