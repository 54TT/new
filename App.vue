<script setup>
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';

const getToken = () => {
	const data = uni.getStorageSync('token');
	console.log(data);
	if (data) {
		// uni.switchTab({
		// 	url: '/pages/index/index'
		// });
	} else {
		// uni.navigateTo({
		// 	url: '/pages/loginRegister/login'
		// });
	}
};

onLaunch(() => {
	getToken();
});
</script>

<style lang="scss">
@import './app.scss'; /*每个页面公共css */
</style>
