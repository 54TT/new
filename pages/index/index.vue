<template>
	<view class="content">
		<!-- 搜索 -->
		<div class="searchBox">
			<Search hide="false" />
		</div>
		<!-- < !-- 是否登录 -->
		<Login status="home" :getLoginStatus="getLoginStatus" :loginStatus="loginStatus" />
		<!-- 广告轮播 -->
		<div class="swiperBoxMore">
			<Swiper :info="info" :clickItem="clickSwiper" moreImg="/static/mask.svg" />
		</div>
		<!-- 选项 -->
		<div class="tabBoxMore">
			<Tab :option="tokenOption" :selectOption="selectOption" :active="active" />
		</div>

		<!-- 数据列表   登录之后的 -->
		<div class="login" v-if="loginStatus">
			<div class="list">
				<List :params="virtualList" height="200px" />
			</div>
		</div>
		<!-- 添加自选 -->
		<div class="noLogin" v-else>
			<AddOptional />
		</div>
		<!-- 公告 -->
		<div class="announcement">
			<p class="text">公告</p>
			<div class="itemBox">
				<div class="item" v-for="item in post" :key="item.key" @click="clickPost(item)">
					<p class="text">{{ item.text }}</p>
					<p class="time">{{ item.time }}</p>
				</div>
			</div>
			<div class="many">查看更多</div>
		</div>
	</view>
	<Tarbar />
</template>

<script setup>
import { ref } from 'vue';
import List from '/components/ScrollList/index';
import AddOptional from './components/AddOptional.vue';
import Search from '/components/Search/index';
import Swiper from '/components/Swiper/index';
import Login from '/components/LoginOrMoney/index';
import Tab from '/components/Tab/index';
import { virtualList, info, post, tokenOption } from '/utils/type.js';
// 登录状态
const loginStatus = ref(false);

const clickSwiper = (i) => {
	console.log(i);
};

const getLoginStatus = (value) => {
	loginStatus.value = value;
};
const clickPost = (i) => {};
const selectOption = ref('collect');

const active = (key) => {
	selectOption.value = key;
};
</script>

<style scoped>
@import url('./index.scss');
</style>
