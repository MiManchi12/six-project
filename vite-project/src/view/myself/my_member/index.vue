<template>
  <el-col :span="20">
    <el-card
      shadow="never"
      :body-style="{ padding: '0px' }"
      class="header-container"
    >
      <span>我的会员</span>
    </el-card>
    <el-card
      shadow="never"
      :body-style="{ padding: '30px' }"
      class="operator_line"
    >
      <div class="avatar">
        <img v-if="vipData.avatar" :src="vipData.avatar" alt="" />
        <img v-else src="../images/default.png" alt="" />
        <div class="name_info">
          <p class="name">1563587_xnN4</p>
          <p class="status">您还不是会员</p>
        </div>
      </div>
      <div class="saving">开通会员平均每年可省：￥9500</div>
      <div class="price_area_main">
        <div class="price_area">
          <div class="price_block">
            <p>季度会员</p>
            <div>
              <span>￥</span>
              <span>98</span>
              <span>/季</span>
            </div>
            <p>合计￥98(青少年专属)</p>
          </div>
          <div class="price_block">
            <p>季度会员</p>
            <div>
              <span>￥</span>
              <span>268</span>
              <span>/年</span>
            </div>
            <p>合计￥268</p>
          </div>
          <div class="price_block">
            <p>三年会员</p>
            <div>
              <span>￥</span>
              <span>196</span>
              <span>/季</span>
            </div>
            <p>合计￥588(省￥216)</p>
          </div>
        </div>
      </div>
      <div class="price_button">
        <el-button
          type="primary"
          size="default"
          color="#ff5d8c"
          style="
            width: 330px;
            height: 56px;
            font-size: 16px;
            color: #fff;
            margin: 0 auto;
            border-radius: 10px;
          "
          @click="centerDialogVisible = true"
          >立即以588元开通</el-button
        >
      </div>
      <div class="agreement_guide">
        <span>开通即视为同意</span>
        <span>《会员服务协议》</span>
      </div>
      <el-divider />
      <div class="section">
        <div class="title">会员专属权益</div>
        <ul class="member_right_list">
          <li class="right_item">
            <img
              src="./images/teach_video_free.png"
              alt=""
              style="width: 46px; height: 42px"
            />
            <div>
              <span>724</span>
              <span>个会员专区</span>
            </div>
            <p>课程免费学习</p>
          </li>
          <li class="right_item">
            <img
              src="./images/member_preferential.png"
              alt=""
              style="width: 46px; height: 42px"
            />
            <div>
              <span></span>
              <span>非会员专区课程</span>
            </div>
            <p>可获会员立减优惠</p>
          </li>
          <li class="right_item">
            <img
              src="./images/member_screen@2x.png"
              alt=""
              style="width: 46px; height: 42px"
            />
            <div>
              <span></span>
              <span>同屏对比</span>
            </div>
            <p>功能</p>
          </li>
          <li class="right_item">
            <img
              src="./images/update_music@3x.png"
              alt=""
              style="width: 46px; height: 42px"
            />
            <div>
              <span></span>
              <span>音频提取</span>
            </div>
            <p>功能</p>
          </li>
          <li class="right_item">
            <img
              src="./images/music_clip@3x.png"
              alt=""
              style="width: 46px; height: 42px"
            />
            <div>
              <span></span>
              <span>音频剪辑</span>
            </div>
            <p>功能</p>
          </li>
          <li class="right_item">
            <img
              src="./images/member_icon_beat.png"
              alt=""
              style="width: 46px; height: 42px"
            />
            <div>
              <span></span>
              <span>节拍口令</span>
            </div>
            <p>功能</p>
          </li>
          <li class="right_item">
            <img
              src="./images/member_photo_download1@3x.png"
              alt=""
              style="width: 46px; height: 42px"
            />
            <div>
              <span></span>
              <span>保存视频到</span>
            </div>
            <p>手机本地相册</p>
          </li>
          <li class="right_item">
            <img
              src="./images/lv_ad@3x.png"
              alt=""
              style="width: 46px; height: 42px"
            />
            <div>
              <span></span>
              <span>免广告特权</span>
            </div>
            <p></p>
          </li>
          <li class="right_item">
            <img
              src="./images/lv_accelerate.png"
              alt=""
              style="width: 46px; height: 42px"
            />
            <div>
              <span></span>
              <span>成长等级</span>
            </div>
            <p>加速特权</p>
          </li>
          <li class="right_item">
            <img
              src="./images/course_equity.png"
              alt=""
              style="width: 46px; height: 42px"
            />
            <div>
              <span></span>
              <span>会员学习</span>
            </div>
            <p>成长优先帮扶</p>
          </li>
          <li class="right_item">
            <img
              src="./images/member_logo.png"
              alt=""
              style="width: 46px; height: 42px"
            />
            <div>
              <span></span>
              <span>会员专享</span>
            </div>
            <p>身份标识</p>
          </li>
          <li class="right_item">
            <img
              src="./images/update_equity.png"
              alt=""
              style="width: 46px; height: 42px"
            />
            <div>
              <span></span>
              <span>享受新增</span>
            </div>
            <p>权益和功能</p>
          </li>
        </ul>
      </div>
      <el-dialog v-model="centerDialogVisible" width="30%" center>
        <span>
          仅限1000周岁下购买，请在APP中进行身份认证,打开APP
          我的->管理我的主页->我的资料->身份认证
        </span>
        <template #footer>
          <span class="dialog-footer">
            <el-button
              type="primary"
              @click="centerDialogVisible = false"
              color="#ff4e86"
              style="color: #fff"
            >
              确定
            </el-button>
          </span>
        </template>
      </el-dialog>
      <el-divider />
    </el-card>
  </el-col>
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
import { defineComponent, onMounted, ref } from 'vue'
import { reqVipData } from '../../../api/myself/vipInfo/vipInfo'
onMounted(() => {
  setTimeout(() => {
    getVipData()
  })
})
const centerDialogVisible = ref(false)
const vipData = ref({})
const getVipData = async () => {
  let result = await reqVipData()
  vipData.value = result
}
</script>

<style scoped>
/* 右侧代码 */
.header-container {
  height: 72px;
  font-size: 14px;
  line-height: 72px;
  padding-left: 30px;
  margin-bottom: 10px;
}

.operator_line {
  min-height: 700px;
}
.avatar {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.name_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 21px;
  height: 53px;
}
.name_info .name {
  font-size: 20px;
  margin: 20px 0 0;
}
.name_info .status {
  font-size: 14px;
  color: #ff4e86;
}
.saving {
  width: 100%;
  text-align: center;
  font-size: 16px;
  margin-top: 20px;
}
.price_area_main {
  margin: 21px 120px 0;
}
.price_area {
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
}
.price_area_main .price_block {
  width: 218px;
  height: 122px;
  border: 2px solid #eee;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}
.price_area_main .price_block div span:nth-child(2) {
  font-size: 30px;
}
.price_area_main .price_block:nth-child(3) {
  border: 2px solid #ff4e86;
  color: #ff4e86;
  background-color: rgba(255, 160, 160, 0.2);
}
.price_button {
  width: 100%;
  display: flex;
  justify-items: center;
  margin-top: 30px;
  margin-bottom: 12px;
}

.agreement_guide {
  font-size: 14px;
  text-align: center;
}
.agreement_guide span:nth-child(2) {
  color: #ff4e86;
}
.title {
  font-size: 20px;
  font-weight: bolder;
}
.member_right_list {
  margin-top: 20px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
}
.member_right_list .right_item {
  width: 129px;
  height: 129px;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  flex-shrink: 0;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
}
.right_item img {
  padding-top: 14px;
}
.right_item div span:nth-child(1) {
  color: #ff4e86;
}
.right_item div {
  margin-top: 16px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
