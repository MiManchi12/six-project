<template>
    <div>
        <div v-loading="Loading" element-loading-text="Loading...">
            <VideoCard :content="HomeStore.coursecontent"></VideoCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useHomeStore } from '../../../store/home'
const HomeStore = useHomeStore()
let Loading = ref(false)
onMounted(() => {
    getCourse()
})
const getCourse = async () => {
    Loading.value = true
    await HomeStore.GetCourseList({ column: 'course', pageNum: 0})
    Loading.value = false
}
</script>

<style scoped>

</style>