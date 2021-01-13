import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/fonts/iconfont.css'
import axios from "axios"
import TreeTable from "vue-table-with-tree-grid"

Vue.prototype.$http = axios
// 配置请求根路径
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/"
axios.interceptors.request.use(config => {
  // console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config
})

Vue.component('tree-table', TreeTable);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 引入公共样式
require('./assets/css/global.css')