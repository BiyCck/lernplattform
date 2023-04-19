import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import mitt from 'mitt'

const emitter = mitt()

const app = createApp(App).use(store).use(router)
app.config.globalProperties.emitter = emitter
app.mount('#app')
