<template>
    <div class="demos-plugin-container">
        <!--调用方式:Vue.registerAnimation()-->
        <div class="global-method">全局方法：registerAnimation</div>

        <!--调用方式:this.$registerAnimation()-->
        <div class="instance-method">实例方法：registerAnimation</div>

        <!--组件props中的hideProp属性为ture,将移除元素-->
        <div class="global-directive" v-hideProp>全局指令：v-hideProp</div>
        <!--组件props中的hideData属性为ture,将移除元素-->
        <div class="global-directive" v-hideData>全局指令：v-hideData</div>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "index",
        props: {
            hideProp: {
                type:Boolean,
                default: false
            }
        },
        data(){
            return{
                hideData:false
            }
        },
        mounted(){
            // Vue构造器调用全局方法
            Vue.registerAnimation('global-method','flash',null,function (dom) {
                console.log(dom)
            })
            // 在vue实例中调用实例方法
            this.$registerAnimation('instance-method','flash',null,function (dom) {
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
            margin-bottom: 10px;
        }
    }
</style>
