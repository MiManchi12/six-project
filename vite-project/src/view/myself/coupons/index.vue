<template>
  <el-col :span="20">
    <el-card
      shadow="never"
      :body-style="{ padding: '0px' }"
      class="header-container"
    >
      <span>我的优惠券</span>
    </el-card>
    <el-card
      shadow="never"
      :body-style="{ padding: '16px 30px' }"
      class="operator_line"
    >
      <el-form
        ref="form"
        label-width="80px"
        :inline="true"
        size="normal"
        style="margin-bottom: 16px"
      >
        <el-form-item label="" style="margin: 0">
          <el-input
            class="w-50 m-2"
            size="large"
            :prefix-icon="Search"
            style="width: 270px; height: 40px"
          />
        </el-form-item>
        <el-form-item style="margin: 0"
          ><el-button
            style="height: 40px; margin-left: 10px; margin-right: 30px"
            color="#f5f7f9"
            >搜索</el-button
          ></el-form-item
        >
        <el-form-item label="资源类型:" style="margin: 0">
          <el-select placeholder="全部资源" width="200">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="状态:" style="margin: 0">
          <el-select placeholder="全部">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <el-table style="width: 100%">
        <el-table-column
          prop="ne"
          label="内容"
          width="410"
          height="44"
          align="center"
        />
        <el-table-column
          prop="name"
          label="发布时间"
          width="150"
          align="center"
        />
        <el-table-column prop="address" label="数据" align="center" />
        <el-table-column prop="address" label="状态" align="center" />
        <el-table-column prop="address" label="操作" align="center" />
      </el-table>
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
  min-height: 700px;
}
</style>
