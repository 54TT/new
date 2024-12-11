import App from './App'
import Tarbar from './components/Bottom/index'
import './uni.promisify.adaptor'
import {
	createPinia
} from "pinia";

import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	// 创建 Pinia 实例
	const pinia = createPinia();
	app.use(pinia);
	app.component('Tarbar', Tarbar);
	return {
		app
	}
}