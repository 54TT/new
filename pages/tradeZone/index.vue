<template>
	<view class="tradeZoneContent">
		<div class="topBox">
			<div class="left">
				<img :src="TradeZoneThree" alt="" class="img" />
				<img :src="Next" alt="" class="poImg" @click="goAmount" />
				<div class="content">
					<p class="text">账户余额</p>
					<p class="num">7980</p>
				</div>
			</div>
			<div class="right">
				<div class="top" v-for="(i, index) in topRightList" :key="index">
					<img :src="TradeZoneOne" alt="" class="img" />
					<div class="content">
						<p>{{ i.text }}</p>
						<img :src="Next" alt="" class="poImg" @click="goOrder(i.his)" />
					</div>
				</div>
			</div>
		</div>
	</view>
	<Tarbar />
</template>

<script setup>
import TradeZoneThree from '/static/tradeZoneThree.png';
import TradeZoneOne from '/static/tradeZoneTopOne.png';
import TradeZoneTwo from '/static/tradeZoneTwo.png';
import Next from '/static/next.png';
const topRightList = [
	{ img: TradeZoneOne, text: '贸易进口区', his: '' },
	{ img: TradeZoneTwo, text: '历史订单', his: '' }
];

const goAmount = () => {};
const goOrder = (url) => {};
</script>

<style>
@import url('./index.scss');
</style>
