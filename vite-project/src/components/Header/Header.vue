<template>
    <!-- 头部导航 -->
    <div class="headerContainer">
        <div class="headerMain">
            <!-- logo -->
            <a href="/home">
                <div class="logo">
                    <img src="../../assets/images/logo.png" alt="">
                </div>
            </a>
            <!-- 导航列表 -->
            <nav class="headerNav">
                <router-link to="" class="headerNavItem" :active-class="Route.path.includes('/home')===true?'active':''"
                    @click="toHome"><span>资源</span></router-link>
                <router-link to="" class="headerNavItem"
                    :active-class="Route.path.includes('/class')===true?'active':''" @click="toClass"><span>课程</span>
                </router-link>
                <router-link to="" class="headerNavItem"
                    :active-class="Route.path.includes('/train')===true?'active':''" @click="toTrain"><span>练习室</span>
                </router-link>
                <router-link to="" class="headerNavItem"
                    :active-class="Route.path.includes('/exchange')===true?'active':''" @click="toExchange">
                    <span>交流</span>
                </router-link>
                <router-link to="" class="headerNavItem"
                    :active-class="Route.path.includes('/center')===true?'active':''" @click="toMyself"><span>我的</span>
                </router-link>
            </nav>
            <!-- 右侧导航 -->
            <div class="headerRight">
                <a href="" class="download"><img src="../../assets/images/download.png" alt="">下载APP</a>
                <!-- 发布按钮下拉框 -->
                <div class="flex flex-wrap items-center">
                    <el-dropdown>
                        <el-button type="default" color="#F93684" round>
                            +发布
                        </el-button>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <span>发布资源</span>
                                <el-dropdown-item>作品</el-dropdown-item>
                                <el-dropdown-item>教程</el-dropdown-item>
                                <el-dropdown-item>动态</el-dropdown-item>
                            </el-dropdown-menu>
                            <el-dropdown-menu>
                                <span>发布商品</span>
                                <el-dropdown-item>视频课</el-dropdown-item>
                                <el-dropdown-item>线下课</el-dropdown-item>
                                <el-dropdown-item>直播课</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <!-- 登陆按钮 -->
                <el-dropdown class="loginBtn" v-if="userInfoStore.token">
                    <div class="userInfo_icon">

                    </div>
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>

                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <button class="login" @click="toLogin" v-else>登录</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
//引入仓库
import { useUserInfoStore } from '../../store/userInfo';
//引入发请求函数
import { reqLogout } from "../../api/index";
import { ElMessage, ElMessageBox } from "element-plus";
// 引入token存储的方法
import { getToken } from "../../utils/token-utils";
//使用仓库
const userInfoStore = useUserInfoStore();
// console.log(userInfoStore.token)
const Route = useRoute()

const router = useRouter()
// 跳转登陆
const toLogin = () => {
    router.push('/login')
}
//退出登录
const loginOut = () => {

    ElMessageBox.confirm(
        "确认退出登录吗？",
        {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
        }
    )
        .then(async () => {
            await userInfoStore.logout();
            ElMessage({
                type: "success",
                message: "退出成功",
            });
        })
        .catch(() => {
            ElMessage({
                type: "info",
                message: "退出失败",
            });
        });
    // 通知仓库发请求获取数据

    // const result = await reqLogout();
};

const toHome = () => {
    router.push('/home')
}
const toClass = () => {
    router.push('/class')
}

const toTrain = () => {
    if (getToken() != null) {
        router.push('/train')
    } else {
        ElMessageBox.confirm(
            '请登录后访问，是否前往登录页？',
            '用户未登录',
            {
                confirmButtonText: '前往',
                cancelButtonText: '取消',
                type: 'warning',
                draggable: true,
            }
        )
            .then(() => {
                router.push('/login')
            })
            .catch(() => {

            })
    }
}
const toExchange = () => {
    if (getToken() != null) {
        router.push('/exchange')
    } else {
        ElMessageBox.confirm(
            '请登录后访问，是否前往登录页？',
            '用户未登录',
            {
                confirmButtonText: '前往',
                cancelButtonText: '取消',
                type: 'warning',
                draggable: true,
            }
        )
            .then(() => {
                router.push('/login')
            })
            .catch(() => {

            })
    }
}
const toMyself = () => {
    if (getToken() != null) {
        router.push('/myself')
    } else {
        ElMessageBox.confirm(
            '请登录后访问，是否前往登录页？',
            '用户未登录',
            {
                confirmButtonText: '前往',
                cancelButtonText: '取消',
                type: 'warning',
                draggable: true,
            }
        )
            .then(() => {
                router.push('/login')
            })
            .catch(() => {

            })
    }
}

</script>

<style lang="less" scoped>
.headerContainer {
    width: 100%;
    height: 60px;
    background: #fff;
    position: relative;
    -webkit-box-shadow: 4px 0 9px #c1c1c1;
    box-shadow: 4px 0 9px #c1c1c1;
}

.headerMain {
    position: relative;
    display: flex;
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    // justify-content:space-between;
}

.logo {
    box-sizing: border-box;
    padding-top: 4px;
    height: 60px;
    margin-right: 30px;
    justify-content: center;
    -webkit-box-align: center;
    display: -webkit-box;
    -webkit-box-pack: center;
    align-items: center;
}

.logo img {
    width: 128px;
    height: 30px;
}

.headerNav {
    display: inline-flex;
    margin: 10px 0;
}

.headerNavItem {
    padding: 12px 10px;
    font-size: 18px;
    text-decoration: none;

    &.active {
        color: #f93684;
    }
}

.headerNavItem+.headerNavItem {
    margin-left: 40px;
}

.headerRight {
    position: absolute;
    right: 0;
    display: flex;

    .download {
        text-decoration: none;
        cursor: pointer;
        font-size: 16px;
        margin: 21px 30px 22px 0;
        color: #101010;
        display: inline-block;

        img {
            display: inline-block;
            width: 16px;
            height: 16px;
            vertical-align: middle;
        }
    }

    .flex-wrap {
        margin-right: 28px;
        margin-top: 15px;
    }

    .userInfo_icon {
        display: inline-block;
        width: 30px;
        height: 30px;
        background-image: url('@/assets/images/glasses.jpg');
        cursor: pointer;
        // background: #ccc;
        border-radius: 50%;
        margin-top: 14px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
    }

    .login {
        float: right;
        padding: 10px;
        cursor: pointer;
        font-size: 16px;
        margin: 11px 0;
        color: #111;
    }
}

:deep(.el-dropdown .el-button) {
    width: 75px;
    height: 30px;
    font-size: 16px;
}

:deep(.el-dropdown-item) {
    text-align: center;
    padding: 0 0;
    width: 140px;
    color: #111;
    font-size: 16px;
}
</style>