<template>
	<div class="homeWrapper">
		<Header></Header>
		<!-- 轮播图 -->
		<div class="Carousel">
			<el-carousel :interval="3000" height="460px">
				<el-carousel-item>
					<img src="https://rs.dance365.com/photo/1666231089711.jpeg?imageView2/0/w/2000/h/1200/format/webp/ignore-error/1"
						alt="" style="width:1200px; height:460px">
				</el-carousel-item>
				<el-carousel-item>
					<img src="https://rs.dance365.com/photo/1665720633949.jpeg?imageView2/0/w/2000/h/1200/format/webp/ignore-error/1"
						alt="" style="width:1200px; height:460px">
				</el-carousel-item>
				<el-carousel-item>
					<img src="https://rs.dance365.com/photo/1664531134723.jpg?imageView2/0/w/2000/h/1200/format/webp/ignore-error/1"
						alt="" style="width:1200px; height:460px">
				</el-carousel-item>
				<el-carousel-item>
					<img src="https://rs.dance365.com/photo/1644459379211.jpg?imageView2/0/w/2000/h/1200/format/webp/ignore-error/1"
						alt="" style="width:1200px; height:460px">
				</el-carousel-item>
				<el-carousel-item>
					<img src="https://rs.dance365.com/photo/1644459406488.jpg?imageView2/0/w/2000/h/1200/format/webp/ignore-error/1"
						alt="" style="width:1200px; height:460px">
				</el-carousel-item>
				<el-carousel-item>
					<img src="https://rs.dance365.com/photo/1644459452660.jpg?imageView2/0/w/2000/h/1200/format/webp/ignore-error/1"
						alt="" style="width:1200px; height:460px">
				</el-carousel-item>
			</el-carousel>
		</div>
		<!-- 导航 -->
		<div class="nav-container">
			<div class="nav">
				<div style="margin-left:335px;">
					<router-link to="/home/recommend" active-class="active">推荐</router-link>
					<router-link to="/home/original" active-class="active">作品</router-link>
					<router-link to="/home/course" active-class="active">教程</router-link>
					<router-link to="/home/specialTopic" active-class="active">专题</router-link>
					<router-link to="/home/information" active-class="active">动态</router-link>
					<router-link to="/home/attention" active-class="active">关注</router-link>
				</div>
				<div class="hobbies" @click="showDialog">
					<el-icon style="vertical-align: -20%">
						<Grid />
					</el-icon>
					<span>选择兴趣技能</span>
				</div>
				<!-- 选择兴趣爱好对话框 -->
			</div>
			<el-dialog v-model="dialogVisible" :title="searchData.length ? '搜索结果' : `选择我的兴趣技能 ${hobbyArr.length} / 7` "
				width="1040px" :before-close="handleClose">
				<!-- <div>111222</div> -->
				<!-- 搜索输入框区域 -->
				<el-form :inline="true">
					<el-form-item>
						<el-input @input="searchResult" v-model="searchKeyword" style="width: 300px"
							placeholder="搜索兴趣技能" size="large"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button :disabled="!searchKeyword.trim().length" style="width: 80px" @click="searchResult">搜索
						</el-button>
					</el-form-item>
				</el-form>

				<div v-if="!searchData.length">
					<!-- 如果hobbyArr有值，那么就渲染，如果没有就不渲染 -->
					<ul v-show="hobbyArr.length" class="hobby-arr">
						<li class="hobby-item" v-for="selHobby in hobbyArr" :key="selHobby.id">
							{{ selHobby.name }}
							<span class="close-icon" @click="delHobby(selHobby)">✖</span>
						</li>
					</ul>
					<!-- 推荐兴趣技能列表 -->
					<div class="mb-10">推荐兴趣技能</div>
					<div v-infinite-scroll="load" :infinite-scroll-immediate="false" class="hobby-list-containr">
						<ul class="recommend-hobby-list mt-20">
							<li class="hobby-item" v-for="hobby in allHobbyArr" :key="hobby.id" :title="hobby.name"
								@click="addHobby(hobby)">
								{{ hobby.name }}
								<span v-show="hobby.isSelect" class="select-icon">✔</span>
							</li>
						</ul>
					</div>
				</div>

				<!-- 搜索结果展示的对话框 -->
				<div v-else>
					<div class="mb-20">搜索结果</div>
					<ul class="search-reuslt">
						<li v-for="data in searchData" :key="data.id" @click="addHobby(data)">
							<h4>{{ data.name }}</h4>
							<p>{{ data.description }}</p>
						</li>
					</ul>
				</div>


				<!-- 取消和确定按钮 -->
				<template #footer>
					<span class="dialog-footer" v-if="!searchData.length">
						<el-button plain class="dialog-btn" @click="onCancel">取消</el-button>
						<el-button color="#F93684" type="primary" @click="onSave">确定</el-button>
					</span>
					<span v-else>
						<el-button type="success" @click="goBack">返回</el-button>
					</span>
				</template>
			</el-dialog>
		</div>
		<router-view></router-view>
		<Footer></Footer>

	</div>

</template>



<script lang="ts" setup>
// 引入el-icon图标
import { Grid, Search } from '@element-plus/icons';
import { onMounted, ref, nextTick } from 'vue';
import { reqGetInterest } from '@/api/home/index'
import { getHobbyListData, getSearchData } from '@/api/hobby';
import { useRoute } from 'vue-router';
const route = useRoute();


const addSearchRes = (data: any) => {
	console.log(data);
}

// 点击回到顶部按钮平滑回到顶部
const smoothBackTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}


// 二级菜单元素
const menuRef = ref();
const isShowBackIcon = ref(false);

// 当页面滚动时触发的回调
window.onscroll = () => {
	if (route.path !== '/home/recommend') {
		return;
	}
	// 获取二级菜单元素相对于视口的顶部距离
	const { top } = menuRef.value.getBoundingClientRect();
	// 如果顶部距离为0，添加阴影，反之就不添加
	if (!top) {
		menuRef.value.style.boxShadow = '0 2px 10px rgba(0, 0, 0, .2)';
		isShowBackIcon.value = true;
	} else {
		menuRef.value.style.boxShadow = 'none';
		isShowBackIcon.value = false;
	}
}


// 是否显示对话框的布尔值
// 是否选中兴趣标签的布尔值
const isSelect = ref(false);
// 用来选中的渲染兴趣列表的数组
const hobbyArr = ref<any[]>([]);
// 用于中间传递已选中兴趣列表的数组的数据
const passHobbyArr = ref<any[]>([]);
// 用来渲染全部兴趣列表的数组
const allHobbyArr = ref<any[]>([]);
const searchKeyword = ref('');  // 搜索的关键字
// 保存搜索的数据
const searchData = ref<any[]>([]);

const pageNum = ref(1);
const PageSize = ref(20);

// 搜索框实时输入的回调
const searchResult = async () => {
	if (!searchKeyword.value.trim().length) {
		return;
	}

	// 根据输入的关键字发送请求获取数据
	try {
		const { data } = await getSearchData(searchKeyword.value.trim());
		data.forEach((item: any) => {
			item.isSelect = false;
		})
		searchData.value = data;
	} catch (error) {
		console.error(error);
	}
}

// 返回兴趣标签列表页的回调
const goBack = () => {
	// 清空搜索结果数组和关键字
	searchData.value = [];
	searchKeyword.value = '';
};

// 关闭对话框之前的回调
const handleClose = (done: () => void) => {
	// 关闭之前清除对话框内容
	onCancel();
	done();
}


// 获取兴趣标签列表数据的回调
const getHobbyListInfo = async (num: number = 0, size: number = 40) => {
	try {
		const { content } = await getHobbyListData(num, size);
		// 获取数据后对每个数据中的值添加一个是否选中的状态
		content.forEach((item: any, index: number) => {
			item.isSelect = false;
		})
		allHobbyArr.value.push(...content);
	} catch (error) {
		console.error(error);
	}
}

// 显示对话框的回调
const showDialog = async () => {
	dialogVisible.value = true;
	hobbyArr.value = [...passHobbyArr.value];
	// 发送请求获取数据用于渲染列表
	await getHobbyListInfo();
	// 双层遍历找到当前已选择兴趣标签数组中对应的数据,把数据的选中状态改变
	hobbyArr.value.forEach((item: any, index: number) => {
		allHobbyArr.value.forEach((item2: any, index: number) => {
			if (item.name === item2.name) {
				item2.isSelect = true;
			}
		})
	})
}

// 滚动的回调
const load = () => {
	// 走到这个函数表示滚动条到底了
	// 发送请求获取下一页的数据
	getHobbyListInfo(++pageNum.value, PageSize.value);
}

// 取消按钮的回调
const onCancel = () => {
	// 清除对话框全部兴趣列表内容
	allHobbyArr.value = [];
	hobbyArr.value = [];
	// 关闭对话框
	dialogVisible.value = false;
}

// 确定按钮的回调
const onSave = () => {
	// 清除全部兴趣标签数组 和关闭对话框
	allHobbyArr.value = [];
	// 点击保存按钮的时候另存一份
	passHobbyArr.value = hobbyArr.value;
	hobbyArr.value = [];
	// 关闭对话框
	dialogVisible.value = false;
}

// 添加兴趣标签
const addHobby = (hobby: any) => {
	if (hobbyArr.value.length === 7 && !hobby.isSelect) {
		alert('最多只能添加7个');
		return
	}
	if (hobby.isSelect) {
		// console.log('删除', hobby.isSelect);
		// 修改当前点击的兴趣标签的选中状态
		// hobby.isSelect = false;
		// 删除当前点击的兴趣标签
		hobbyArr.value.forEach((item: any, index: number) => {
			if (item.name === hobby.name) {
				hobbyArr.value.splice(index, 1);
			}
		})
		const allItem = allHobbyArr.value.find(item => item.name === hobby.name);
		if (allItem) {
			allItem.isSelect = false;
		}
	} else {
		// 针对搜索功能判断添加是否重复
		const isRepeat = hobbyArr.value.findIndex(item => item.name === hobby.name);
		if (isRepeat >= 0) {
			alert('已添加');
			return;
		}
		// console.log('增加', hobby.isSelect);
		// 修改当前点击的兴趣标签的选中状态
		hobby.isSelect = true;
		// 向 hobbyArr 数组中添加选中的兴趣标签
		hobbyArr.value.push(hobby);
		// 显示兴趣列表页面
		searchData.value = [];
		// 清空输入框内容
		searchKeyword.value = '';
	}
}


// 删除兴趣标签的回调
const delHobby = (selHobby: any) => {
	addHobby(selHobby);
}

//展示hobby模态框
const dialogVisible = ref(false);
let interest = ref([])
onMounted(() => {
	getInterest()
})
const getInterest = async () => {
	const result = await reqGetInterest()
	interest.value = result.content
}
</script>
<style scoped lang="less">
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
.hobby-list-containr {
	width: 100%;
	height: 340px;
	// border: 1px solid red;
	overflow: auto;
  }
  
  .hobby-arr,
  .recommend-hobby-list {
	display: flex;
	// padding: 10px 0;
	flex-wrap: wrap;
  
	// 叉号样式
	.close-icon {
	  position: absolute;
	  top: -8px;
	  right: -8px;
	  text-align: center;
	  width: 20px;
	  height: 20px;
	  border-radius: 50%;
	  background-color: #aaa;
	  color: #fff;
	  cursor: pointer;
	}
  
	// 对号样式
	.select-icon {
	  position: absolute;
	  top: -8px;
	  right: -8px;
	  text-align: center;
	  width: 20px;
	  height: 20px;
	  border-radius: 50%;
	  background-color: #F93684;
	  color: #fff;
	  cursor: pointer;
	}
  }
  
  .hobby-item {
	position: relative;
	width: 70px;
	text-align: center;
	border: 1px solid #ddd;
	border-radius: 5px;
	padding: 10px 20px;
	margin: 0 33px 20px 0;
	font-size: 12px;
	color: #000;
	cursor: pointer;
  
  }
  
  .hobby-item:nth-child(7n) {
	margin-right: 0;
  }
  
  .search-reuslt {
	display: flex;
	// justify-content: center;
	flex-wrap: wrap;
  
	li {
	  width: 280px;
	  min-height: 48px;
	  padding: 10px;
	  background-color: #F5F7F9;
	  border-radius: 5px;
	  margin-right: 20px;
	  margin-bottom: 20px;
	  cursor: pointer;
	  &:hover {
		background-color: rgba(0, 0, 0, .1);
	  }
  
	  h4 {
		font-size: 18px;
		color: #999;
		margin-bottom: 4px;
	  }
  
	  p {
		font-size: 16px;
	  }
	}
  
	li:nth-child(3n) {
	  margin-right: 0;
	}
  }
</style>