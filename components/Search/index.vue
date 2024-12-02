<template>
	<view class="searchBox">
		<img src="/static/combine.svg" alt="" class="all" />
		<div class="search">
			<img src="/static/search.svg" alt="" class="img" />
			<uni-easyinput errorMessage class="input" v-model="value" focus placeholder="搜索" @input="input"></uni-easyinput>
		</div>
	</view>
</template>
<script setup>
import { ref, defineProps } from 'vue';
const value = ref('');
const { hide } = defineProps({
	hide: true // 定义要接收的参数
});

console.log(hide);
const input = (e) => {
	console.log('输入内容：', e);
};
</script>

<style>
@import url('./index.scss');
</style>
