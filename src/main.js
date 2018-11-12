// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import VueRouter from 'vue-router'
import Echarts from 'echarts'
import routes from './store/routes'

Vue.config.productionTip = false

Vue.prototype.$echarts = Echarts

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Echarts)

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App),
  template: '<App/>'
})
