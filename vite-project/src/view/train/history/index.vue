<template>
    <div class="right">
        <div class="left-h-nav">
            <span class="nav">历史记录</span>
        </div>
        <div class="r-content">
            <div class="r-warp">
                <div class="demo-input-size">
                    <el-input v-model="input2" class="w-50 m-2" size="large" placeholder="Please Input"
                        :prefix-icon="Search" />
                </div>
                <el-button size="large" @click="" color="#e6e6eb" style="margin-left: 10px;">搜索</el-button>
                <span class="cont">批量删除</span>
            </div>
            <div class="noMore">
                <div class="mainItem">
                    <div class="mainItem-L">
                        <div class="mainItem-img">
                            <img src="./1.jpg" alt="">
                        </div>
                        <div class="mainItem-title">
                            <p>中老年朋友练好这一点，心态稳定身体康泰！</p>
                            <a href="">动态</a>
                            <div>
                                <img src="./1.jpg" alt="">
                                <a class="mainItem-title-C" href="">精品古筝课免费领8节课</a>
                            </div>
                        </div>
                    </div>
                    <div class="mainItem-R">
                        <span href="#">昨天 22:09</span>
                        <a>删除</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const input2 = ref('')

</script>

<style scoped lang="less">
.right {
    width: 1020px;
    height: 836.19px;
    float: right;

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

    .r-content {
        width: 1020px;
        height: 730px;
        background-color: #fff;
        border-radius: 4px;
        margin-top: 10px;

        .r-warp {
            width: 949px;
            height: 40px;
            padding: 14px 40px 10px 31px;

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

        .noMore {
            width: 963px;
            height: 60px;
            padding: 0 35px 0 22px;

            .mainItem {
                width: 100%;
                height: 130px;
                border-bottom: 1px solid #eee;
            }

            .mainItem:hover {
                background: #eee;
            }

            .mainItem-img {
                width: 172px;
                height: 102px;
                border-radius: 5px;
                margin: 14px -10px 0 10px;
                float: left;
            }

            .mainItem-img img {
                width: 100%;
                height: 100%;
            }

            .mainItem-title {
                width: 320px;
                font-size: 16px;
                color: #111;
                /* background: #eee; */
                float: left;
                margin: 14px 0 0 10px;
                padding: 10px 50px 0px 20px;
            }

            .mainItem-title img {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                line-height: 40px;
            }

            .mainItem-title p {
                line-height: 30px;
            }

            .mainItem-title a {
                line-height: 30px;
                font-size: 14px;
            }

            .mainItem-title .mainItem-title-C {
                vertical-align: top;
                margin-left: 15px;
                font-size: 16px;
                color: #111;
            }

            .mainItem-R {
                width: 264px;
                height: 102px;
                /* background: #f93684; */
                float: right;
                /* margin-top: 1px; */
                display: flex;
            }

            .mainItem-R span {
                flex: 1;
                line-height: 122px;
                text-align: center;
                font-size: 16px;
                color: #111;
            }

            .mainItem-R a {
                /* padding: 8px 0px; */
                width: 110px;
                height: 120px;
                line-height: 122px;
                text-align: center;
                font-size: 14px;
                color: #7d8090;
            }

        }
    }

}
</style>