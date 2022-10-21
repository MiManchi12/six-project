//引入发请求的函数
import service from '../utils/requestLogin';
//登录请求
export const reqLogin = (data) => service({ url: '/admin/acl/index/login', method: 'post', data })

//退出登录的接口
export const reqLogout = () => service({ url: `/admin/acl/index/logout`, method: 'post' });

