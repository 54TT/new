<template>
	<view class="content">
		<!-- 搜索 -->
		<div class="searchBox">
			<Search hide="false" />
		</div>
		<!-- < !-- 是否登录 -->
		<Login status="home" />
		<!-- 广告轮播 -->
		<div class="swiperBoxMore">
			<Swiper :info="info" :clickItem="clickSwiper" moreImg="/static/mask.svg" />
		</div>
		<!-- 选项 -->
		<div class="tabBoxMore">
			<Tab :option="option" :selectOption="selectOption" :active="active" />
		</div>
		<div class="FieldBox">
			<p class="left">名称</p>
			<div class="right">
				<p>最新价</p>
				<p class="right">涨跌幅</p>
			</div>
		</div>
		<div style="padding: 0 16px; height: 250px">
			<List :params="virtualList" />
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
import List from '../../components/ScrollList/index';
import Search from '../../components/Search/index';
import Swiper from '../../components/Swiper/index';
import Login from '../../components/LoginOrMoney/index';
import Tab from '../../components/Tab/index';

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
const clickSwiper = (i) => {
	console.log(i);
};
const info = [
	{ key: '1', title: '存币生息1', text: '赚取收益，无惧市场波动 按日结算，随村随取，安全可靠！', go: '立即参与' },
	{ key: '2', title: '存币生息2', text: '赚取收益，无惧市场波动 按日结算，随村随取，安全可靠！', go: '立即参与' },
	{ key: '3', title: '存币生息3', text: '赚取收益，无惧市场波动 按日结算，随村随取，安全可靠！', go: '立即参与' }
];
const post = [
	{ text: '关于上线交易usdt的公告', time: '2024/10/10 12:00', key: '1' },
	{ text: '关于延迟上线盘前合约交易usdt的公告', time: '2024/10/10 12:00', key: '2' },
	{ text: '关于延迟上线盘前合约交易usdt的公告', time: '2024/10/10 12:00', key: '3' }
];

const clickPost = (i) => {};
const selectOption = ref('collect');
const option = [
	{ key: 'collect', name: '自选' },
	{ key: 'mainstream', name: '主流币' },
	{ key: 'popular', name: '热门榜' },
	{ key: 'increase', name: '涨幅榜' },
	{ key: 'new', name: '新币榜' }
];
const active = (key) => {
	selectOption.value = key;
};
</script>

<style scoped>
@import url('./index.scss');
</style>