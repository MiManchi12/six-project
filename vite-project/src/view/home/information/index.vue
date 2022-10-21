<template>
    <div>
        <div v-loading="Loading" element-loading-text="Loading...">
            <VideoCard :content="HomeStore.informationcontent"></VideoCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useHomeStore } from '../../../store/home'
const HomeStore = useHomeStore()
let Loading = ref(false)
onMounted(() => {
    getInformation()
    
})
const getInformation = async () => {
    Loading.value = true
    await HomeStore.GetInformationList({ column: 'frontDynamic', pageNum: 0})
    Loading.value = false
}
</script>

<style scoped>

</style>