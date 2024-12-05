<template>
	<view class="addOptionalBox">
		<p class="title"></p>
		<div class="itemBox">
			<div class="token" v-for="(i, index) in tokenList" :key="index">
				<div class="left">
					<p class="name">
						<span class="m">{{ i.name }}</span>
						<span class="u">/USDT</span>
					</p>
					<p class="allName">{{ i.allName }}</p>
				</div>
				<img class="right" src="/static/selected.svg" alt="" />
			</div>
		</div>
		<div class="add">添加至自选</div>
	</view>
</template>

<script setup>
const tokenList = [
	{ name: 'BTC', allName: 'Bitcoin' },
	{ name: 'BTC', allName: 'Bitcoin' },
	{ name: 'BTC', allName: 'Bitcoin' },
	{ name: 'BTC', allName: 'Bitcoin' },
	{ name: 'BTC', allName: 'Bitcoin' },
	{ name: 'BTC', allName: 'Bitcoin' },
	{ name: 'BTC', allName: 'Bitcoin' }
];
</script>

<style>
@import url('./index.scss');
</style>
