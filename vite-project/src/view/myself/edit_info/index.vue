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
          src="../images/default.png"
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
                <el-input placeholder="1563587_xnN4" size="large" />
              </el-form-item>
            </el-col>
            <el-col :span="12" :offset="0">
              <el-form-item label="生日:">
                <div class="demo-date-picker">
                  <div class="block">
                    <el-date-picker
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
                <el-button
                  type="primary"
                  style="width: 70px; color: #fff"
                  size="default"
                  color="#ff4e86"
                  >男</el-button
                >
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
                <div class="example-block">
                  <el-cascader
                    size="large"
                    v-model="value"
                    :options="options"
                  />
                </div>
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
                        placeholder="Please Input"
                        :prefix-icon="Search"
                        style="width: 300px"
                      />
                      <el-button type="primary" color="#f5f7f9" size="default">
                        搜索
                      </el-button>
                    </el-form-item>
                  </el-form>

                  <template #footer>
                    <span class="dialog-footer">
                      <el-button @click="dialogFormVisible = false"
                        >取消</el-button
                      >
                      <el-button
                        type="primary"
                        @click="dialogFormVisible = false"
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
          >保存</el-button
        >
      </div>
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
import { defineComponent } from 'vue'

import { ref, reactive } from 'vue'

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
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
      },
      {
        value: 'navigation',
        label: 'Navigation',
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
      },
      {
        value: 'form',
        label: 'Form',
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'docs',
        label: 'Design Documentation',
      },
    ],
  },
]
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
</style>
