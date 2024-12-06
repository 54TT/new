<template>
	<view class="PlaceAnOrderBox">
		<div class="top">
			<TopBack text="上合节点下单" url="/pages/node/index" isTabbar="true" />
		</div>
		<div class="contentBox">
			<div class="item" v-for="i in inputList" :key="i.key">
				<p class="text">{{ i.title }}</p>
				<input type="text" class="input" @input="(e) => onChangeInput(e, i.key)" />
			</div>
			<!-- 收货人电话 收货地址  广东省广州市白云区幸福里12号901 -->
			<p class="enter" @click="enter">提交</p>
		</div>

		<uni-popup ref="popup" class="PlaceAnOrderPopupBoxMore" background-color="#fff" @change="changePopup">
			<view class="popup-content">
				<div class="topBox">
					<div class="top">
						<p class="close">X</p>
						<p class="text">请输入交易密码</p>
						<span></span>
					</div>
					<div class="num">88.88 cny</div>
					<div class="kuang">
						<p
							class="num"
							:style="{ borderRadius: index === 0 ? '8px 0 0 8px' : passwordAll.length - 1 === index ? '0 8px 8px 0' : '0' }"
							v-for="(i, index) in passwordAll"
							:key="index"
						>
							<span class="Location">
								{{ i }}
							</span>
						</p>
					</div>
					<p class="password">忘记密码？</p>
				</div>
				<div class="botBox">
					<div
						class="item"
						v-for="(i, index) in phone"
						:style="{ background: i.hide ? 'none' : '#ffffff', boxShadow: i.hide ? 'none' : '0px 1px 0px 0px rgba(0, 0, 0, 0.3)' }"
						:key="index"
						@click="getPhone(i.key)"
					>
						<div class="two" v-if="i.two" :style="{ visibility: i.hide ? 'hidden' : 'visible' }">
							<p class="t">{{ i.number }}</p>
							<p class="t1">{{ i.en }}</p>
						</div>
						<div class="one" v-else>
							<img :src="i.img" alt="" v-if="i.img" />
							<span v-else>{{ i.number }}</span>
						</div>
					</div>
				</div>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import TopBack from '/components/TopBack/index.vue';
import Close from '/static/close.png';
const params = ref({ person: '', phone: '', address: '' });
const popup = ref();
const onChangeInput = (i, e) => {
	params.value = { ...params.value, [e]: i.detail.value };
};
const enter = () => {
	popup.value.open('bottom');
	console.log(params.value.phone);
};
const passwordAll = ref(['1', '2', '2', '2', '2', '2']);
const getPhone = (key) => {
	if (key) {
		let data = passwordAll.value;
		if (key === 'close') {
			if (data[0]) {
				let lastIndex = data.lastIndexOf(data.filter((item) => item).pop());
				data[lastIndex] = '';
				passwordAll.value = data;
			}
		} else {
			console.log(data[data.length - 1]);
			if (!data[data.length - 1]) {
				let lastIndex = data.lastIndexOf(data.filter((item) => item).pop());
				console.log(lastIndex);
				const index = lastIndex > -1 ? lastIndex + 1 : 0;
				console.log(index);
				data[index] = key;
				console.log(data);
				passwordAll.value = data;
			}
		}
	}
};

const phone = [
	{ two: true, number: '1', en: '1', key: '1' },
	{ two: true, number: '2', en: 'ABC', key: '2' },
	{ two: true, number: '3', en: 'DEF', key: '3' },
	{ two: true, number: '4', en: 'GHI', key: '4' },
	{ two: true, number: '5', en: 'JKL', key: '5' },
	{ two: true, number: '6', en: 'MNO', key: '6' },
	{ two: true, number: '7', en: 'PQRS', key: '7' },
	{ two: true, number: '8', en: 'TUV', key: '8' },
	{ two: true, number: '9', en: 'WXYZ', key: '9' },
	{ hide: true, two: true, number: '9', en: 'WXYZ' },
	{ one: true, number: '0', key: '0' },
	{ hide: true, img: Close, one: true, key: 'close' }
];

const changePopup = (e) => {
	console.log(e);
};

const inputList = [
	{ title: '收货人', key: 'person' },
	{ title: '收货人电话', key: 'phone' },
	{ title: '收货地址', key: 'address' }
];
</script>

<style>
@import url('./index.scss');
</style>
