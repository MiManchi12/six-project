<template>
    <div class="right">
        <div class="r-top">
            <div class="left-nav" >
                <div class="item active">全部</div>
                <div class="item"  >我创建的</div>
                <div class="item"  >我加入的</div>
                <div class="item" >我的课程</div>
                <!-- <el-button class="item" color="#f93684" >全部</el-button>
                <el-button class="item" color="#f93684">我创建的</el-button>
                <el-button class="item" color="#f93684">我加入的</el-button>
                <el-button class="item" color="#f93684">我的课程</el-button> -->
            </div>
            <div class="right-nav">
                <div class="btn">创建</div>
            </div>
        </div>
        <div class="r-bottom">
            <image class="Img" src="https://rs.dance365.com/img/no_content@3x.0fd78ad2.png"></image>
            <span>暂无更多数据</span>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.right {
    width: 1020px;
    height: 856.19px;
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
        height: 730px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .Img {
            border-style: none;
            width: 225px;
            height: 225px;
        }

        span {
            display: block;
            font-size: 16px;
            color: rgb(177, 181, 193);
            margin-top: 20px;
        }
    }
}
</style>