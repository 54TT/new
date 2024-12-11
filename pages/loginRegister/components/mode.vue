<template>
	<view class="moreBoxToken">
		<div class="topBox">
			<image :src="LoginTopBack" alt="" class="img" />
			<div class="content">
				<p class="title">hi！</p>
				<p class="text">欢迎使用sips数据服务平台</p>
			</div>
		</div>

		<div class="contentBox">
			<view v-for="i in inputList" :key="i.key">
				<div v-if="i.hide"></div>
				<div class="passwordBox" v-else-if="i.password">
					<input
						@input="(e) => changeInput(e, i.key)"
						:type="passwordStatus[i.key] ? 'text' : 'password'"
						:placeholder="i.pl"
						placeholder-class="placeholderClass"
						class="inputBox inputBoxPass"
					/>
					<image :src="passwordStatus[i.key] ? ShowEare : Hide" alt="" class="img" @click="showHide(i.key)" />
				</div>
				<input v-else type="text" @input="(e) => changeInput(e, i.key)" :placeholder="i.pl" placeholder-class="placeholderClass" class="inputBox" />
			</view>
			<!-- 登录 -->
			<p class="enter" @click="enter">{{ props.status === 'login' ? '登录' : '注册' }}</p>
			<p class="go">
				{{ props.status === 'login' ? '没有账号?' : '已有账号?' }}
				<span @click="goHis">{{ props.status === 'login' ? '去注册' : '去登录' }}</span>
			</p>
			<p :class="{ agree: true, position: props.status === 'login' ? true : false }">
				<image :src="agreeStatus ? AgreeActive : Agree" alt="" class="img" @click="changeAgree" />
				我已阅读并同意
				<span class="text">《用户协议》</span>
				及
				<span class="text">《隐私条款》</span>
			</p>
		</div>
	</view>
</template>

<script setup>
import { onPullDownRefresh } from '@dcloudio/uni-app';
import { ref, defineProps, watch } from 'vue';
import LoginTopBack from '@/static/loginTopBack.png';
import Agree from '@/static/agree.png';
import AgreeActive from '@/static/agreeActive.png';
import Hide from '@/static/hide.png';
import ShowEare from '@/static/showEare.png';
const props = defineProps({
	status: String // 定义要接收的参数
});
const inputList = [
	{ pl: '请输入手机号码', key: 'phone' },
	{ pl: '请输入密码(6-12位字母或数字)', key: 'passwordOne', password: true },
	{ pl: '请再次输入密码', key: 'passwordTwo', password: true, hide: props.status === 'login' },
	{ pl: '请输入您的真实姓名', key: 'name', hide: props.status === 'login' },
	{ pl: '请输入身份证号码', key: 'card', hide: props.status === 'login' },
	{ pl: '邀请码', key: 'code', hide: props.status === 'login' }
];
// 两个密码框的  显示隐藏
const passwordStatus = ref({ passwordOne: false, passwordTwo: false });
// input  value
const allValue = ref({ phone: '', passwordOne: '', passwordTwo: '', code: '', card: '', name: '' });
// 是否同意
const agreeStatus = ref(false);
const showHide = (key) => {
	passwordStatus.value = { ...passwordStatus.value, [key]: !passwordStatus.value[key] };
};
const changeAgree = () => {
	agreeStatus.value = !agreeStatus.value;
};
//  输入框  值
const changeInput = (e, key) => {
	allValue.value = { ...allValue.value, [key]: e.detail.value };
};
const goHis = () => {
	if (props.status === 'login') {
		uni.navigateTo({
			url: '/pages/loginRegister/register'
		});
	} else {
		uni.navigateTo({
			url: '/pages/loginRegister/login'
		});
	}
};
// 确认
const enter = () => {
	if (props.status === 'login') {
	} else {
	}
};

// 下拉刷新逻辑
onPullDownRefresh(() => {
	console.log(44444444444444444);
	setTimeout(() => {
		console.log(1111111111111);
		// 停止下拉刷新动画
		// uni.stopPullDownRefresh();
		console.log(222222222222);
	}, 2000); // 模拟延迟 1.5 秒
});
</script>

<style lang="scss">
@import url('./index.scss');
</style>
