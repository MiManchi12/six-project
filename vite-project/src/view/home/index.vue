<template>
    <div class="homeWrapper">
        <Header></Header>
        <div class="Carousel">
            <el-carousel :interval="3000" height="460px">
                <el-carousel-item v-for="item in 5" :key="item">
                    <img src="https://rs.dance365.com/photo/1644459379211.jpg?imageView2/0/w/2000/h/1200/format/webp/ignore-error/1" alt="" style="width:1200px; height:460px">
                    <h3 text="2xl" justify="center">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 导航 -->
		<div class="nav-container">
			<div class="nav">
				<div style="margin-left:335px;">
					<router-link to="/home/resource/recommend" active-class="active">
						推荐
					</router-link>
					<router-link to="/home/resource/original" active-class="active">作品</router-link>
					<router-link to="/home/resource/course" active-class="active">教程</router-link>
					<router-link to="/home/resource/specialTopic" active-class="active">专题</router-link>
					<router-link to="/home/resource/information" active-class="active">动态</router-link>
					<router-link to="/home/resource/attention" active-class="active">关注</router-link>
				</div>
				<div class="hobbies">
					选择兴趣技能
				</div>
			</div>
		</div>
        <VideoCard></VideoCard>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import VideoCard from '../../components/VideoCard/VideoCard.vue';
export default {
    name: "Home",
    components: { VideoCard }
}
</script>

<style scoped>
.Carousel {
    margin: 0 auto;
    margin-top: 20px;
    width: 1200px;
}
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

/* nav开始 */
.nav .active {
	color: black;
	border-bottom: 3px solid #000;
}

.nav {
	height: 80px;
	display: flex;
	justify-content: space-between;
	line-height: 80px;
	width: 1200px;
	margin: 0px auto;
}

.nav a {
	display: inline-block;
	width: 40px;
	height: 61px;
	padding: 0 4px;
	margin: 0 20px;
	color: #7d8090;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
}

.nav a:hover {
	color: black;
}
</style>