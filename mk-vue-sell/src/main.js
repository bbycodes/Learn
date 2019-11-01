import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './route'
import 'common/stylus/index.styl'
Vue.config.productionTip = false

Vue.prototype.$http = axios
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
