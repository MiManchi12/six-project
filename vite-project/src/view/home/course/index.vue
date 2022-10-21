<template>
    <div>
        <VideoCard :content="HomeStore.content"></VideoCard>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useHomeStore } from '../../../store/home'

const HomeStore = useHomeStore()


onMounted(() => {
    HomeStore.getRecommendList()
})
</script>

<style scoped>

</style>