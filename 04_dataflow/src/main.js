import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.provide("globalProp", "251201");
app.mount('#app')
