// 导入组件，组件必须声明 name
import MarkDownContainer from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
MarkDownContainer.install = function (Vue) {
    Vue.component(MarkDownContainer.name, MarkDownContainer)
}

export default MarkDownContainer