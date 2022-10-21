<template>
    <div class="login-container">
        <!-- 登录 -->
        <div class="login-wrap">
            <div class="login">
                <div class="loginform">
                    <div class="content">
                        <form action="##">
                            <!-- 账号 -->
                            <div class="input-text clearFix">
                                <el-input v-model="loginForm.username" placeholder="邮箱/用户名/手机号" />
                            </div>
                            <!-- 密码 -->
                            <div class="input-text clearFix">
                                <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"
                                    show-password />
                            </div>
                            <div class="setting clearFix">
                                <label class="checkbox inline">
                                    <input name="m1" type="checkbox" value="2" checked="" />
                                    自动登录
                                </label>
                                <span class="forget">忘记密码？</span>
                            </div>
                            <!--阻止默认事件  .prevent-->
                            <button class="btn" @click.prevent="login">
                                登&nbsp;&nbsp;录
                            </button>
                            <button class="btn">
                                <router-link to="/register">立即注册</router-link>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
//引入仓库
import { useUserInfoStore } from '../../store/userInfo';
//引入组合式API
import { ref } from 'vue';
//引入路由
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
//使用仓库
const userInfoStore = useUserInfoStore();
const route = useRoute()
const router = useRouter()
const loginForm = ref({
    username: 'admin',
    password: '111111'
})
// 点击登录的回调
const login = async () => {
    const { username, password } = loginForm.value
    //通知仓库发请求
    await userInfoStore.login(username, password)
    ElMessage.success("登录成功")
    router.push({ path: '/home' })
}
</script>
  
<style lang="less" scoped>
.login-container {

    .login-wrap {
        .login {
            width: 100%;
            height: 487px;
            margin: 0 auto;
            background: url(./images/1.webp);
        }

        .loginform {
            width: 420px;
            height: 406px;
            box-sizing: border-box;
            background: #fff;
            float: right;
            top: 45px;
            position: relative;
            padding: 20px;
            margin-right: 150px;

            .content {
                width: 380px;
                height: 316px;
                box-sizing: border-box;
                border: 1px solid #ddd;
                padding: 18px;

                form {
                    margin: 15px 0 18px 0;
                    font-size: 12px;
                    line-height: 18px;

                    .input-text {
                        margin-bottom: 16px;
                    }

                    .setting {
                        label {
                            float: left;
                        }

                        .forget {
                            float: right;
                        }
                    }

                    .btn {
                        background-color: #e1251b;
                        padding: 6px;
                        border-radius: 0;
                        font-size: 16px;
                        font-family: 微软雅黑;
                        word-spacing: 4px;
                        border: 1px solid #e1251b;
                        color: #fff;
                        width: 100%;
                        height: 36px;
                        margin-top: 25px;
                        outline: none;
                    }
                }
            }
        }
    }
}
</style>