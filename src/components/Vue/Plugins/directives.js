/**
 * 移除元素
 * @type {{install(*, *): void}}
 */
const hide = {
    install (Vue,options){
        /**
         * 添加全局指令
         * 根据vue实例中props中的hideProp属性值来判断使用移除元素
         */
        Vue.directive('hideProp', {
            inserted: (el, binding, vnode) => {
                // vnode.context可以拿到vue实例对象
                if (vnode.context.$props.hideProp) {
                    el.parentNode.removeChild(el)
                }
            }
        })
        /**
         * 添加全局指令
         * 根据vue实例中data中的hideData属性值来判断使用移除元素
         */
        Vue.directive('hideData', {
            inserted: (el, binding, vnode) => {
                // vnode.context可以拿到vue实例对象
                if (vnode.context.$data.hideData) {
                    el.parentNode.removeChild(el)
                }
            }
        })
    }
}

export {hide}
