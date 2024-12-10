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
			<input type="text" @input="(e) => changeInput(e, 'phone')" placeholder="请输入手机号码" placeholder-class="placeholderClass" class="inputBox" />
			<div class="passwordBox">
				<input
					@input="(e) => changeInput(e, 'passwordOne')"
					:type="passwordStatus.one ? 'text' : 'password'"
					placeholder="请输入密码(6-12位字母或数字)"
					placeholder-class="placeholderClass"
					class="inputBox inputBoxPass"
				/>
				<image :src="passwordStatus.one ? ShowEare : Hide" alt="" class="img" @click="showHide('one')" />
			</div>
			<div :class="{ displayNoneMore: props.status === 'login' ? true : false }">
				<div class="passwordBox">
					<input
						:type="passwordStatus.two ? 'text' : 'password'"
						@input="(e) => changeInput(e, 'passwordTwo')"
						placeholder="请再次输入密码"
						placeholder-class="placeholderClass"
						class="inputBox inputBoxPass"
					/>
					<image :src="passwordStatus.two ? ShowEare : Hide" alt="" class="img" @click="showHide('two')" />
				</div>
				<input type="text" @input="(e) => changeInput(e, 'name')" placeholder="请输入您的真实姓名" placeholder-class="placeholderClass" class="inputBox" />
				<input type="text" @input="(e) => changeInput(e, 'card')" placeholder="请输入身份证号码" placeholder-class="placeholderClass" class="inputBox" />
				<input type="text" @input="(e) => changeInput(e, 'code')" placeholder="邀请码" placeholder-class="placeholderClass" class="inputBox" />
			</div>

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
import { ref, defineProps } from 'vue';
import LoginTopBack from '@/static/loginTopBack.png';
import Agree from '@/static/agree.png';
import AgreeActive from '@/static/agreeActive.png';
import Hide from '@/static/hide.png';
import ShowEare from '@/static/showEare.png';
const props = defineProps({
	status: String // 定义要接收的参数
});

// 两个密码框的  显示隐藏
const passwordStatus = ref({ one: false, two: false });
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
</script>

<style lang="scss">
@import url('./index.scss');
</style>
