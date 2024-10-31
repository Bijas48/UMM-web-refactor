import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)

app.use(MotionPlugin)
app.use(VueApexCharts)
app.use(router)

app.mount('#app')
