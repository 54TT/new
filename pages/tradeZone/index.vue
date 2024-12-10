<template>
	<view class="tradeZoneContent">
		<div class="topBox">
			<div class="left">
				<image :src="TradeZoneThree" alt="" class="img" />
				<image :src="Next" alt="" class="poImg" @click="goAmount" />
				<div class="content">
					<p class="text">账户余额</p>
					<p class="num">7980</p>
				</div>
			</div>
			<div class="right">
				<div class="top" v-for="(i, index) in topRightList" :key="index">
					<image :src="TradeZoneOne" alt="" class="img" />
					<div class="content">
						<p>{{ i.text }}</p>
						<image :src="Next" alt="" class="poImg" @click="goOrder(i.his)" />
					</div>
				</div>
			</div>
		</div>
		<div class="bagBox">
			<div class="bag" v-for="(i, index) in bagList" :key="index">
				<div class="top">
					<image :src="MoreBack" class="img" alt="" />
					<image :src="Clock" class="Clock" alt="" />
					<div class="content">上合数据金融包</div>
				</div>
				<div class="bot">
					<div class="text">
						<div class="item">
							<p class="text">金额</p>
							<p class="num">{{ i.amount }}CNY</p>
						</div>
						<div class="item">
							<p class="text">日释放</p>
							<p class="num">{{ i.get }}CNY</p>
						</div>
						<div class="item">
							<p class="text">周期</p>
							<p class="num">{{ i.date }}CNY</p>
						</div>
						<div class="item">
							<p class="text">进度</p>
							<p class="num">{{ i.schedule }}CNY</p>
						</div>
					</div>
					<div class="enter">
						<image :src="i.img" alt="" class="img" />
						<p class="buy" @click="goBuy(index)">购买</p>
					</div>
				</div>
			</div>
		</div>

		<uni-popup ref="popup" class="tradeZonePopupBox" background-color="#fff" @change="changePopup">
			<view class="popup-content">
				<p class="title">购买确认</p>
				<p class="text">
					您当前正在进行购买
					<span>上合金融数据包</span>
					请确认？
				</p>
				<div class="content">
					<p @click="cancel">取消</p>
					<p class="sure" @click="sure">确认</p>
				</div>
			</view>
		</uni-popup>
		<TradeModal :show="show" :change="enter" />
	</view>
	<Tarbar />
</template>

<script setup>
import { ref } from 'vue';
import TradeZoneThree from '@/static/tradeZoneThree.png';
import TradeZoneOne from '@/static/tradeZoneTopOne.png';
import TradeZoneTwo from '@/static/tradeZoneTwo.png';
import MoreBack from '@/static/moreBack.png';
import Clock from '@/static/clock.png';
import Next from '@/static/next.png';
import LongLine from '@/static/longLine.png';
import ShortLine from '@/static/shortLine.png';
import TradeModal from '@/components/TradeModal/index.vue';
const popup = ref();
const show = ref(false);
const topRightList = [
	{ img: TradeZoneOne, text: '贸易进口区', his: '' },
	{ img: TradeZoneTwo, text: '历史订单', his: '/pages/tradeZone/components/historyTrade' }
];
const bagList = [
	{ schedule: '46%', get: '49', date: '22', amount: '23', img: LongLine },
	{ schedule: '46%', get: '32', date: '34', amount: '41', img: ShortLine },
	{ schedule: '46%', get: '64', date: '66', amount: '43', img: LongLine },
	{ schedule: '46%', get: '63', date: '66', amount: '22', img: ShortLine }
];

const enter = () => {
	show.value = !show.value;
};

const cancel = () => {
	popup.value.close();
};
const sure = () => {
	popup.value.close();
	enter();
};
const goBuy = (i) => {
	popup.value.open('center');
};

const changePopup = (e) => {
	console.log(e);
};

const goAmount = () => {};
const goOrder = (url) => {
	if (url) {
		uni.navigateTo({
			url: url
		});
	}
};
</script>

<style lang="scss">
@import url('./index.scss');
</style>
