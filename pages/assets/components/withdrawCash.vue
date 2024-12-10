<template>
	<view class="withdrawCashBox">
		<TopBack text="提现" url="/pages/assets/index" isTabbar="true" />
		<div class="amount">
			<image :src="AmountBack" alt="" class="img" />
			<div class="content">
				<p class="text">可提现余额</p>
				<p class="num">40000.00</p>
			</div>
		</div>
		<div class="item" v-for="i in inputList" :key="i.key">
			<p class="text">{{ i.text }}</p>
			<input type="text" @input="(e) => changeInput(e, i.key)" class="input" :placeholder="i.pl" placeholder-class="placeholderClass" />
		</div>
		<div class="enter" @click="enter">提现</div>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import TopBack from '/components/TopBack/index.vue';
import AmountBack from '@/static/amountBack.png';
const valueParams = ref({ account: '', card: '', amount: '' });
const inputList = [
	{ text: '支付宝账号', key: 'account', pl: '请输入账号' },
	{ text: '卡号', key: 'card', pl: '请输入卡号' },
	{ text: '金额', key: 'amount', pl: '请输入提现金额' }
];

const changeInput = (e, i) => {
	valueParams.value = { ...valueParams.value, [i]: e.detail.value };
};
const enter = () => {
	console.log(valueParams.value);
};
</script>

<style lang="scss">
@import url('./index.scss');
</style>
