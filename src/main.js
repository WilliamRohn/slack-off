import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './global.scss'
import $ from 'jquery'
import { get, post } from './utils/http'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './core/lazy_use' 

Vue.prototype.$http = { get, post }
Vue.use(ElementUI);
Vue.config.productionTip = false
window.$ = $

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
