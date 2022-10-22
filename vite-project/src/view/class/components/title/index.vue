<template>
  <!-- 头部组件 -->
  <!-- 课程下面的导航区 -->
  <div>
    <Header></Header>
    <div class="nav">
      <div class="navitem">
        <router-link :class="route.path.includes('vip')?'border':''" to="/class/vip">会员专区</router-link>
        <router-link :class="route.path.includes('video')?'border':''" to="/class/video">视频课</router-link>
        <router-link :class="route.path.includes('live')?'border':''" to="/class/live">直播课</router-link>
        <router-link :class="route.path.includes('offline')?'border':''" to="/class/offline">线下课</router-link>
        <router-link :class="route.path.includes('subject')?'border':''" to="/class/subject">主题</router-link>
      </div>
    </div>
  </div>
  <!-- 底部组件 -->
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="less">
//导航容器样式
.nav {
  width: 100%;
  height: 80px;
  border: 1px solid #eee;

  .navitem {
    width: 1000px;
    height: 80px;
    margin: 0 auto;
    text-align: center;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 300px;

    router-link {
      display: inline-block;
    }

    .border {
      border-bottom: 3px solid rgb(1, 1, 1);
    }
  }
}
</style>