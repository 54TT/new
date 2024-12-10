<template>
	<view class="historyTradeBox">
		<div class="topBox">
			<TopBack text="历史记录" url="/pages/tradeZone/index" isTabbar="true" />
			<div class="optionBox">
				<div class="item" v-for="i in option" :key="i.key" @click="changeKey(i.key)">
					<image :src="i.img" alt="" class="img" />
					<p :style="{ color: select === i.key ? '#FFFFFF' : 'rgba(255,255,255,0.5)' }">{{ i.text }}</p>
				</div>
			</div>
		</div>
		<div class="listBox">
			<Order :orderParams="orderParams" height="calc(100vh - 125px)" :status="select === 'history' ? 'tradeZoneHistory' : 'tradeZoneIncome'" />
		</div>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import TopBack from '/components/TopBack/index.vue';
import Order from '/components/Order/index.vue';
import OptionLeft from '@/static/optionLeft.png';
import OptionRight from '@/static/optionRight.png';
const orderParams = [
	{ status: true, start: '2024-08-30', end: '', price: '0', get: '230' },
	{ status: true, start: '2024-08-30', end: '', price: '0', get: '230' },
	{ status: false, start: '', end: '2024-08-30', price: '0', get: '230' },
	{ status: true, start: '2024-08-30', end: '', price: '0', get: '230' },
	{ status: true, start: '2024-08-30', end: '2024-08-30', price: '0', get: '230' }
];
const option = [
	{ text: '历史订单', img: OptionLeft, key: 'history' },
	{ text: '团队收益', img: OptionRight, key: 'income' }
];
const select = ref('history');

const changeKey = (key) => {
	select.value = key;
};
</script>

<style lang="scss">
@import url('./index.scss');
</style>
