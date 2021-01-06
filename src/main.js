import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**
 * 引入elementUI
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

/**
 * 使用自定义插件
 */
import 'animate.css'//动画插件配套的css样式
// 1.整体引入
// import plugins from '@/components/Vue/Plugins/index.js'
// Vue.use(plugins)
// 2.按需引入
import {registerAnimation,hide,styleVariables} from '@/components/Vue/Plugins/index.js'
Vue.use(registerAnimation)
Vue.use(hide)
Vue.use(styleVariables)

/**
 * 使用自定义发布到npm上的插件
 */
// 1.全局引入
import modeTest from 'mode-test1990'
// Vue.use(modeTest)
// 2.按需引入
import {component1,component2} from 'mode-test1990'
Vue.use(component1)
Vue.use(component2)

/**
 * 引入echarts
 */
import echarts from 'echarts'//引入echarts
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
