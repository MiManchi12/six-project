<template>
    <div>
        <div v-loading="Loading" element-loading-text="Loading...">
            <VideoCard :content="HomeStore.content"></VideoCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useHomeStore } from '../../../store/home'

const HomeStore = useHomeStore()
let Loading = ref(false)

onMounted(() => {
    getRecommend()
})
const getRecommend = async () => {
    Loading.value = true
    await HomeStore.getRecommendList({ column: 'recommend', pageNum: 0, localCache: 20 })
    Loading.value = false
}
</script>

<style scoped>

</style>