<template>
    <div class="demos-plugin-container">
        <!--调用方式:Vue.setAnimation()-->
        <div class="global-method">全局方法：setAnimation</div>

        <!--调用方式:this.$setAnimation()-->
        <div class="instance-method">实例方法：setAnimation</div>

        <!--组件hide属性为ture,该指令将生效-->
        <div class="global-directive" v-hide>全局指令：v-hide</div>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "index",
        props: {
            hide: {
                type:Boolean,
                default: false
            }
        },
        mounted(){
            // Vue构造器调用全局方法
            Vue.setAnimation('global-method','flash',null,function (dom) {
                console.log(dom)
            })
            // 在vue实例中调用实例方法
            this.$setAnimation('instance-method','flash',null,function (dom) {
                console.log(dom)
            })
        }
    }
</script>

<style scoped lang="scss">
    .demos-plugin-container{
        width: 100%;
        height: 100%;
        background-color: #e1e1db;
        .global-method,.instance-method,.global-directive{
            background-color: #2ff5ff;
            display: inline-block;
            border-radius: 5px;
            padding: 5px;
            cursor: pointer;
            margin-right: 20px;
        }
    }
</style>
