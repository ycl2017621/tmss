// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import store from './vuex/store'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false
Vue.use(VueAxios,axios);
Vue.use(MintUI)
/* eslint-disable no-new */
// document.addEventListener("plusready", function() {
//   new Vue({
//     el: '#app',
//     router,
//     store,
//     template: '<App/>',
//     components: { App }
//   })    
// }, false)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

