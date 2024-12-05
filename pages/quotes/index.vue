<template>
	<view class="quotesBox">
		<div class="searchBox">
			<Search hide="true" />
		</div>
		<div class="tabBoxMore">
			<Tab :option="quotesOption" :selectOption="selectOption" :active="active" />
		</div>
		<div class="tabName">
			<List :params="virtualList" height="200px" />
		</div>
	</view>
	<Tarbar />
</template>

<script setup>
import { ref } from 'vue';
import List from '/components/ScrollList/index';
import Tab from '/components/Tab/index';
import { virtualList, quotesOption } from '/utils/type.js';
import Search from '/components/Search/index';
const selectOption = ref('overview');

const active = (key) => {
	selectOption.value = key;
};
</script>

<style>
@import url('./index.scss');
</style>
