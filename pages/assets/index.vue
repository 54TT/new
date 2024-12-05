<template>
	<view class="assetsBox">
		<Search />
		<div class="tabBoxMore">
			<Tab :option="accountOption" :selectOption="selectOption" :active="active" />
		</div>
		<Login status="assets" :getLoginStatus="getLoginStatus" :loginStatus="loginStatus" />
		<div class="swiperBoxMore">
			<Swiper :clickSwiper="clickSwiper" :info="info" moreImg="/static/MaskGroup.svg" />
		</div>
		<div class="tolenTabBox">
			<Tab :option="tokenOption" :selectOption="selectTokenOption" :active="tokenActive" />
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
import Swiper from '/components/Swiper/index';
import Search from '/components/Search/index';
import Login from '/components/LoginOrMoney/index';
import Tab from '/components/Tab/index';
import { virtualList, info, tokenOption, accountOption } from '/utils/type.js';
const selectOption = ref('overview');
const loginStatus = ref(false);
const selectTokenOption = ref('Optional');

const getLoginStatus = (value) => {
	loginStatus.value = value;
};
const clickSwiper = (i) => {
	console.log(i);
};

const active = (key) => {
	selectOption.value = key;
};
const tokenActive = (key) => {
	selectTokenOption.value = key;
};
</script>

<style>
@import url('./index.scss');
</style>
