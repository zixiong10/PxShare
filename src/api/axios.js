import axios from 'axios'
import {getLocalStorage} from '@/utils/localStorage'
import { Toast } from 'mint-ui'

//创建axios实例
let service = axios.create({
    timeout:60000
})

//设置post、put默认Content-Type
service.defaults.headers.post['Content-Type'] = 'application/json'
service.defaults.headers.put['Content-Type'] = 'application/json'

//添加请求拦截器
service.interceptors.request.use(
    (config) => {
        //LocalStorage中获取token后设置请求头
        config.headers.common['Authorization'] = getLocalStorage('Token')
        return config
    },
    (error) => {
        //请求错误处理
        Toast('请求超时!')
        return Promise.reject(error)
    }
)

//添加响应拦截器
//response拦截器
service.interceptors.response.use(data=>{
    if(data.status && data.status == 200 && data.data.status == 'error') {
        Toast({message:data.data.msg});
        return;
    }
    return data;
}, err=> {
    //错误处理
    if(err && err.response) {
        switch (err.response.status) {
            case 400: Toast('请求错误(400)');break;
            case 401: Toast('未授权,请重新登录(401)');router.push('/login');break;
            case 403: Toast('拒绝访问(403)');break;
            case 404: Toast('请求出错(404)');break;
            case 408: Toast('请求超时(408)');break;
            case 500: Toast('服务器错误(500)');break;
            case 501: Toast('服务未实现(501)');break;
            case 502: Toast('网络错误(502)');break;
            case 503: Toast('服务不可用(503)');break;
            case 504: Toast('网络超时(504)');break;
            case 505: Toast('HTTP版本不受支持(505)');break;
            default: Toast(`连接出错(${err.response.status})!`);
        }
    }else {
        Toast('连接服务器失败')
    }
    Toast({message:err.message})
    return Promise.reject(err);
})

/**
 * 创建统一封装过的axios实例
 * @return {AxiosInstance}
 */
export default function() {
    return service
}