<template>
    <Header></Header>
    <div class="training">
        <div class="warp">
            <div class="left">
                <el-menu default-active="2" class="el-menu-vertical-demo">
                    <el-sub-menu>
                        <template #title>
                            练习室
                        </template>
                        <div class="i-border">
                            <router-link to="/train/myroom" class="item">
                                <div class="i-room">
                                    我的练习室
                                </div>
                            </router-link>
                        </div>
                    </el-sub-menu>
                </el-menu>
                <el-menu style="margin-top: 10px;">
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

                </el-menu>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
  
<script lang="ts" setup>
import { ElMessageBox } from 'element-plus'
import Footer from '../../components/Footer/index.vue';
import Header from '../../components/Header/Header.vue';
const open = () => {
    ElMessageBox.alert('请打开中舞网APP，点击"练习室"-"音频库"中查看。', {
        confirmButtonText: '确定',
    })
}

</script>

<style lang="less">
.training {
    width: 100%;

    // min-height: 600px;
    .warp {
        width: 1200px;
        min-height: 1000px;
        margin: auto;
        // background-color: aquamarine;
        margin-top: 20px;

        .left {
            width: 170px;
            height: 290.47px;
            float: left;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            margin-right: 10px;

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

                &:hover {
                    padding-left: 3px;
                    border-left: 3px solid #f93684;
                }
            }
        }
    }
}
</style>