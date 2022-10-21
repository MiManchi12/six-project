<template>
    <div>
        <div v-loading="Loading" element-loading-text="Loading...">
            <VideoCard :content="HomeStore.specialTopiccontent"></VideoCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue'
import { useHomeStore } from '../../../store/home'
const HomeStore = useHomeStore()
let Loading = ref(false)
onMounted(() => {
    getSpecialTopic()
})
const getSpecialTopic = async () => {
    Loading.value = true
    await HomeStore.GetSpecialTopicList({ column: 'specialTopic', pageNum: 0 })
    Loading.value = false
}
</script>

<style scoped>

</style>