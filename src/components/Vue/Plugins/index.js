const myPlugin = {
    install (Vue,options){
        /**
         * 使用步骤：
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

        Vue.setAnimation = Vue.prototype.$setAnimation = setAnimation
    }
}

export default myPlugin
