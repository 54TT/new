<template>
	<view class="announcementBox">
		<div class="top">
			<img :src="Back" @click="goBack" alt="" class="img" />
			<span class="text">公告</span>
			<span></span>
		</div>
		<div class="item" @click="goDetail">
			<p class="text">2.0已经上线，请前往升级吧！消息文字两行展示文字两行展示消息文字超过两行全部省约号展示...</p>
			<p class="time">2024-08-30 12:09:00</p>
		</div>
	</view>
</template>

<script setup>
import Back from '/static/goBack.png';
const goBack = () => {
	uni.navigateTo({
		url: '/pages/index/index' // 路径是相对于根目录的
	});
};

const goDetail = () => {
	uni.navigateTo({
		url: '/pages/index/components/announcementDetail' // 路径是相对于根目录的
	});
};
</script>

<style>
@import url('./index.scss');
</style>
