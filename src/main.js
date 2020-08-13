import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'animate.css'
import echarts from 'echarts'//引入echarts

// 自定义全局js样式变量
// import styleVariables from '@/styles/styleVariables.js'
let styleVariables = require('@/styles/styleVariables.js')

// import module1 from '@/components/Vue/CSS/module1.js'
// console.log(module1)
Vue.prototype.$styleVariables = styleVariables

import myPlugin from '@/components/Vue/Plugins/index.js'
Vue.use(myPlugin)

Vue.use(ElementUI)

Vue.prototype.$echarts = echarts


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
