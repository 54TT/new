<template>
	<view class="assetsBox">
		<Search />
		<div class="tabBoxMore">
			<Tab :option="option" :selectOption="selectOption" :active="active" />
		</div>
		<Login status="assets" />
		<div class="swiperBoxMore">
			<Swiper :clickSwiper="clickSwiper" :info="info" moreImg="/static/MaskGroup.svg" />
		</div>
		<div class="tolenTabBox">
			<Tab :option="tokenOption" :selectOption="selectTokenOption" :active="tokenActive" />
		</div>
		<div class="tabName"></div>
	</view>
	<Tarbar />
</template>
<script setup>
import { ref } from 'vue';
import Swiper from '../../components/Swiper/index';
import Search from '../../components/Search/index';
import Login from '../../components/LoginOrMoney/index';
import Tab from '../../components/Tab/index';
const selectOption = ref('overview');
const selectTokenOption = ref('Optional');
const option = [
	{ key: 'overview', name: '总览' },
	{ key: 'capital', name: '资金账户' },
	{ key: 'trade', name: '交易账户' },
	{ key: 'financial', name: '金融账户' }
];

const tokenOption = [
	{ key: 'Optional', name: '自选' },
	{ key: 'Mainstream', name: '主流币' },
	{ key: 'Popular', name: '热门榜' },
	{ key: 'Gainer', name: '涨幅榜' },
	{ key: 'New', name: '新币榜' }
];
const clickSwiper = (i) => {
	console.log(i);
};
const info = [
	{ key: '1', title: '存币生息1', text: '创造无限可能', go: '立即探索' },
	{ key: '2', title: '存币生息2', text: '创造无限可能', go: '立即探索' },
	{ key: '3', title: '存币生息3', text: '创造无限可能', go: '立即探索' }
];
const active = (key) => {
	selectOption.value = key;
};
const tokenActive = (key) => {
	selectTokenOption.value = key;
};
</script>

<style>
@import url('./index.scss');
</style>
