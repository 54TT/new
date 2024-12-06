<template>
	<view class="orderItemBox" :style="{ height: height }">
		<div class="moreBox" v-for="(i, index) in orderParams" :key="index">
			<div class="top">
				<p clas="niu">超级加速包</p>
				<p class="loading">{{ i.status ? '已结束' : '进行中' }}</p>
			</div>
			<div class="content">
				<div class="left">
					<img :src="HistoryOrderBack" alt="" class="img" />
					<div class="textMore" style="color: rgba(17, 17, 17, 0.4)">
						<p>开始时间</p>
						<p>结束时间</p>
						<p>价格</p>
						<p>5天释放</p>
					</div>
				</div>
				<div class="textMore" style="text-align: right; color: #111111">
					<p>{{ i.start ? i.start : '--' }}</p>
					<p>{{ i.end ? i.end : '--' }}</p>
					<p>{{ i.price }} CNY</p>
					<p>{{ i.get }} CNY</p>
				</div>
			</div>
		</div>
	</view>
</template>
<script setup>
import HistoryOrderBack from '/static/historyOrderBack.png';
import { defineProps } from 'vue';

const { orderParams, height } = defineProps({
	orderParams: Array, // 定义要接收的参数
	height: String
});
</script>

<style>
@import url('./index.scss');
</style>
