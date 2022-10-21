//引入定义小仓库的函数
import { defineStore } from "pinia";
//引入发请求的函数
import { reqLogin, reqLogout } from "../api/index";
//引入定义好的tonken方法
import { getToken, removeToken, setToken } from '../utils/token-utils';
//引入element-plus提示样式
import { ElMessage } from "element-plus";

export const useUserInfoStore = defineStore('userInfo', {
  //存储数据的地方
  state: () => {
    return {
      token: getToken(),
    }
  },

  actions: {
    //登录
    async login(username: any, password: any) {
      try {
        let result = await reqLogin({ username, password });
        // let result = {token:''}
        //   // result.token = '1231456789854'

        this.token = result.token
        // 本地存储token
        setToken(result.token);
        //   // console.log(result);
        if (result.code === 200) {
          // 登录成功获取token的值
          // 存储token信息
          this.token = result.data.token;
          // 本地存储token
          setToken(result.data.token);
          // getToken();
          ElMessage.success("登录成功");
        }
      } catch (error) {
        ElMessage.error("用户名密码错误");
        return Promise.reject(error);
      }
    },
    //退出登录
    async logout() {
      try {
        await reqLogout(); // 请求头携带token,告诉后端token作废
        this.reset();
      } catch (error) {
        ElMessage.error("退出登录错误");
        return Promise.reject(error);
      }
    },
    reset() {
      removeToken();
      this.token = "";
    },
  }
})