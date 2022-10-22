<template>
  <div>
    <Title></Title>
    <topNav></topNav>
    <navChose></navChose>
    <navFooter></navFooter>
 
   
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
<<<<<<< HEAD
import {onMounted} from 'vue'
import {reqVip} from '../../../api/class/class' 

onMounted(()=>{
  get()
})
const get = async()=>{
    let result = await reqVip()
    

}
=======

>>>>>>> fxs
</script>
<style scoped>
</style>

