<template>
    <!-- 收藏 -->
    <div class="right">
        <div class="left-h-nav">
            <span class="nav">资源</span>
            <span class="nav">视频课</span>
            <span class="nav">直播课</span>
            <span class="nav">线下课</span>
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
                <span>无更多内容</span>
                <!-- 分割线 -->
                <el-divider />
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
// 右侧模块
.right {
    width: 1020px;
    height: 836.19px;
    float: right;

    // 导航栏
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

            span {
                line-height: 60px;
                font-size: 12px;
                color: #909399;
                text-align: center;
                display: block;
                margin: auto;
            }
        }
    }

}
</style>