<template>
	<view style="height: 100%; width: 100%">
		<z-paging ref="paging" use-virtual-list :cell-height-mode="'fixed'" :force-close-inner-list="true" @virtualListChange="virtualListChange" @query="queryList">
			<view class="lineItemMore" :id="`zp-id-${item.zp_index}`" :key="item.zp_index" v-for="item in virtualList" @click="itemClick(item, item.zp_index)">
				<div class="left">
					<img src="/static/combine.svg" alt="" class="img" />
					<div class="content">
						<p class="en">
							<span class="name">{{ item.enName }}</span>
							<span class="u">/usdt</span>
						</p>
						<p class="cn">{{ item.name }}</p>
					</div>
				</div>
				<div class="right">
					<p class="price">${{ item.price }}</p>
					<p class="fluctuation" :style="{ backgroundColor: Number(item.flux) === 0 ? '#a88a8a' : Number(item.flux) > 0 ? '#1EA266' : '#CF3F48' }">{{ item.flux }}%</p>
				</div>
			</view>
		</z-paging>
	</view>
</template>

<script setup>
import { ref, defineProps } from 'vue';
const paging = ref(null);
const virtualList = ref([]);
const { params } = defineProps({
	height: String, // 定义要接收的参数
	params: Array
});
const virtualListChange = (list) => {
	virtualList.value = list;
};
const itemClick = (i, index) => {
	console.log(i, index);
};
const queryList = (pageNo, pageSize) => {
	setTimeout(() => {
		paging.value?.complete(params);
	}, 1500);
};
</script>

<style lang="less">
.z-paging-content {
	position: relative !important;
	width: 100% !important;
	height: 100% !important;
	.lineItemMore {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20px;
		& > .left {
			display: flex;
			align-items: center;
			& > .img {
				width: 24px;
				height: 24px;
				margin-right: 12px;
			}
			& > .content {
				& > .en {
					display: flex;
					align-items: flex-end;
					margin-bottom: 5px;
					.name {
						margin-bottom: -2px;
						color: white;
						font-size: 17px;
						font-weight: 500;
					}
					.u {
						color: rgba(255, 255, 255, 0.4);
						font-size: 12px;
						font-weight: 300;
					}
				}
				& > .cn {
					font-weight: 400;
					font-size: 12px;
					color: #aaaaaa;
				}
			}
		}
		& > .right {
			display: flex;
			align-items: center;
			& > .price {
				font-weight: 400;
				font-size: 17px;
				color: #ffffff;
				margin-right: 20px;
			}
			& > .fluctuation {
				border-radius: 4px;
				cursor: pointer;
				font-weight: 400;
				font-size: 14px;
				box-sizing: border-box;
				color: #ffffff;
				padding: 6px 0;
				text-align: center;
				width: 80px;
			}
		}
	}
}
</style>
