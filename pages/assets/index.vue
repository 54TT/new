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
		<div class="tabName">
			<List :params="virtualList" />
		</div>
	</view>
	<Tarbar />
</template>
<script setup>
import { ref } from 'vue';
import List from '../../components/ScrollList/index';
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
const virtualList = [
	{ name: '比特币', enName: 'BTC', price: '234.323', flux: '+10.423' },
	{ name: '以太坊', enName: 'ETH', price: '4352.21312', flux: '0' },
	{ name: '索拉纳', enName: 'SOL', price: '2.4', flux: '-5' },
	{ name: '币安币', enName: 'BNB', price: '0.00005', flux: '+0.2' },
	{ name: '波场', enName: 'TRX', price: '32423', flux: '+324' },
	{ name: '瑞波币', enName: 'XRP', price: '353.443', flux: '+13424.3343' },
	{ name: '狗狗币', enName: 'DOGE', price: '-1.775', flux: '-132.24' },
	{ name: '雪崩币', enName: 'AVAX', price: '1', flux: '232' },
	{ name: '吨', enName: 'TON', price: '4324', flux: '2' },
	{ name: '始币', enName: 'SHIB', price: '53', flux: '3' },
	{ name: '隋', enName: 'SUI', price: '43', flux: '4' },
	{ name: '佩佩', enName: 'PEPE', price: '5343', flux: '5' }
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
