<template>
	<view class="historyOrderBox">
		<div class="topBackMore">
			<TopBack text="历史订单" url="/pages/node/index" isTabbar="true" />
		</div>
		<div class="orderListBox">
			<OrderList :orderParams="orderParams" height="calc(100% - 70px)" status="node" />
		</div>
	</view>
</template>

<script setup>
import TopBack from '/components/TopBack/index.vue';
import OrderList from '/components/Order/index.vue';
const orderParams = [
	{ status: true, start: '2024-08-30', end: '', price: '0', get: '230' },
	{ status: true, start: '2024-08-30', end: '', price: '0', get: '230' },
	{ status: false, start: '', end: '2024-08-30', price: '0', get: '230' },
	{ status: true, start: '2024-08-30', end: '', price: '0', get: '230' },
	{ status: true, start: '2024-08-30', end: '2024-08-30', price: '0', get: '230' }
];
</script>

<style>
@import url('./index.scss');
</style>