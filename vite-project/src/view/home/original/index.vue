<template>
    <div>
        <div v-loading="Loading" element-loading-text="Loading...">
            <VideoCard :content="HomeStore.originalcontent"></VideoCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useHomeStore } from '../../../store/home'
const HomeStore = useHomeStore()
let Loading = ref(false)
onMounted(() => {
    getOriginal()
})
const getOriginal = async () => {
    Loading.value = true
    await HomeStore.GetOriginalList({ column: 'original', pageNum: 0 })
    Loading.value = false
}
</script>

<style scoped>

</style>