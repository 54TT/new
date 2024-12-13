<script setup>
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import { useDataStore } from '@/stores/data.js';
const useData = useDataStore();
const getToken = () => {
	const data = uni.getStorageSync('token');
	if (data) {
		useData.getUserInfo();
		uni.reLaunch({
			url: '/pages/index/index'
		});
	} else {
		uni.navigateTo({
			url: '/pages/loginRegister/login'
		});
	}
};

onLaunch(() => {
	getToken();
});

onShow(() => {});
</script>

<style lang="scss">
@import './app.scss'; /*每个页面公共css */
</style>
