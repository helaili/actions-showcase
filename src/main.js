import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

const httpclient = axios.create({
  baseURL: 'https://api.github.com/octocat',
  timeout: 1000,
  headers: {'Authorization': `token ${process.env.TOKEN}`}
})

Vue.prototype.$http = httpclient

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
