import App from './App'
import Tarbar from './components/Bottom/index'
import './uni.promisify.adaptor'
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.component('Tarbar', Tarbar);
	return {
		app
	}
}