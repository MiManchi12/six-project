<template>
  <div>
    <Title></Title>
    <topNav></topNav>
    <navChose></navChose>
    <navFooter></navFooter>
    <div class="content">
      <a href="">
        <img src="" alt="" style="width:124px height:125px" />
      </a>
      <span>yuanchuang</span>
      <span></span>
    </div>
    <Footer></Footer>
  </div>
</template>
<script lang="ts" setup>
import navChose from "../components/navchose/index.vue";
import topNav from "../components/topnav/index.vue";
import navFooter from "../components/navfooter/index.vue";
import Title from "../components/title/index.vue";
import "./index.css";
import Header from "../../../components/Header/Header.vue";
import {onMounted} from 'vue'
import {reqVip} from '../../../api/class/class' 

onMounted(()=>{
  get()
})
const get = async()=>{
    let result = await reqVip()
    

}
</script>
<style scoped>
</style>

