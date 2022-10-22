<template>
  <div>
  <div class="sort-container w">
    <div
      class="sort_text"
      :class="{ active: isActive == 1 }"
      data-id="1"
      @click="handleOrder"
    >
      综合排序
    </div>
    <div
      class="sort_text"
      :class="{ active: isActive == 2 }"
      data-id="2"
      @click="handleSell"
    >
      销量
    </div>
    <!-- <div>评价</div> -->
    <div
      class="sort_text"
      :class="{ active: isActive == 3 }"
      data-id="3"
      @click="handleCount"
    >
      浏览量
    </div>
    <div>
      <el-dropdown class="sort_text">
        <div class="sort-dropdown-text">
          <div
            data-id="4"
            :class="{ active: isActive == 4 }"
            @click="handlePrice"
          >
            价格
          </div>
          <el-icon><ArrowDown /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>价格由高到低</el-dropdown-item>
            <el-dropdown-item>价格由低到高</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div
      class="sort_text"
      data-id="5"
      :class="{ active: isActive == 5 }"
      @click="handleTime"
    >
      发布时间
    </div>
  </div>
    <VideoCard :content="getUser"></VideoCard>
    
</div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { ref, onMounted, computed } from "vue";
import {reqGetVideo} from '../../../../api/class/class'
import {useVideoStore} from '../../../../store/class/class'
let getUser = ref([])

// let  getVideoStore = useVideoStore()

onMounted(()=>{
  getVideo()
})
let getVideo=async()=>{
  let result= await reqGetVideo()
  getUser.value= result.content

  console.log(getUser.value)
}
// 选中的值
let checkeData = ref([]);

// 高亮的值
let isActive = ref(1);

// 点击综合的回调
const handleOrder = (event) => {
  isActive.value = event.currentTarget.dataset.id;
};

// 销量
const handleSell = (event: any) => {
  isActive.value = event.currentTarget.dataset.id;
};

// 销售量
const handleCount = (event: any) => {
  isActive.value = event.currentTarget.dataset.id;
};

// 价格
const handlePrice = (event: any) => {
  isActive.value = event.currentTarget.dataset.id;
};

// 发布时间
const handleTime = (event: any) => {
  isActive.value = event.currentTarget.dataset.id;
};
</script>

<style scoped lang="less">
// 版心区
.w {
  width: 1200px;
  margin: 0 auto;
}

// 排序区
.sort-container {
  height: 75px;
  display: flex;
  align-items: center;
  background-color: #fff;
  width: 1200px;
  margin: 0 auto;
  padding-left: 30px;
  box-sizing: border-box;
  .sort_text {
    display: inline-block;
    font-size: 14px;
    color: #7d8090;
    cursor: pointer;
    margin-right: 40px;
    display: flex;
    align-items: center;
    &:hover {
      color: #f93684;
    }
  }
  .sort-dropdown-text {
    display: flex;
  }
  .active {
    color: #f93684;
  }
}
</style>
