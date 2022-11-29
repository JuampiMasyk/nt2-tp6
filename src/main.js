import Vue from 'vue'
import App from './App.vue'
import store from './store'
import "./assets/styles/style.css"
import './globalMixins'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
