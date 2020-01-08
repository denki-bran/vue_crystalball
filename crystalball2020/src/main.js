import Vue from 'vue'
import App from './App.vue'
import router from './router'


import 'normalize.css/normalize.css'
import '@/styles/index.scss'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})