/**
 * 1.开发插件
 * + Vue.js 的插件应该暴露一个 install 方法；
 * + 可以在install方法中给添加
 *        ++1.全局【property】、【方法】、【指令】、【过滤器】、【过渡】、【组件选项】；
 *        ++2.Vue实例方法，通过把它们添加到 Vue.prototype 上实现
 * + 这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象；
 *
 * 2.使用插件
 * 通过全局方法 Vue.use() 使用插件。它需要在你调用 new Vue() 启动应用之前完成：
 */
const myPlugin = {
    install (Vue,options){
        /**
         * 使用方法
         * 1.在main.js中
         *      import 'animate.css'
         *      import myPlugin from '@/components/Vue/Plugins/index.js'
         * 2.调用方法：this.$setAnimation()
         *
         * 给元素添加动画
         * @param domClass          要添加动画的元素的类名
         * @param animateClass      animate.css中的动画类名
         * @param duration          动画持续时间
         * @param callback          执行动画后的回调函数
         */
        function setAnimation(domClass,animateClass,duration,callback) {
            if (domClass && animateClass) {
                let list = document.getElementsByClassName(domClass)
                for (let i = 0; i < list.length; i++) {
                    list[i].classList.add('animated')
                    list[i].addEventListener('click', function () {
                        list[i].classList.add(animateClass)

                        let time = duration?duration:1000
                        setTimeout(function () {
                            list[i].classList.remove(animateClass)
                        }, time)

                        if (callback && typeof callback === 'function') {
                            callback(list[i])
                        }
                    })
                }
            }
        }
        // 添加全局方法，调用方式：Vue.setAnimation()
        Vue.setAnimation = setAnimation
        // 添加实例方法，调用方式：this.$setAnimation()
        Vue.prototype.$setAnimation = setAnimation


        // 添加全局指令
        Vue.directive('hide', {
            inserted: (el, binding, vnode) => {
                // vnode.context可以拿到vue实例对象
                if (vnode.context.$props.hide) {
                    el.parentNode.removeChild(el)
                }
            }
        })
    }
}

export default myPlugin
