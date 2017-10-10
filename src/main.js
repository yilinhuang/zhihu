import Vue from 'vue'
import App from './App'
import router from './router'
// 用于和后端交互数据，发起http请求，使用then方法处理响应结果
import VueResource from 'vue-resource'
import store from './store'
// router状态与state数据的同步
// router 状态放入state中，通过store.state.route.**可改变router状态
import {sync} from 'vuex-router-sync'
// Moment 是一个 JS日期处理类库
import moment from 'moment'
Vue.config.productionTip = false

sync(store, router)
Vue.use(VueResource)
//汉化
moment.locale('zh-cn')
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
