<template>
	<view class="homeContent">
		<div class="top">
			<img :src="TopBack" alt="" class="topBack" />
			<div class="content">
				<img :src="NameLogo" alt="" class="name" />
				<img :src="TextBack" alt="" class="text" />
			</div>
		</div>
		<!-- 公告 -->
		<div class="announcement">
			<img :src="NewBack" alt="" class="NewBack" />
			<div class="content">
				<div class="top">
					<div class="left">
						<img :src="New" alt="" class="new" />
					</div>
					<p class="right">
						<img :src="Robot" alt="" class="Robot" />
						<span>在线客服为您解答</span>
						<img :src="Back" alt="" class="Back" />
					</p>
				</div>
				<p class="text" @click="goAnnouncement">GE智能医疗全新智能3D检测仪理财产品上市了...</p>
			</div>
		</div>
		<!-- 订单列表 -->
		<div class="order">
			<div class="top">
				<p class="ch">订单列表</p>
				<p class="en">order list</p>
			</div>
			<div class="item" v-for="(item, index) in orderList" :key="index">
				<p class="text">{{ item.name }}</p>
				<div class="num">
					<p class="phone">{{ item.phone }}</p>
					<p class="money">{{ item.num }}</p>
				</div>
			</div>
		</div>
		<uni-popup ref="popup" class="popupBoxMore" background-color="#fff" @change="changePopup">
			<view class="popup-content">
				<!-- modalBack.png -->
				<p class="tittle">沙盒计划项目组致用户</p>
				<p class="text">
					截至目前，数据恢复工作仍在持续进行中，每当我们修复一项数据时，美西方等反华势力便会趁机制造新的混乱。经过近几日与上级及网信办的沟通，我们决定从根本上解决数据丢失的问题，为每位CIPS会员提供节点修复包。通过节点修复包累计提现15次，验证每一位会员的账户信息。
				</p>
				<p class="text">
					同时，我们与中国人民银行进行了会议，决定为每位会员额外补贴3000元到签到参会补贴钱包。此外，三款节点修复包也为所有会员进行了调整，争取到了终身收益。请各位团队长相互转告，确保落实每位会员的权益，实现共同富裕。
				</p>
				<p class="know">已知悉</p>
			</view>
		</uni-popup>
	</view>
	<Tarbar />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { orderList } from '/utils/type.js';
import TopBack from '/static/topBack.png';
import NameLogo from '/static/nameLogo.png';
import TextBack from '/static/textBack.png';
import Robot from '/static/robot.png';
import Back from '/static/back.png';
import New from '/static/new.png';
import NewBack from '/static/newBack.png';
import ModalBack from '/static/modalBack.png';
const popup = ref(true);

const changePopup = (e) => {
	console.log(e);
};

const goAnnouncement = () => {
	uni.navigateTo({
		url: '/pages/index/components/announcement' // 路径是相对于根目录的
	});
};

onMounted(() => {
	setTimeout(() => {
		popup.value.open('center');
	}, 1000);
});
</script>

<style>
@import url('./index.scss');
</style>
