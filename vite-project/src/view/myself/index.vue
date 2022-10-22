<template>
  <Header></Header>
  <div class="personal">
    <div class="personalContainer">
      <el-row :gutter="10">
        <!-- 左侧 -->
        <el-col :span="4">
          <el-card
            shadow="never"
            :body-style="{ padding: '20px 0' }"
            class="base-info"
          >
            <img
              v-if="selfData.avatar"
              class="avatar"
              :src="selfData.avatar"
              alt=""
            />
            <img v-else class="avatar" src="./images/default.png" alt="" />
            <div class="name_container">
              <p style="margin: 0">
                {{ selfData.account ? selfData.account : '用户名' }}
              </p>
              <div class="level_box">
                <img src="./images/level_Lv.@3x.png" alt="" />
                <img src="./images/level_num_1@3x.png" alt="" />
              </div>
            </div>
            <div class="account-number">
              <p class="account-count">0</p>
              <p class="tip">关注</p>
            </div>
            <div class="account-number">
              <p class="account-count">0</p>
              <p class="tip">粉丝</p>
            </div>
          </el-card>
          <el-card
            shadow="never"
            :body-style="{ padding: '5px 0' }"
            class="navigation-block"
          >
            <router-link to="/center/dynamics" class="navigation-item"
              >资源动态</router-link
            >

            <div class="active"></div>
          </el-card>
          <el-card
            shadow="never"
            :body-style="{ padding: '5px 0' }"
            class="navigation-block"
          >
            <router-link to="/center/my_member" class="navigation-item"
              >我的会员</router-link
            >
            <router-link to="/center/wallet" class="navigation-item"
              >我的钱包</router-link
            >
            <router-link to="/center/coupons" class="navigation-item"
              >我的优惠券</router-link
            >
            <router-link to="buyer" class="navigation-item"
              >我买的订单</router-link
            >
            <!-- <a class="navigation-item">我卖的</a> -->
            <el-menu class="el-menu-vertical-demo" background-color="#fff">
              <el-sub-menu>
                <template #title>
                  <span>我卖的</span>
                </template>
                <el-menu-item index="1-1" class="navigation-item"
                  >订单管理</el-menu-item
                >
                <el-menu-item index="1-2" class="navigation-item"
                  >商品管理</el-menu-item
                >
                <el-menu-item index="1-3" class="navigation-item"
                  >客户管理</el-menu-item
                >
                <el-menu-item index="1-4" class="navigation-item"
                  >待收款</el-menu-item
                >
                <el-menu-item index="1-5" class="navigation-item"
                  >优惠管理</el-menu-item
                >
                <el-menu-item index="1-6" class="navigation-item"
                  >评价管理</el-menu-item
                >
                <el-menu-item index="1-7" class="navigation-item"
                  >保证金</el-menu-item
                >
              </el-sub-menu>
            </el-menu>
          </el-card>
          <el-card
            shadow="never"
            :body-style="{ padding: '5px 0' }"
            class="navigation-block"
          >
            <router-link to="/center/edit_info" class="navigation-item"
              >我的资料</router-link
            >
          </el-card>
        </el-col>
        <!-- 右侧 -->

        <router-view
          style="margin-top: 20px; margin-bottom: 20px"
        ></router-view>
      </el-row>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup lang="ts">
//引入element-plus提供icon图标组件
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
  Plus,
  UploadFilled,
} from '@element-plus/icons-vue'
import { reqMySelfData } from '../../api/myself/userInfo/userInfo'
import { ref, onMounted } from 'vue'
onMounted(() => {
  getMySelfData()
})
let selfData = ref({})
const getMySelfData = async () => {
  let result = await reqMySelfData()
  selfData.value = result
}
</script>

<style scoped>
.personal {
  width: 100%;
  height: 100%;
  /* background-color: #eee; */
}
.personalContainer {
  width: 1200px;
  /* border: 1px solid #fff; */
  margin: 0 auto;
}
.base-info {
  /* width: 170px; */
  height: 260px;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 20px;
}
.base-info .avatar {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
}
.header-container {
  /* width: 1020px; */
  height: 72px;
}
.name_container {
  font-size: 16px;
  text-align: center;

  height: 44px;
  padding: 6px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.level_box {
  background-color: #ff3ec7;
  width: 41px;
  height: 21px;
  border-radius: 3px;
  margin-top: 5px;
}
.level_box img {
  height: 10px;
}

.account-number {
  width: 50%;
  text-align: center;
  float: left;
}
.account-number .account-count {
  font-size: 16px;
  margin-bottom: 7px;
}
.account-number .tip {
  font-size: 14px;
  color: #7d8090;
}

.navigation-block {
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  position: relative;
}
.navigation-item {
  display: block;
  padding: 17px 19px;
  /* box-sizing: border-box; */
  position: relative;
}

:deep(.el-menu-vertical-demo) {
  border: 0;
  background-color: transparent;
}
:deep(.el-menu-vertical-demo .navigation-item) {
  padding: 0;
}

:deep(.navigation-item:hover:before) {
  content: '';
  display: block;
  background-color: #f93684;
  width: 4px;
  height: 37px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
  /* background-color: #f93684; */
}

:deep(.el-menu .el-menu-item:hover) {
  background-color: #fff;
}
</style>
