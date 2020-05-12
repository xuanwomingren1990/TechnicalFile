<template>
    <div class="container">
        <div style="margin-bottom: 30px">当前组件：
            <span style="color: lime;font-weight: bold">B</span>
        </div>
        <span>{{hello}}</span>

        <!--在子组件中切换动态组件-->
        <div class="checkout" @click="checkoutToA">切换到组件A</div>
    </div>
</template>

<script>
    export default {
        name: "TabComponentB",
        data () {
            return {
                hello: '这是B组件内容要展示的内容'
            }
        },
        /**
         * keep-alive 组件激活时调用该钩子函数;
         * 即：当切换到本组件的时候，会先执行activated钩子，会在两秒后显示本组件，起到了延迟加载的作用。
         */
        activated: function () {
            debugger
            console.log('activated')
            var self = this;

            var startTime = new Date().getTime();

            //两秒后执行
            while (new Date().getTime() < startTime + 1500){
                self.hello='我是延迟后的内容';
            }

        },
        methods:{
            checkoutToA(){
                this.$emit('checkout','TabComponent_A')
            }
        }
    }
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20vh;

    .checkout{
        margin-top: 20px;
        background-color: lime;
        border-radius: 10px;
        padding: 5px;
    }
}
</style>
