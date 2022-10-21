import axios, { type AxiosResponse } from 'axios';

/* 定义response对象的data接口 */
interface ResponseData<T> {
  code: number
  data: T
  message: string
}

// 配置新建一个新的axios实例
let request = axios.create({
  baseURL: '/api',
  timeout: 50000,
})

// 添加请求拦截器
request.interceptors.request.use((config: any) => {
  return config
})
// 添加响应拦截器
request.interceptors.response.use(
    (response: AxiosResponse<ResponseData<any>>) => {
        

        return response
    
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default request
