import Vue from 'vue'
import App from './App'

import api from './api'

import './filters'

Vue.config.productionTip = false
Vue.prototype.$http = api; 

new Vue({
  render: h => h(App),
}).$mount('#app')


