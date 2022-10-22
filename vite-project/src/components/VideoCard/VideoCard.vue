<template>
    <div class="videoWrap">
        <div class="videoContainer">
            <div class="VideoList">
                <div class="videoItemWrap">
                    <div class="videoItemContent" v-for="(item,index) in props.content" :key="item.id">
                        <div class="videoItem" @click="toPlay(item,index)">
                            <div class="coverWrap">
                                <div class="cover">
                                    <img src="../../assets/images/home_img_ycpc.png" alt="" class="coverClass"
                                        v-show="item.momentClassificationBackup.originalStatement===1">
                                    <img :src="item.cover" alt="" class="contentCover">
                                    <img src="../../assets/images/play.png" alt="" class="playIcon">
                                </div>
                            </div>
                            <div class="detail">
                                <div class="card-detail">
                                    <div class="title">
                                        <div class="example">
                                            <span>
                                                <img :src="item.momentClassificationBackup.classification==='original'?
                                                'https://rs.dance365.com/title_original.svg':''||
                                                item.momentClassificationBackup.classification==='course'?
                                                'https://rs.dance365.com/title_course.svg':''||
                                                item.momentClassificationBackup.classification==='information'?
                                                'https://rs.dance365.com/title_information1.svg':'' 
                                                " alt="">
                                            </span>
                                            <a href="">{{item.title}}</a>
                                        </div>
                                    </div>
                                    <div class="viewCount">
                                        <span class="num">
                                            {{item.statisticsBackup.viewCount}}人浏览
                                        </span>
                                    </div>
                                    <div class="remark">
                                        <span class="enjoyCount">
                                            <svg t="1666146613311" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="20498" width="14" height="14">
                                                <path
                                                    d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667z"
                                                    p-id="20499" fill="#cdcdcd"></path>
                                            </svg>
                                            <span>{{item.statisticsBackup.praiseCount}}</span>
                                        </span>
                                        <span class="commentCount">
                                            <svg t="1666146659511" class="icon" viewBox="0 0 1035 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="21516" width="14" height="14">
                                                <path
                                                    d="M905.898667 44.032 129.365333 44.032c-71.338667 0-129.365333 58.026667-129.365333 129.365333l0 518.144c0 71.338667 58.026667 129.365333 129.365333 129.365333l253.952 0 134.144 163.84 133.802667-163.84 254.293333 0c71.338667 0 129.365333-58.026667 129.365333-129.365333L1034.922667 173.397333C1035.264 102.058667 977.237333 44.032 905.898667 44.032L905.898667 44.032 905.898667 44.032zM236.885333 498.005333c-34.474667 0-62.464-27.989333-62.464-62.464 0-34.474667 27.989333-62.464 62.464-62.464 34.474667 0 62.464 27.989333 62.464 62.464C299.349333 470.016 271.36 498.005333 236.885333 498.005333L236.885333 498.005333 236.885333 498.005333zM518.144 498.005333c-34.474667 0-62.464-27.989333-62.464-62.464 0-34.474667 27.989333-62.464 62.464-62.464 34.474667 0 62.464 27.989333 62.464 62.464C580.608 470.016 552.618667 498.005333 518.144 498.005333L518.144 498.005333zM799.402667 498.005333c-34.474667 0-62.464-27.989333-62.464-62.464 0-34.474667 27.989333-62.464 62.464-62.464 34.474667 0 62.464 27.989333 62.464 62.464C861.866667 470.016 833.877333 498.005333 799.402667 498.005333L799.402667 498.005333zM799.402667 498.005333"
                                                    p-id="21517" fill="#cdcdcd"></path>
                                            </svg>
                                            <span>{{item.statisticsBackup.commentCount}}</span>
                                        </span>
                                        <span class="favoriteCount">
                                            <svg t="1666146694561" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="22527" width="14" height="14">
                                                <path
                                                    d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24z"
                                                    p-id="22528" fill="#cdcdcd"></path>
                                            </svg>
                                            <span>{{item.statisticsBackup.favoriteCount}}</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="card-info">
                                    <div class="left">
                                        <img :src="item.creatorBackup.avatar" alt="" class="avatar">
                                        <span class="name">{{item.creatorBackup.name}}</span>
                                        <img :src="item.creatorBackup.certificationType==='personal'?'https://rs.dance365.com/authenticate_personal@3x.png':''||item.creatorBackup.certificationType==='organization'?'https://rs.dance365.com/authenticate_organ@3x.png':''"
                                            alt="" class="vip" v-show="item.creatorBackup.certificationType!=''">
                                    </div>
                                    <span class="uploadTime">{{moment(item.onsellTime).format('MM-DD')}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="loadMore" v-loading="MoreLoading" element-loading-text="Loading..." @click="loadMore">
                    加载更多</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import moment from 'moment'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHomeStore } from '@/store/home'
const router = useRouter()
const HomeStore = useHomeStore()
const pageNum = ref(0);
const localCache = ref(20)
const column = ref('')
let props = defineProps(['content'])
let MoreLoading = ref(false)
const path = useRoute().path

//浏览器滚动的事件函数
const windowScrollListener = () => {
    //获取操作元素最顶端到页面顶端的垂直距离
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // windowHeight是可视区的高度
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    // scrollHeight是滚动条的总高度
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    // 滚动条到底部
    if (scrollTop + windowHeight >= scrollHeight) {
        // 到了底部之后想做的操作,如到了底部之后加载
        MoreLoading.value = true;
        loadMore()
        window.removeEventListener('scroll', windowScrollListener)
    }
}

const loadMore = async () => {
    if (path === "/home/recommend") {
        column.value = 'recommend';
        pageNum.value++;
        localCache.value = 20;
        MoreLoading.value = true;
        await HomeStore.getRecommendList({ column: column.value, pageNum: pageNum.value, localCache: localCache.value })
        MoreLoading.value = false;
    }
    else if (path === "/home/original") {
        column.value = 'original';
        pageNum.value++;
        MoreLoading.value = true;
        await HomeStore.GetOriginalList({ column: column.value, pageNum: pageNum.value })
        MoreLoading.value = false;

    }
    else if (path === "/home/course") {
        column.value = 'course';
        pageNum.value++;
        MoreLoading.value = true;
        await HomeStore.GetCourseList({ column: column.value, pageNum: pageNum.value })
        MoreLoading.value = false;

    }
    else if (path === "/home/specialTopic") {
        column.value = 'specialTopic';
        pageNum.value++;
        MoreLoading.value = true;
        await HomeStore.GetSpecialTopicList({ column: column.value, pageNum: pageNum.value })
        MoreLoading.value = false;

    }
    else if (path === "/home/information") {
        column.value = 'frontDynamic';
        pageNum.value++;
        MoreLoading.value = true;
        await HomeStore.GetInformationList({ column: column.value, pageNum: pageNum.value })
        MoreLoading.value = false;

    }

}

const toPlay = (item, index) => {
    let source = path.split('/')[2]
    if (path.indexOf('information') != -1) {
        let resourceId = 'frontDynamic'
        router.push(`/detail/video?momentId=${item.id}&source=avocation&index=${index}&resourceId=${resourceId}`)
    } else {
        router.push(`/detail/video?momentId=${item.id}&source=${source}&index=${index}`)
    }
}

onMounted(() => {
    window.addEventListener('scroll', windowScrollListener);
})
</script>

<style lang="less" scoped>
.videoWrap {
    width: 100%;
    background: #eee;
    padding-top: 20px;
}

.videoContainer {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 20px;
    min-height: 700px;
}

.VideoList {
    width: 1200px;

    .loadMore {
        width: 140px;
        height: 40px;
        margin: 20px auto 0;
        font-size: 14px;
        color: #82858e;
        cursor: pointer;
        text-align: center;
        background-color: #fff;
        line-height: 40px;
        border-radius: 4px;
    }
}

.videoItemWrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    >.videoItemContent:not(:nth-child(5n)) {
        margin-right: 20px;
    }
}

.videoItem {
    display: flex;
    flex-direction: column;
    width: 224px;
    height: auto;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 4px;

    .coverWrap {
        width: 224px;
        height: 125.88px;

        .cover {
            position: relative;
            width: 100%;
            height: 100%;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            overflow: hidden;
            cursor: pointer;

            :hover {
                opacity: .4
            }

            .coverClass {
                position: absolute;
                width: 40px;
                height: 22px;
                display: inline-block;
                z-index: 100;
            }

            .contentCover {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 99;
            }

            .playIcon {
                position: absolute;
                bottom: 0;
                width: 30px;
                height: 30px;
                z-index: 100;
            }
        }
    }
}

.detail {
    width: 100%;
    color: #b1b5c1;
    height: 155px;

    .card-detail {
        padding-right: 10px;
        padding-left: 10px;
        padding-bottom: 13px;
        border-bottom: 1px solid #ebeced;
        height: 104px;
        box-sizing: border-box;

        .title {
            font-size: 14px;
            color: #111;
            padding-top: 10px;
            padding-bottom: 0;
            line-height: 18px;
            width: 100%;

            .example {
                box-sizing: border-box;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                height: 36px;

                span {
                    box-sizing: border-box;
                    margin-right: 6px;
                    display: inline-block;
                    width: 24px;
                    height: 16px;
                    vertical-align: bottom;

                    img {
                        width: 26px;
                        height: 16px;
                    }
                }

            }
        }

        .viewCount {
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 32px;
            line-height: 32px;
        }

        .remark {
            align-items: center;
            font-size: 12px;
            height: 28px;
            line-height: 12px;
            padding-bottom: 12px;
            display: flex;
            position: relative;
            box-sizing: border-box;

            svg {
                display: inline-block;
                width: 14px;
                height: 14px;
                margin-right: 5px;
            }

            span {
                span {
                    max-width: 36px;
                    margin-right: 18px;
                }
            }
        }
    }

    .card-info {
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        height: 50px;
        padding-left: 16px;
        position: relative;
        font-size: 12px;

        .left {
            display: flex;
            align-items: center;
            max-width: 128px;
            cursor: pointer;

            .avatar {
                width: 24px;
                height: 24px;
                position: relative;
                border-radius: 50%;
            }

            span {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                margin-left: 8px;
                max-width: 88px;
            }

            .vip {
                width: 12px;
                height: 12px;
            }
        }

        .uploadTime {
            padding-right: 8px;
            line-height: 50px;
        }
    }
}
</style>