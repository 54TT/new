<template>
	<view class="assetsContent">
		<div class="topBox">
			<div class="center">
				<img :src="AssetsTopBack" alt="" class="img" />
				<div class="content">
					<p class="title">累计已签到天数</p>
					<div class="sign">
						<div class="left">
							<img :src="AssetsTopBackJian" alt="" class="img" />
							<p class="text">12</p>
						</div>
						<div class="right">签到</div>
					</div>
				</div>
			</div>
		</div>

		<div class="assetsBox">
			<div class="title">
				<p class="ch">订单列表</p>
				<p class="en">order list</p>
			</div>

			<div class="amount">
				<img :src="AmountBack" alt="" class="img" />
				<div class="content">
					<p class="text">可提现余额</p>
					<p class="num">40000.00</p>
				</div>
			</div>
		</div>

		<div class="directions">
			<div class="item" v-for="(i, index) in directionsList" :key="index">
				<p class="text">{{ i.text }}</p>
				<p class="num">{{ i.num }}</p>
			</div>
		</div>

		<div class="oprate">
			<p @click="goTopUp">充值</p>
			<p @click="withdrawCash">提现</p>
			<p class="wid" @click="transfer">转账</p>
		</div>
	</view>
	<Tarbar />
</template>

<script setup>
import AssetsTopBack from '/static/assetsTopBack.png';
import AmountBack from '/static/amountBack.png';
import AssetsTopBackJian from '/static/assetsTopBackJian.png';

const directionsList = [
	{ text: '债务基本余额', num: '40000.00' },
	{ text: 'CIPS币余额', num: '40000.00' },
	{ text: '节点补贴', num: '40000.00' },
	{ text: '签到参会补贴', num: '40000.00' },
	{ text: '账户余额', num: '40000.00' },
	{ text: '节点数据值', num: '232' },
	{ text: '上合节点返本余额', num: '14232' },
	{ text: '节点修复钱包', num: '10' }
];

const withdrawCash = () => {};

const transfer = () => {};

const goTopUp = () => {
	uni.navigateTo({
		url: '/pages/assets/components/topUp' // 路径是相对于根目录的
	});
};
</script>

<style>
@import url('./index.scss');
</style>
