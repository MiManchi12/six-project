<template>
  <div class="navChose">
    <!-- 筛选区域 -->
    <el-card
      class="w"
      shadow="never"
      style="
        border-radius: 0px;
        box-sizing: border-box;
        margin-bottom: 10px;
        position: relative;
      "
    >
      <div class="top" :class="{ isHidden: isFold }">
        <el-row
          :gutter="20"
          class="filter"
          v-for="(title, index1) in choseStore.label11"
        
        >
          <el-col :span="2">
            <div class="filter_title">{{title}}：</div>
          </el-col>
          <el-col :span="22">
            <!-- 筛选的文本 -->
            <span
              class="filter_content"
              :class="{ filter_content_active: item.isClick }"
              v-for="(item,index) in choseStore.choises[index1]" :key="item.id"
              @click="isSelected(item, title.choises)"
              >{{item.name}}</span
            >
          </el-col>
        </el-row>
      </div>
      <div class="fold_toggle_container w" @click="changeHeight">
        {{ isFold ? '展开全部' : '收起' }}
      </div>
      <div class="reset" v-show="selectId.length" @click="resetBen">重置</div>
    </el-card>
 </div>
</template>


<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { log } from 'console';
import {ref,onMounted,computed} from 'vue'
import {reqChose} from '../../../../api/class/class'
import {useChoseStore} from '../../../../store/class/class'
let isFold = ref(true)


let choseStore = useChoseStore();

const changeHeight = () => {
  isFold.value = !isFold.value

}

console.log(choseStore)
onMounted(()=>{
  choseStore.getChose()
})



// 选择时的id
let selectId = ref([])

// 使用仓库


// 选中的值
let checkeData = ref([])

// 高亮的值
let isActive = ref(1)



// 筛选的回调
const isSelected = (dances: any, dancesList: any) => {
  // 动态添加是否点击的属性
  if (dances.isClick) {
    // 如果点击了，取消点击
    dances.isClick = false
    return
  }

  let result = dancesList.filter(item => {
    return item.isClick
  })

  if (result.length === 3) {
    ElMessage('同一筛选条件最多只选择3个')
    return
  }
  dances.isClick = true
}


</script>

<style scoped lang="less">
.navChose{
  background:#f5f7f9
}
// 版心区
.w {
  width: 1200px;
  margin: 0 auto;
}
// 筛选区域
.top {
  padding: 5px 30px 0;
}
.filter {
  position: relative;
}
// 重置按钮
.reset {
  position: absolute;
  right: 30px;
  top: 33px;
  cursor: pointer;
  font-size: 14px;
  color: #f93684;
}
// 点击收起时
.isHidden {
  height: 120px;
  overflow: hidden;
}
.filter_title {
  color: #b1b5c1;
  padding: 7px 0;
  box-sizing: border-box;
  font-size: 14px;
}

.filter_content {
  display: inline-block;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  color: #7d8090;
  padding: 7px 13px;
  user-select: none;
  margin-right: 24px;
  margin-bottom: 10px;
}

// 筛选文字的选中状态
.filter_content_active {
  background-color: #f93684;
  color: #fff;
}

// 点击展开
.fold_toggle_container {
  // height: 20px;
  text-align: center;
  color: #f93684;
  font-size: 14px;
  margin: 10px auto 0;
  background-color: #fff;
  cursor: pointer;
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