// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vuex
import store from './store'

Vue.config.productionTip = false
// 引入axios
import axios from 'axios';
Vue.prototype.$http = axios;
// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 引入jquery
import $ from 'jquery'
Vue.prototype.$=$;
// 引入过滤器
import filters from './filters/time'
for (var i in filters) {
  Vue.filter(i, filters[i])
}
// 引入动画
import 'animate.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
