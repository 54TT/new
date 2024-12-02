<template>
	<view class="loginBox">
		<div class="showMoney" :style="{ marginTop: status === 'home' ? '32px' : '20px' }">
			<p class="title">总资产估值</p>
			<p class="money">
				<span class="left">900.23</span>
				<span class="right">CNY</span>
			</p>
			<div class="operate">
				<p class="left">链上充币</p>
				<p class="right">C2C买币</p>
			</div>
		</div>
		<div class="loginBox">
			<div class="box">
				<img src="/static/hand.svg" alt="" class="img" />
			</div>
			<div class="login">登录/注册</div>
		</div>
	</view>
</template>

<script setup>
import { defineProps } from 'vue';
const { status } = defineProps({
	status: String // 定义要接收的参数
});
</script>

<style>
@import url('./index.scss');
</style>
