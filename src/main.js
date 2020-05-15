import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import 'animate.css'

// 自定义全局js样式变量
import styleVariables from '@/styles/styleVariables.js'
Vue.prototype.$styleVariables = styleVariables

console.log(styleVariables)

import myPlugin from '@/components/Vue/Plugins/index.js'

Vue.use(ElementUI)
Vue.use(myPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
