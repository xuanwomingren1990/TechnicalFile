<template>
    <div class="container">{{hello}}</div>
</template>

<script>
    export default {
        name: "TabComponentB",
        data () {
            return {
                hello: 'BBBBBB'
            }
        },
        /**
        keep-alive 组件激活时调用该钩子函数;
        即：当切换到本组件的时候，会先执行activated钩子，会在两秒后显示本组件，起到了延迟加载的作用。
         **/
        activated: function () {
            console.log('hhh')

            var self = this;

            var startTime = new Date().getTime();

            //两秒后执行
            while (new Date().getTime() < startTime + 1500){
                self.hello='我是延迟后的内容';
            }

        }
    }
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: center;
}
</style>
