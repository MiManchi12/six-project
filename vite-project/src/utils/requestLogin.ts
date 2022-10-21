<<<<<<< HEAD
import axios from 'axios'
import 'nprogress/nprogress.css'
import { v4 as uuidv4 } from "uuid"
import store from '@/store'
//进度条一些其他的配置：比如说小圆球有没有的设置
nprogress.configure({ showSpinner: false });
// axios基本配置
let request = axios.create({
	// 基础路径
	baseURL: '/api',//所有请求路径当中携带/api
	timeout: 5000,//代表超时的时间为5s
});
// 生成uuid并保存到本地避免每次请求每次新建
function getUserTempId() {
	let userTempId = localStorage.getItem('USERTEMPID_S2')
	if (!userTempId) {
		userTempId = uuidv4()
		localStorage.setItem('USERTEMPID_S2', userTempId)
=======
import axios, { type AxiosResponse } from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
import pinia from '../store/index';
import { useUserInfoStore } from '../store/userInfo';


/* 定义response对象的data接口 */
interface ResponseData<T> {
	code: number;
	data: T;
	message: string;
}

// 配置新建一个 axios 实例
const service = axios.create({
	baseURL: 'apilogin',
	timeout: 50000,
});

// 添加请求拦截器
service.interceptors.request.use(
	(config:any) => {
		if(useUserInfoStore().token){
			
		}
		return config;
>>>>>>> rkp
	}
	return userTempId
}
// 请求拦截器,在请求头中携带
request.interceptors.request.use((config) => {
	// 请求拦截器拦截到请求进度条开始
	nprogress.start();
	config.headers['userTempId'] = getUserTempId()
	let token = store.state.user.token
	if (token) {
		config.headers['token'] = token
	}
	//配置对象
	return config
})
// 响应拦截器
request.interceptors.response.use((res) => {
	// 响应拦截器拦截到响应进度条结束
	nprogress.done();
	return res.data
}, (error) => {

	// 处理失败的业务,终止promise链，返回一个pending promise对象
	return new Promise(() => { })
})

export default request;

