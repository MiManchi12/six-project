//引入发请求的函数
import requestLogin from '../utils/requestLogin';
//登录请求
export const reqLogin = (data) => requestLogin({ url: '/user/passport/login', method: 'post', data })

//退出登录的接口
export const reqLogout = () => requestLogin({ url: `/user/passport/logout`, method: 'get' });

