<template>
	<view class="searchBox">
		<image src="@/static/combine.svg" alt="" class="all" :style="{ display: hide === 'true' ? 'none' : 'block' }" />
		<div class="search">
			<image src="@/static/search.svg" alt="" class="img" />
			<uni-easyinput errorMessage class="input" v-model="value" focus placeholder="搜索" @input="input"></uni-easyinput>
		</div>
	</view>
</template>
<script setup>
import { ref, defineProps } from 'vue';
const value = ref('');
const { hide } = defineProps({
	hide: 'true' // 定义要接收的参数
});

console.log(hide);
console.log(true);
const input = (e) => {
	console.log('输入内容：', e);
};
</script>

<style lang="scss">
@import url('./index.scss');
</style>
