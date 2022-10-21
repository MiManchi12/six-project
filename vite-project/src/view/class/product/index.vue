<template>
  <div>
    <Header></Header>
    <div class="product">
      <div class="title"><h4>最新排行榜课程</h4></div>
      <div class="productContent">
        <p>
          本专区根据中国舞蹈排行榜当期内容即时更新，囊括最新热门舞蹈作品视频课、直播课。
        </p>
      </div>
    </div>
    <div class="navProduct">
      <p>
        类型：
        <el-button class="productType">全部</el-button>
        <el-button class="productType">视频课</el-button>
        <el-button class="productType">线下课</el-button>
        <el-button class="productType">直播课</el-button>
      </p>
    </div>
    <navFooter></navFooter>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import navFooter from "../components/navfooter/index.vue";
</script>

<style scoped>
.product {
  width: 1200px;
  height: 179px;
  margin: 10px auto;

  background: #ffffff;
}
.product h4 {
  padding-top: 30px;
  font-size: 20px;
  padding-left: 10px;
}
.product .productContent p {
  font-size: 14px;
  padding-left: 10px;
}
.navProduct {
  width: 1200px;
  height: 82px;
  background: #ffffff;
  margin: 10px auto;
}
.navProduct p {
  line-height: 82px;
  padding-left: 10px;
}
.navProduct .productType {
  margin-right: 20px;
}
</style>