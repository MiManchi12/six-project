<template>
  <el-col :span="20">
    <el-card
      shadow="never"
      :body-style="{ padding: '0px' }"
      class="header-container"
    >
      <span>编辑资料</span>
    </el-card>
    <el-card
      shadow="never"
      :body-style="{ padding: '30px' }"
      class="operator_line"
    >
      <div class="avatar-container">
        <img
          style="width: 120px; height: 120px; border-radius: 50%"
          :src="selfData.avatar ? selfData.avatar : '../images/default.png'"
          alt=""
        />
      </div>
      <div class="avatar-tip">点击更换</div>
      <div class="main-form">
        <el-form
          ref="form"
          label-width="80px"
          :inline="false"
          size="normal"
          label-position="left"
        >
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-form-item label="用户名:">
                <el-input
                  :placeholder="selfData ? selfData.account : ''"
                  size="large"
                  v-model="input"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12" :offset="0">
              <el-form-item label="生日:">
                <div class="demo-date-picker">
                  <div class="block">
                    <el-date-picker
                      v-model="timeArr"
                      type="date"
                      placeholder="选择日期"
                      style="height: 40px"
                    />
                  </div>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-form-item label="性别:">
                <el-button type="default" style="width: 70px">男</el-button>
                <el-button type="default" style="width: 70px" size="default"
                  >女</el-button
                >
              </el-form-item>
            </el-col>
            <el-col :span="12" :offset="0">
              <el-form-item label="城市:">
                <div class="example-block">
                  <el-cascader
                    v-model="value"
                    :options="options"
                    size="large"
                  />
                </div>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-form-item label="成长等级:" style="height: 40px">
                <div class="level_box">
                  <img src="../images/level_Lv.@3x.png" alt="" />
                  <img src="../images/level_num_1@3x.png" alt="" />
                </div>
              </el-form-item>
            </el-col>
            <el-col :span="12" :offset="0">
              <el-form-item label="技能水平:">
                <el-select
                  v-model="groupTypeList.name"
                  placeholder="零基础"
                  size="large"
                >
                  <el-option
                    v-for="item in groupTypeList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.desc"
                  >
                    <span style="float: left">{{ item.name }}</span>
                    <span
                      style="
                        float: right;
                        color: var(--el-text-color-secondary);
                        font-size: 13px;
                      "
                      >{{ item.desc }}</span
                    >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-form-item label="技能兴趣:">
                <!-- Form -->
                <el-button text @click="dialogFormVisible = true"
                  >请选择</el-button
                >

                <el-dialog v-model="dialogFormVisible">
                  <template #header>
                    <div class="dialogHeader">
                      <div class="title" style="font-size: 18px">
                        选择我的兴趣技能
                        <span style="padding-left: 20px; color: #b1b5c1"
                          >0/7</span
                        >
                      </div>
                      <div
                        style="
                          font-size: 14px;
                          line-height: 14px;
                          color: #b1b5c1;
                          margin-top: 6px;
                        "
                      >
                        例如舞蹈就选舞种
                      </div>
                    </div>
                  </template>
                  <el-form label-width="80px" :inline="false" size="normal">
                    <el-form-item :span="11">
                      <el-input
                        class="w-50 m-2"
                        size="large"
                        placeholder="搜索兴趣技能"
                        :prefix-icon="Search"
                        style="width: 300px"
                      />
                      <el-button
                        type="primary"
                        color="#f5f7f9"
                        size="large"
                        style="margin-left: 10px"
                      >
                        搜索
                      </el-button>
                    </el-form-item>
                  </el-form>
                  <p>推荐兴趣技能</p>

                  <!-- 滚动 -->
                  <el-scrollbar height="300px">
                    <p
                      v-for="item in 20"
                      :key="item"
                      class="scrollbar-demo-item"
                    >
                      {{ item }}
                    </p>
                  </el-scrollbar>

                  <template #footer>
                    <span class="dialog-footer">
                      <el-button
                        @click="dialogFormVisible = false"
                        style="width: 130px; height: 40px"
                        >取消</el-button
                      >
                      <el-button
                        type="primary"
                        @click="dialogFormVisible = false"
                        style="width: 130px; height: 40px; color: #fff"
                        color="#f93684"
                        disabled
                        >确定</el-button
                      >
                    </span>
                  </template>
                </el-dialog>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="main_button">
        <el-button
          type="primary"
          style="width: 140px; height: 46px; color: #fff"
          color="#f93684"
          size="default"
          @click="saveHandler"
          >保存</el-button
        >
      </div>
    </el-card>
  </el-col>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
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
import { defineComponent, onMounted } from 'vue'

import { ref, reactive } from 'vue'
import { reqGroupType } from '../../../api/myself/editInfo/editInfo'
import { reqMySelfData } from '../../../api/myself/userInfo/userInfo'
const sexState = ref(true)
const timeArr = ref('')
const groupTypeList = ref({})
const input = ref('')
const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const value = ref([])

const props = {
  expandTrigger: 'hover',
}

const handleChange = (value) => {
  console.log(value)
}

const options = [
  {
    value: 'guide',
    label: '北京',
    children: [
      {
        value: 'disciplines',
        label: '朝阳',
      },
      {
        value: 'navigation',
        label: '昌平',
      },
    ],
  },
  {
    value: 'component',
    label: '河北',
    children: [
      {
        value: 'basic',
        label: '石家庄',
      },
      {
        value: 'form',
        label: '邯郸',
      },
    ],
  },
  {
    value: 'resource',
    label: '山西',
    children: [
      {
        value: 'axure',
        label: '太原',
      },
      {
        value: 'sketch',
        label: '吕梁',
      },
      {
        value: 'docs',
        label: '临汾',
      },
    ],
  },
]
const selfData = ref({})
onMounted(() => {
  getGroupList()
  getMySelfData()
})
const getGroupList = async () => {
  let result = await reqGroupType()
  const group = result.map((item: any) => {
    return item.data
  })

  groupTypeList.value = group
}

const getMySelfData = async () => {
  let result = await reqMySelfData()
  selfData.value = result
}
console.log(groupTypeList)
const saveHandler = () => {
  setTimeout(() => {
    ElMessage({
      message: '保存成功',
      type: 'success',
    })
  }, 500)
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
  /* height: 72px; */
  min-height: 600px;
  width: 100%;
}

.avatar-container {
  display: flex;
  justify-content: center;
}
.avatar-tip {
  font-size: 14px;
  color: #7d8090;
  text-align: center;
  padding: 12px;
}
.main-form {
  padding: 30px 140px;
  position: relative;
}
.level_box {
  background-color: #ff3ec7;
  width: 41px;
  height: 30px;
  border-radius: 3px;
}
.level_box img {
  height: 10px;
  padding-left: 5px;
}
.main_button {
  width: 100%;
  display: flex;
  justify-content: center;
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
