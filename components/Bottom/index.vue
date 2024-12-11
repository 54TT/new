<template>
	<view class="bottomBox">
		<view class="tabItem" v-for="item in tabList" :key="item.key" @click="switchTab(item.pagePath, item.key)">
			<div :class="{ showBack: item.key === 'node' }">
				<image class="imgs" :src="current === item.pagePath ? item.selectedIconPath : item.iconPath" />
			</div>
			<image :class="{ hideImg: true, hideMoreImg: item.key === 'node' }" :src="item.iconPath" />
			<p class="text" :style="{ color: current === item.pagePath ? '#024DF6' : 'rgba(17, 17, 17, 0.4)' }">{{ item.name }}</p>
		</view>
	</view>
</template>
<script setup>
import { onShow } from '@dcloudio/uni-app';
import { ref } from 'vue';
import Home from '@/static/home.png';
import HomeActive from '@/static/homeActive.png';
import Assets from '@/static/assets.png';
import AssetsActive from '@/static/assetsActive.png';
import My from '@/static/my.png';
import MyActive from '@/static/myActive.png';
import TradeZone from '@/static/tradeZone.png';
import TradeZoneActive from '@/static/tradeZoneActive.png';
import Node from '@/static/node.png';
const current = ref('pages/index/index');
const tabList = [
	{
		pagePath: 'pages/index/index',
		state: true,
		iconPath: Home,
		selectedIconPath: HomeActive,
		name: '首页',
		key: 'home'
	},
	{
		pagePath: 'pages/tradeZone/index',
		state: false,
		iconPath: TradeZone,
		selectedIconPath: TradeZoneActive,
		name: '贸易区',
		key: 'tradeZone'
	},
	{
		pagePath: 'pages/node/index',
		state: false,
		iconPath: Node,
		selectedIconPath: Node,
		name: '上合节点',
		key: 'node'
	},
	{
		pagePath: 'pages/assets/index',
		state: false,
		iconPath: Assets,
		selectedIconPath: AssetsActive,
		name: '资产',
		key: 'assets'
	},
	{
		pagePath: 'pages/my/index',
		state: false,
		iconPath: My,
		selectedIconPath: MyActive,
		name: '我的',
		key: 'my'
	}
];

const switchTab = (pagePath, key) => {
	uni.setStorageSync('active', key);
	uni.switchTab({
		url: '/' + pagePath
	});
};
const getRouter = async () => {
	const data = await getCurrentPages();
	const currentPage = data[data.length - 1];
	const route = currentPage.route;
	current.value = route;
};
onShow(() => {
	getRouter();
});
</script>

<style lang="scss">
@import url('./index.scss');
</style>
