import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'

import h5Autocomplate from './common/H5Autocomplate/h5Autocomplate.vue'
import './assets/iconfont/iconfont.css'

import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iView)
Vue.component('h5-autocomplate', h5Autocomplate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
