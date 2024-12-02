<template>
	<view class="bottomBox">
		<view class="tabItem" v-for="item in tabList" :key="item.key" @click="switchTab(item.pagePath, item.key)">
			<img :class="{ imgs: true, tradeImg: item.key === 'trade' }" :src="[updateMore === item.key ? item.selectedIconPath : item.iconPath]" />
			<img :class="{ hideImg: true, hideMoreImg: item.key === 'trade' }" :src="item.iconPath" />
			<p class="text">{{ item.name }}</p>
		</view>
	</view>
</template>
<script setup>
// import { onShow } from '@dcloudio/uni-app';
import Home from '/static/home.svg';
import HomeActive from '/static/homeActive.svg';
import Assets from '/static/assets.svg';
import AssetsActive from '/static/assetsActive.svg';
import Finance from '/static/finance.svg';
import FinanceActive from '/static/financeActive.svg';
import Quotes from '/static/quotes.svg';
import QuotesActive from '/static/quotesActive.svg';
import Trade from '/static/trade.svg';
const more = uni.getStorageSync('active');
const updateMore = more ? more : 'home';
const tabList = [
	{
		pagePath: '/pages/index/index',
		state: true,
		iconPath: Home,
		selectedIconPath: HomeActive,
		name: '首页',
		key: 'home'
	},
	{
		pagePath: '/pages/quotes/index',
		state: false,
		iconPath: Quotes,
		selectedIconPath: QuotesActive,
		name: '行情',
		key: 'quotes'
	},
	{
		pagePath: '/pages/trade/index',
		state: false,
		iconPath: Trade,
		selectedIconPath: Trade,
		name: '交易',
		key: 'trade'
	},
	{
		pagePath: '/pages/finance/index',
		state: false,
		iconPath: Finance,
		selectedIconPath: FinanceActive,
		name: '金融',
		key: 'finance'
	},
	{
		pagePath: '/pages/assets/index',
		state: false,
		iconPath: Assets,
		selectedIconPath: AssetsActive,
		name: '资产',
		key: 'assets'
	}
];
const switchTab = (pagePath, key) => {
	uni.setStorageSync('active', key);
	uni.switchTab({
		url: pagePath
	});
};
// const getRouter = async () => {
// 	const data = await getCurrentPages()
// 	const currentPage = data[data.length - 1];
// 	const route = currentPage.route;
// }
</script>

<style>
@import url('./index.scss');
</style>
