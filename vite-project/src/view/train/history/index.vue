<template>
    <!-- 历史记录 -->
    <div class="right">
        <div class="left-h-nav">
            <span class="nav">历史记录</span>
        </div>
        <div class="r-content">
            <!-- 搜索框 和 批量删除 -->
            <div class="r-warp">
                <div class="demo-input-size">
                    <el-input v-model="input2" class="w-50 m-2" size="large" placeholder="Please Input"
                        :prefix-icon="Search" />
                </div>
                <el-button size="large" @click="" color="#e6e6eb" style="margin-left: 10px;">搜索</el-button>
                <button class="cont" @click="del=0" v-show="del==0">批量删除</button>
                <div class="cancel" v-show="del==1">
                    <span @click="del=1">取消</span>
                    <span>全选</span>
                    <span>删除</span>
                </div>
            </div>
            <!-- 中心内容区 -->
            <div class="noMore">
                <div class="mainItem" v-for="(item,index) in historyList" :key="item.id">
                    <div class="mainItem-img">
                        <img :src="item.momentBackup.cover" alt="" class="pic-D">
                        <img src="./1.png" alt="" class="video-pic">
                    </div>
                    <div class="mainItem-title">
                        <p>{{item.momentTitle}}</p>
                        <a href="" class="mainItem-a">作品</a>
                        <div class="main-pic">
                            <img :src="item.momentBackup.creatorBackup.avatar" alt="">
                            <a class="mainItem-title-C" href="">{{item.momentBackup.creatorBackup.name}}</a>
                        </div>
                    </div>
                    <div class="mainItem-R">
                        <span>{{time[index]}}</span>
                        <!-- <a @click="delHandler(item.id)"> -->
                        <el-button text @click="delHandler(item.id)" class="del">删除</el-button>
                        <!-- </a> -->
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'
// moment组件引用
import moment from 'moment'
// 英文转中文引用
import language from '../../../utils/moment-zhcn'
// 引入reqHistory请求函数
import { reqHistory, reqDelHistory } from '../../../api/train/history/history'
// element-plus组件
import { ElMessage, ElMessageBox } from 'element-plus'
// 保存请求函数
const historyList = ref([])
// 时间
let time = ref([])
// 删除
let del = ref(0)
// 组件挂载请求
onMounted(() => {
    getHistory()
})
const getHistory = async () => {
    let result = await reqHistory()
    console.log(result);
    // 保存服务器数据
    historyList.value = result.content
    let arr = result.content.map(item => {
        let timer
        // 今日日期
        let timeDay = moment().format('YYYY-MM-DD')
        // 更新日期
        let update = moment(item.updateTime).format('YYYY-MM-DD')
        // console.log(update);

        // 如果是同一天返回true
        if (moment(update).isSame(timeDay)) {
            moment.locale('zh-cn', language)
            // 格式化更新日期
            let update1 = moment(item.updateTime).format('YYYY-MM-DD HH:mm:ss')
            // 一天以内显示多少小时前
            timer = moment(update1).fromNow()
        } else {
            let update1 = moment(item.updateTime).format('YYYY-MM-DD HH:mm:ss')
            // 自定义格式
            timer = moment(update1).calendar(timeDay, {
                lastDay: '[昨天]HH:mm',
                lastWeek: 'MM-DD'
            });
        }
        return timer

    })
    // console.log();
    time.value = arr
    // console.log(time.value);

}


// 删除的回调
const delHandler = async (id) => {
    let ids = id;
    let result = await reqDelHistory({ name: 'batchDeleteSomeViewRecords', params: { ids: [ids] } })
    console.log(result);
    getHistory()
    console.log(historyList.value);

}


// 搜索框
const input2 = ref('')
</script>

<style scoped lang="less">
.right {
    width: 1020px;
    min-height: 500px;
    // height: 836.19px;
    float: right;
    overflow: hidden;

    .left-h-nav {
        width: 1020px;
        height: 72.09px;
        background-color: #fff;
        border-radius: 4px;

        .nav {
            float: left;
            padding: 28px 30px;
            color: #111;
            font-size: 14px;
            display: block;

            &:hover {
                border-bottom: 3px solid #f93684;
            }
        }
    }

    // 内容区
    .r-content {
        width: 1020px;
        // height: 730px;
        min-height: 600px;
        overflow: hidden;
        background-color: #fff;
        border-radius: 4px;
        margin-top: 10px;
        margin-bottom: 30px;

        // 搜索框
        .r-warp {
            width: 949px;
            height: 40px;
            padding: 14px 40px 10px 31px;
            overflow: hidden;

            .demo-input-size {
                width: 270px;
                height: 40px;
                float: left;
            }

            .btn {
                float: left;
            }

            .cont {
                float: right;
            }
        }

        // 中心内容区
        .noMore {
            width: 963px;
            // height: 60px;
            padding: 0 35px 0 22px;

            .mainItem {
                width: 100%;
                height: 130px;
                border-bottom: 1px solid #eee;

                &:hover {
                    background: #eee;
                }

                a {
                    font-size: 14px;
                }

                .mainItem-img {
                    width: 172px;
                    height: 102px;
                    border-radius: 5px;
                    margin: 14px 10px 0 10px;
                    float: left;
                    position: relative;

                    .pic-D {
                        width: 100%;
                        height: 100%;

                    }

                    .video-pic {
                        width: 30px;
                        height: 30px;
                        position: absolute;
                        left: 0;
                        bottom: 4px;
                        z-index: 9999;
                    }
                }

                .mainItem-title {
                    height: 100%;
                    width: 400px;
                    word-wrap: break-word;
                    font-size: 16px;
                    color: #111;
                    float: left;
                    padding: 0px 20px;
                    display: flex;
                    flex-direction: column;
                    align-content: flex-start;
                    justify-content: space-evenly;

                    p {
                        // line-height: 30px;
                        cursor: pointer;
                        margin: 0;
                    }

                    .mainItem-a {
                        // margin-top: 10px;
                        cursor: pointer;
                    }

                    .main-pic {
                        cursor: pointer;
                        // margin-bottom: 10px;

                        img {
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            line-height: 40px;
                        }

                        .mainItem-title-C {
                            line-height: 30px;
                            vertical-align: top;
                            margin-left: 15px;
                            font-size: 16px;
                            color: #111;
                        }
                    }
                }

                .mainItem-R {
                    width: 264px;
                    height: 102px;
                    /* background: #f93684; */
                    float: right;
                    /* margin-top: 1px; */
                    display: flex;

                    span {
                        flex: 1;
                        line-height: 122px;
                        text-align: center;
                        font-size: 16px;
                        color: #111;
                    }

                    .del {
                        width: 110px;
                        height: 120px;
                        line-height: 122px;
                        text-align: center;
                        font-size: 14px;
                        &:hover{
                            color: #f93684;
                            background-color: #eee;
                        }
                    }

                }
            }
        }

        // 分页器
        // .pagination {
        //     min-width: 200px;
        //     background-color: #f93684;
        // }
    }

}
</style>