<template>
	<view class="topUpBox">
		<TopBack text="充值" url="/pages/assets/index" isTabbar="true" />
		<div class="optionBox">
			<p v-for="i in optionList" :key="i.key">{{ i.text }}</p>
		</div>

		<div class="orderList">
			<div :class="{ item: true, activeItem: active === i.key ? true : false }" v-for="i in UnionPayList" :key="i.key" @click="getNumber(i.key)">
				<p class="title">
					<img :src="UnionPay" alt="" />
					<span>银联支付</span>
				</p>
				<p class="text">{{ i.text }}</p>
			</div>
		</div>

		<div class="amountBox">
			<p class="title">充值金额</p>
			<input type="text" class="input" placeholder="请输入充值金额" placeholder-class="placeholderClassBox" />
			<p class="hint">
				*如需线下支付，请点击联系
				<span>在线客服</span>
			</p>
		</div>
		<div class="topUpBoxMore">充值</div>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import TopBack from '/components/TopBack/index.vue';
import WeChat from '/static/unionPay.png';
import UnionPay from '/static/WeChat.png';
const optionList = [
	{ text: '银联', key: 'UnionPay' },
	{ text: '微信', key: 'WeChat' },
	{ text: '支付宝', key: 'Alipay' }
];
const active = ref('');

const UnionPayList = [
	{ text: '单笔：100-10000', key: '1' },
	{ text: '单笔：200-30000', key: '2' },
	{ text: '单笔：300-40000', key: '3' }
];

const getNumber = (i) => {
	if (active.value === i) {
		active.value = '';
	} else {
		active.value = i;
	}
};
</script>

<style>
@import url('./index.scss');
</style>