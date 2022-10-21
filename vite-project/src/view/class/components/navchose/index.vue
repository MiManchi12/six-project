<template>
  <div class="vipPart">
    <el-card style="margin-top: 15px">
      <div
        class="center-nav"
        ref="centerNavRef"
        style="position: relative; height: 200px"
      >
        <div class="center-nav-item">
          <span style="width: 8.33%; height: 80px"></span>
          <div style="width: 1100px">
            <el-button></el-button>
          </div>
        </div>
        <div
          style="
            margin: 0 auto;
            position: absolute;
            bottom: 10px;
            left: 50%;
            color: #fa3684;
            cursor: pointer;
          "
        >
          展开全部
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>