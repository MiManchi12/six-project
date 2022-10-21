<template>
    <!-- 头部 -->
    <Header></Header>
    <!-- 内容 -->
    <div class="training">
        <div class="warp">
            <div class="left">
                <!-- 上边栏 -->
                <div class="l-nav">
                    <div class="l-learn i-border" @click="btnShow">
                        <span class="l-room">练习室</span>
                        <span class="icon">
                            <ArrowDown v-if="flag"></ArrowDown>
                            <ArrowRight v-else></ArrowRight>
                        </span>
                    </div>
                    <div class="i-border i-border1" v-if="flag">
                        <div class="item" @click="toRoom">
                            <span class="i-my">我的练习室</span>
                        </div>
                    </div>
                </div>
                <!-- 下边栏 -->
                <div class="sidebar">
                    <div class="i-border">
                        <router-link to="/train/cache" class="item">
                            <span index="1" class="i-room">
                                缓存
                            </span>
                        </router-link>
                    </div>
                    <div class="i-border">
                        <span index="2" class="i-room" @click="open">
                            音频库
                        </span>
                    </div>
                    <div class="i-border">
                        <router-link to="/train/collect" class="item">
                            <span index="3" class="i-room">
                                收藏
                            </span>
                        </router-link>
                    </div>
                    <div class="i-border">
                        <router-link to="/train/history" class="item">
                            <span index="4" class="i-room">
                                历史
                            </span>
                        </router-link>
                    </div>

                </div>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
    <!-- 尾部 -->
    <Footer></Footer>
</template>
  
<script lang="ts" setup>
import router from '../../router/index'
// element-plus---ElMessageBox组件引入
import { ElMessageBox } from 'element-plus'
import Footer from '../../components/Footer/index.vue';
import Header from '../../components/Header/Header.vue';
import { ref } from 'vue'
// 图标组件引入
import { ArrowRight, ArrowDown } from '@element-plus/icons-vue'
// import { storeToRefs } from 'pinia';
let flag = ref(false)
// 练习室箭头的变换
const btnShow = () => {
    flag.value = !flag.value
}
// 我的练习室路由跳转
const toRoom = () => {
    router.push('/train/myroom')
}
// 音频库弹框事件
const open = () => {
    ElMessageBox.alert('请打开中舞网APP，点击"练习室"-"音频库"中查看。', {
        confirmButtonText: '确定',
    })
}

</script>


<style lang="less">
.training {
    width: 100%;
    // overflow: hidden;

    // 内容区
    .warp {
        width: 1200px;
        min-height: 500px;
        margin: auto;
        margin-top: 20px;
        overflow: hidden;

        // 左侧模块
        .left {
            width: 170px;
            float: left;
            margin-right: 10px;

            .l-nav {
                width: 170px;

                .l-learn {
                    width: 164px;
                    height: 50px;
                    line-height: 60px;
                    font-size: 14px;
                    background-color: #fff;
                    .l-room{
                        margin-left: 20px;
                    }

                    .icon {
                        width: 20px;
                        height: 20px;
                        float: right;
                        margin-right: 5px;
                        line-height: 60px;
                        cursor: pointer;
                    }

                }

                .i-my {
                    margin-left: 40px;
                }

            }

            .item {
                text-decoration: none;
            }

            .i-room {
                width: 100px;
                line-height: 50px;
                font-size: 14px;
                display: block;
                color: #111;
                margin-left: 10px;
                padding-left: 6px;
            }

            .i-border {
                width: 164px;
                height: 50px;
                padding-left: 6px;
                line-height: 60px;
                font-size: 14px;
                background-color: #fff;

                &:hover {
                    padding-left: 3px;
                    border-left: 3px solid #f93684;
                }
            }
            .i-border1:hover{
                color: #f93684;
            }

            .sidebar {
                margin-top: 10px;
                width: 170px;
                background-color: #fff;
            }
        }

        .left::after {
            content: '';
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
        }

        .left {
            *zoom: 1;
        }
    }
}
</style>

