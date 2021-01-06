const registerAnimation = {
    install(Vue,options){
        /**
         * 给元素添加动画
         * @param domClass          要添加动画的元素的类名
         * @param animateClass      animate.css中的动画类名
         * @param duration          动画持续时间
         * @param callback          执行动画后的回调函数
         */
        /**
         * 注意：本方法依赖于animate.css,因此需要在main.css中引入animate.css
         * import 'animate.css'//动画插件配套的css样式
         */
        function animateFunction(domClass,animateClass,duration,callback) {
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
        Vue.registerAnimation = animateFunction
        // 添加实例方法，调用方式：this.$setAnimation()
        Vue.prototype.$registerAnimation = animateFunction
    }
}

export {registerAnimation}
