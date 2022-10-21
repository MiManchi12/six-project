<template>
    <div class="register-container">
        <!-- 注册内容 -->
        <div class="register">
            <h3>
                注册新用户
                <span class="go">我有账号，去 <router-link to="/enter">登陆</router-link>
                </span>
            </h3>
            <!-- 手机号 -->
            <div class="content">
                <label>手机号:</label>
                <input type="text" placeholder="请输入你的手机号" v-model="registerParams.phone" />
            </div>
            <!-- 验证码 -->
            <div class="content">
                <label>验证码:</label>
                <input type="text" placeholder="请输入验证码" v-model="registerParams.code" />
                <button @click="getRegisterCode" class="validate">验证码</button>
            </div>
            <!-- 登录密码 -->
            <div class="content">
                <label>登录密码:</label>
                <input type="password" placeholder="请输入你的登录密码" v-model="registerParams.password" />
            </div>
            <!-- 确认密码 -->
            <div class="content">
                <label>确认密码:</label>
                <input type="password" placeholder="请输入确认密码" v-model="registerParams.repassword" />
            </div>
            <!-- 协议 -->
            <div class="controls">
                <input name="m1" type="checkbox" v-model="registerParams.agree" />
                <span>同意协议并注册《尚品汇用户协议》</span>
            </div>
            <div class="btn">
                <button @click="register">完成注册</button>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
  
<script setup lang="ts">
//引入组合式API
import { reactive, ref } from 'vue'
//引入提示信息组件
import { ElMessage } from 'element-plus'
//引入请求函数
// import { reqPassport, reqRegister } from '../../api/login/index'
import router from '../../router';

//注册用户携带参数
let registerParams = reactive({
    phone: '',
    password: '',
    repassword: '',
    code: '',
    agree: false
})
//获取验证码
const getRegisterCode = async () => {
    if (!registerParams.phone) return
    // let result = await reqPassport(registerParams.phone)
    // registerParams.code = result.data
}

//注册用户
const register = async () => {
    let { phone, password, repassword, code, agree } = registerParams
    if (!phone) {
        ElMessage.warning('请输入用户名')
        return
    }
    if (password !== repassword) {
        ElMessage.warning('两次密码不一致')
        return
    }
    if (!password) {
        ElMessage.warning('请输入密码')
        return
    }
    if (!code) {
        ElMessage.warning('验证码不能为空')
        return
    }
    if (!agree) {
        ElMessage.warning('请您认真阅读协议并勾选！')
        return
    }
    // let result = await reqRegister({ phone, password, code })
    // if (result.code !== 200) {
    //     ElMessage({
    //         type: 'warning',
    //         message: result.message
    //     })
    // }
    router.push('/login')
    ElMessage.success('注册成功！')
    // router.push('/enter')


}
</script>
  
<style scoped>
.register-container .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;
    margin-top: 20px;
}

.register h3 {
    background: #ececec;
    margin: 0;
    padding: 6px 15px;
    color: #333;
    border-bottom: 1px solid #dfdfdf;
    font-size: 20.04px;
    line-height: 30.06px;
}

.register h3 span {
    font-size: 14px;
    float: right;
}

.register h3 span a {
    color: #f93684;
}

.register div:nth-of-type(1) {
    margin-top: 40px;
}

.register .content {
    padding-left: 480px;
    margin-bottom: 18px;
    position: relative;
}

.validate {
    margin-left: 20px;
}

.content input {
    display: inline-block;
    height: 28px;
    border: 1px solid #000;
    margin-left: 10px;
    padding-left: 4px;
}

.register .controls {
    text-align: center;
    position: relative;
    padding-left: 30px;
}

.register .controls input {
    vertical-align: middle;
}

.register .controls .error-msg {
    position: absolute;
    top: 100%;
    left: 495px;
    color: red;
}

.register .btn {
    text-align: center;
    line-height: 36px;
    margin: 17px 0 0 55px;
}

.register .btn button {
    outline: none;
    width: 270px;
    height: 36px;
    background: #f93684;
    color: #fff !important;
    display: inline-block;
    font-size: 16px;
    margin-right: 28px;
}

.copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;
}

.copyright ul li {
    display: inline-block;
    border-right: 1px solid #e4e4e4;
    padding: 0 20px;
    margin: 15px 0;
}
</style>ƒ