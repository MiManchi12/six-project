<template>
	<div class="homeWrapper">
		<Header></Header>
		<div class="Carousel">
			<el-carousel :interval="3000" height="460px">
				<el-carousel-item v-for="item in 5" :key="item">
					<img src="https://rs.dance365.com/photo/1644459379211.jpg?imageView2/0/w/2000/h/1200/format/webp/ignore-error/1"
						alt="" style="width:1200px; height:460px">
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
				<div class="hobbies" @click="dialogVisible  = true">
					<el-icon style="vertical-align: -20%">
						<Grid />
					</el-icon>
					<span>选择兴趣技能</span>
				</div>
				<el-dialog v-model="dialogVisible" title="选择我的兴趣技能" width="900px">
					<el-input class="search" placeholder="搜索兴趣技能" :prefix-icon="Search"
						 clearable />
					<el-button class="search-btn" type="primary">
						搜索</el-button>
					<el-form label-position="left" label-width="auto" class="mt-60">
						<el-tag class="tag" closable :disable-transitions="false">
							某某舞
						</el-tag>
					</el-form>
					<div class="text">
						推荐兴趣技能
						<span class="span">&nbsp;&nbsp;&nbsp;( {{  }}/7 )</span>
					</div>
					<el-form>
						<div class="hobbylist">
							<el-checkbox-group :max="7">
								<el-checkbox 
								size="large" 
								class="checkbox" border />
							</el-checkbox-group>
						</div>
					</el-form>
					<template #footer>
						<span class="dialog-footer">
							<el-button @click="dialogVisible = false">取消</el-button>
							<el-button type="primary" @click="dialogVisible = false">确认</el-button>
						</span>
					</template>
				</el-dialog>
			</div>
		</div>
		<VideoCard></VideoCard>
		<Footer></Footer>

	</div>

</template>



<script lang="ts" setup>
import { Grid, Search } from '@element-plus/icons'
import { ref } from 'vue'

//展示hobby模态框
const dialogVisible = ref(false)
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

.hobbies {
	margin-left: 0px;
	color: #7d8090;
	cursor: pointer;
}

.dialog-footer button:first-child {
	margin-right: 10px;
}

.search {
	width: 300px;
	height: 40px;
	position: absolute;
	left: 30px;
	border-radius: 4px;
}

.search-btn {
	width: 70px;
	height: 40px;
	position: absolute;
	left: 340px;
}

.tag {
	width: 100px;
	height: 40px;
	text-align: center;
	margin-left: 10px;
	font-size: 15px;
	color: black;
	background-color: #fff;
	border: solid 0.5px #eee;
}

.mt-60 {
	margin-top: 60px;
	text-align: left;
}

.text {
	text-align: left;
	font-size: 16px;
	margin-top: 20px;
	color: black;
}

.span {
	color: #aaa;
}

.hobbylist {
	text-align: left;
	margin-top: 15px;
	margin-left: 10px;
}

.checkbox {
	width: 110px;
	margin-top: 10px;
}
</style>