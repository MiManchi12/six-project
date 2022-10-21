import { createApp } from 'vue'
import App from './App.vue'
//import pinia from './stores'
import router from './router/index'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/index.vue'
import VideoCard from './components/VideoCard/VideoCard.vue'
import './style.css'
import 'element-plus/dist/index.css'
//引入element-plus组件库的样式和中文
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
// 导入视频组件
import "vue3-video-play/dist/style.css";
import  vue3VideoPlay from "vue3-video-play";


const app = createApp(App)
app.component('Header', Header)
app.component('Footer', Footer)
app.component('VideoCard', VideoCard)
//挂载
app.use(router).use(vue3VideoPlay)
.use(ElementPlus,{
    locale: zhCn,
})
.mount('#app')

