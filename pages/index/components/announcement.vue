<template>
	<view class="announcementBox">
		<TopBack text="公告" url="/pages/index/index" isTabbar="true" />
		<div class="item" @click="goDetail(index)" v-for="(i, index) in announcementList" :key="index">
			<p class="text">{{ i.text }}</p>
			<p class="time">{{ i.time }}</p>
		</div>
	</view>
</template>

<script setup>
import TopBack from '/components/TopBack/index.vue';
import { announcementList } from '/utils/type.js';
const goDetail = (index) => {
	console.log(index);
	uni.navigateTo({
		url: '/pages/index/components/announcementDetail'
	});
};
</script>

<style lang="scss">
@import url('./index.scss');
</style>
