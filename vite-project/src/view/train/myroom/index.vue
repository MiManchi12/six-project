<template>
    <div class="right">
        <div class="r-top">
            <div class="left-nav">
                <div class="item" @click="act=0 " :class="{active:act==0}">全部</div>
                <div class="item" @click="act=1 " :class="{active:act==1}">我创建的</div>
                <div class="item" @click="act=2 " :class="{active:act==2}">我加入的</div>
                <div class="item" @click="act=3 " :class="{active:act==3}">我的课程</div>
            </div>
            <div class="right-nav">
                <div class="btn">创建</div>
            </div>
        </div>
        <!-- 全部 -->
        <div class="r-bottom" v-show="act==0">
            <div class="noMore">
                <div class="mainItem" v-for="(item,index) in myTrainingList" :key="item.id">
                    <div class="I-warp">
                        <div class="mainItem-img">
                            <img :src="item.cover" alt="">
                        </div>
                        <div class="mainItem-title">
                            <p>{{item.planName}}</p>
                            <p>已练习{{item.weekTrainedCount}}次{{Math.ceil(item.weekTrainedDuration / 1000 / 60 )}}分钟</p>
                        </div>
                    </div>
                    <!-- 图标状态 -->
                    <div class="mainItem-state">
                        <div v-if="item.weekTrainedCount > 0" class="empty">
                            <svg t="1666282217712" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="1059" width="22" height="22">
                                <path
                                    d="M503.306008 943.44652c-16.165136 0-31.740848-6.740504-42.680993-18.538178-10.886933-11.686133-16.208114-27.079698-15.027221-43.3707l19.127601-269.765487H210.028061c-22.189327 0-41.97696-12.415749-51.683-32.415206-9.775625-20.113043-7.24704-43.48224 6.516401-61.024743L491.691506 101.69085c21.784099-27.779638 66.585378-27.978159 89.057137-1.769293 10.924795 12.752416 15.533757 29.184634 12.946844 46.234929l-35.812575 234.458424h256.115633c21.459711 0 41.009937 11.881585 50.981013 30.952904 9.972099 19.1583 8.509797 42.078267-3.850694 59.801895L550.073054 918.671304c-10.923772 15.786513-27.975089 24.775217-46.767046 24.775216z m-0.310061-57.525043l0.310061 28.706752V885.864172c-0.112563 0-0.196474 0-0.310061 0.057305z m33.819179-748.474333L210.098669 553.908398l316.382108 0.280386-23.539065 331.450261 311.029204-447.162425-323.122613-0.251733 45.966823-300.777743z"
                                    p-id="1060" fill="#f93684"></path>
                            </svg>
                            <span class="state">进行中</span>
                        </div>
                        <div v-else class="empty">
                            <svg t="1666282387148" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="1401" width="22" height="22">
                                <path
                                    d="M512 53.333333C258.688 53.333333 53.333333 258.688 53.333333 512S258.688 970.666667 512 970.666667 970.666667 765.312 970.666667 512 765.312 53.333333 512 53.333333z m0 64c217.962667 0 394.666667 176.704 394.666667 394.666667S729.962667 906.666667 512 906.666667 117.333333 729.962667 117.333333 512 294.037333 117.333333 512 117.333333z"
                                    fill="#f93684" p-id="1402"></path>
                                <path
                                    d="M661.333333 554.666667a32 32 0 0 1 3.072 63.850666L661.333333 618.666667h-192a32 32 0 0 1-3.072-63.850667L469.333333 554.666667h192z"
                                    fill="#f93684" p-id="1403"></path>
                                <path
                                    d="M458.666667 288a32 32 0 0 1 31.850666 28.928L490.666667 320v256a32 32 0 0 1-63.850667 3.072L426.666667 576V320a32 32 0 0 1 32-32z"
                                    fill="#f93684" p-id="1404"></path>
                            </svg>
                            <span class="state">未开始</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="myTrainingList.length < 1">
                <el-empty image="https://rs.dance365.com/img/no_content@3x.0fd78ad2.png" description="暂无数据"
                    :image-size="225" />
            </div>
        </div>
        <!-- 我创建的 -->
        <div class="r-bottom" v-show="act==1">
            <div class="noMore">
                <div class="mainItem" v-for="(item,index) in createList" :key="item.id">
                    <div class="I-warp">
                        <div class="mainItem-img">
                            <img :src="item.cover" alt="">
                        </div>
                        <div class="mainItem-title">
                            <p>{{item.planName}}</p>
                            <p>已练习{{item.weekTrainedCount}}次{{Math.ceil(item.weekTrainedDuration / 1000 / 60 )}}分钟</p>
                        </div>
                    </div>
                    <!-- 图标状态 -->
                    <div class="mainItem-state">
                        <div v-if="item.weekTrainedCount > 0" class="empty">
                            <svg t="1666282217712" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="1059" width="22" height="22">
                                <path
                                    d="M503.306008 943.44652c-16.165136 0-31.740848-6.740504-42.680993-18.538178-10.886933-11.686133-16.208114-27.079698-15.027221-43.3707l19.127601-269.765487H210.028061c-22.189327 0-41.97696-12.415749-51.683-32.415206-9.775625-20.113043-7.24704-43.48224 6.516401-61.024743L491.691506 101.69085c21.784099-27.779638 66.585378-27.978159 89.057137-1.769293 10.924795 12.752416 15.533757 29.184634 12.946844 46.234929l-35.812575 234.458424h256.115633c21.459711 0 41.009937 11.881585 50.981013 30.952904 9.972099 19.1583 8.509797 42.078267-3.850694 59.801895L550.073054 918.671304c-10.923772 15.786513-27.975089 24.775217-46.767046 24.775216z m-0.310061-57.525043l0.310061 28.706752V885.864172c-0.112563 0-0.196474 0-0.310061 0.057305z m33.819179-748.474333L210.098669 553.908398l316.382108 0.280386-23.539065 331.450261 311.029204-447.162425-323.122613-0.251733 45.966823-300.777743z"
                                    p-id="1060" fill="#f93684"></path>
                            </svg>
                            <span class="state">进行中</span>
                        </div>
                        <div v-else class="empty">
                            <svg t="1666282387148" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="1401" width="22" height="22">
                                <path
                                    d="M512 53.333333C258.688 53.333333 53.333333 258.688 53.333333 512S258.688 970.666667 512 970.666667 970.666667 765.312 970.666667 512 765.312 53.333333 512 53.333333z m0 64c217.962667 0 394.666667 176.704 394.666667 394.666667S729.962667 906.666667 512 906.666667 117.333333 729.962667 117.333333 512 294.037333 117.333333 512 117.333333z"
                                    fill="#f93684" p-id="1402"></path>
                                <path
                                    d="M661.333333 554.666667a32 32 0 0 1 3.072 63.850666L661.333333 618.666667h-192a32 32 0 0 1-3.072-63.850667L469.333333 554.666667h192z"
                                    fill="#f93684" p-id="1403"></path>
                                <path
                                    d="M458.666667 288a32 32 0 0 1 31.850666 28.928L490.666667 320v256a32 32 0 0 1-63.850667 3.072L426.666667 576V320a32 32 0 0 1 32-32z"
                                    fill="#f93684" p-id="1404"></path>
                            </svg>
                            <span class="state">未开始</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="myTrainingList.length < 1">
                <el-empty image="https://rs.dance365.com/img/no_content@3x.0fd78ad2.png" description="暂无数据"
                    :image-size="225" />
            </div>
        </div>
        <!-- 我加入的 -->
        <div class="r-bottom" v-show="act==2">
            <div class="noMore">
                <div class="mainItem" v-for="(item,index) in joinList" :key="item.id">
                    <div class="I-warp">
                        <div class="mainItem-img">
                            <img :src="item.cover" alt="">
                        </div>
                        <div class="mainItem-title">
                            <p>{{item.planName}}</p>
                            <p>已练习{{item.weekTrainedCount}}次{{Math.ceil(item.weekTrainedDuration / 1000 / 60 )}}分钟</p>
                        </div>
                    </div>
                    <!-- 图标状态 -->
                    <div class="mainItem-state">
                        <div v-if="item.weekTrainedCount > 0" class="empty">
                            <svg t="1666282217712" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="1059" width="22" height="22">
                                <path
                                    d="M503.306008 943.44652c-16.165136 0-31.740848-6.740504-42.680993-18.538178-10.886933-11.686133-16.208114-27.079698-15.027221-43.3707l19.127601-269.765487H210.028061c-22.189327 0-41.97696-12.415749-51.683-32.415206-9.775625-20.113043-7.24704-43.48224 6.516401-61.024743L491.691506 101.69085c21.784099-27.779638 66.585378-27.978159 89.057137-1.769293 10.924795 12.752416 15.533757 29.184634 12.946844 46.234929l-35.812575 234.458424h256.115633c21.459711 0 41.009937 11.881585 50.981013 30.952904 9.972099 19.1583 8.509797 42.078267-3.850694 59.801895L550.073054 918.671304c-10.923772 15.786513-27.975089 24.775217-46.767046 24.775216z m-0.310061-57.525043l0.310061 28.706752V885.864172c-0.112563 0-0.196474 0-0.310061 0.057305z m33.819179-748.474333L210.098669 553.908398l316.382108 0.280386-23.539065 331.450261 311.029204-447.162425-323.122613-0.251733 45.966823-300.777743z"
                                    p-id="1060" fill="#f93684"></path>
                            </svg>
                            <span class="state">进行中</span>
                        </div>
                        <div v-else class="empty">
                            <svg t="1666282387148" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="1401" width="22" height="22">
                                <path
                                    d="M512 53.333333C258.688 53.333333 53.333333 258.688 53.333333 512S258.688 970.666667 512 970.666667 970.666667 765.312 970.666667 512 765.312 53.333333 512 53.333333z m0 64c217.962667 0 394.666667 176.704 394.666667 394.666667S729.962667 906.666667 512 906.666667 117.333333 729.962667 117.333333 512 294.037333 117.333333 512 117.333333z"
                                    fill="#f93684" p-id="1402"></path>
                                <path
                                    d="M661.333333 554.666667a32 32 0 0 1 3.072 63.850666L661.333333 618.666667h-192a32 32 0 0 1-3.072-63.850667L469.333333 554.666667h192z"
                                    fill="#f93684" p-id="1403"></path>
                                <path
                                    d="M458.666667 288a32 32 0 0 1 31.850666 28.928L490.666667 320v256a32 32 0 0 1-63.850667 3.072L426.666667 576V320a32 32 0 0 1 32-32z"
                                    fill="#f93684" p-id="1404"></path>
                            </svg>
                            <span class="state">未开始</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="myTrainingList.length < 1">
                <el-empty image="https://rs.dance365.com/img/no_content@3x.0fd78ad2.png" description="暂无数据"
                    :image-size="225" />
            </div>
        </div>
        <!-- 我的课程 -->
        <div class="r-bottom" v-show="act==3">
            <el-empty image="https://rs.dance365.com/img/no_content@3x.0fd78ad2.png" description="暂无数据"
                :image-size="225" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// 全部按钮的请求函数
import { reqMyTraining, reqCreate, reqJoin } from '../../../api/train/history/history'
// 保存全部请求数据
const myTrainingList = ref([])
// 存储创建的请求数据
const createList = ref([])
// 存储加入请求数据
const joinList = ref([])
// 点击高亮
let act = ref(0)
// 组件挂载请求
onMounted(() => {
    // 全部
    getMyTraining()
    // 创建
    getCreate()
    // 加入
    getJoin()
})
// 定义全部
const getMyTraining = async () => {
    let result = await reqMyTraining()
    // console.log(result);
    // 存储数据
    myTrainingList.value = result.content
}
// 定义创建
const getCreate = async () => {
    let result = await reqCreate()
    console.log(result);
    createList.value = result.content
}
// 定义加入
const getJoin = async () => {
    let result1 = await reqJoin()
    // console.log(result1);
    joinList.value = result1.content
}

</script>

<style scoped lang="less">
.right {
    width: 1020px;
    min-height: 800px;
    float: right;

    .r-top {
        width: 960px;
        background-color: #fff;
        padding: 26px 30px;
        margin-bottom: 10px;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        border-radius: 4px;

        .left-nav {
            width: 388px;
            height: 44.09px;

            .item {
                float: left;
                // color: #7d8090;
                padding: 9px 12px;
                margin-right: 24px;
                margin-bottom: 10px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;

            }

            .active {
                background-color: #f93684;
                color: #fff;
            }
        }

        .right-nav {
            width: 84px;
            height: 32px;
            line-height: 32px;
            color: #fff;
            font-size: 14px;
            text-align: center;
            background: #f93684;
            border-radius: 16px;
            cursor: pointer
        }
    }

    .r-bottom {
        width: 1020px;
        // height: 730px;
        min-height: 700px;
        background-color: #fff;
        // display: flex;
        // flex-direction: column;
        // justify-content: center;
        // align-items: center;
        overflow: hidden;
        margin-bottom: 30px;

        .noMore {
            width: 963px;
            // height: 60px;
            padding: 0 35px 0 22px;
            margin-top: 10px;

            .mainItem {
                width: 100%;
                height: 130px;
                border-bottom: 1px solid #eee;
                display: flex;
                justify-content: space-between;

                .I-warp {

                    // width: 100%;
                    .mainItem-img {
                        width: 172px;
                        height: 102px;
                        border-radius: 5px;
                        margin: 14px -10px 0 10px;
                        float: left;

                        img {
                            width: 100%;
                            height: 100%;
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

                    }
                }

                // 图标状态
                .mainItem-state {

                    .empty {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;

                        .icon {
                            text-align: center;
                            margin-left: 15px;
                        }

                        .state {
                            margin-top: 10px;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
}
</style>