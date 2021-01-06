// styleVariables.js是使用CommonJS规范进行导出的，
// 因此，要使用CommonJS规范进行引入
let styles = require('@/styles/styleVariables.js')

const styleVariables = {
    install(Vue,options){
        Vue.styleVariables = styles
        Vue.prototype.$styleVariables = styles
    }
}

export {styleVariables}
