<template>
<div>
    <p class="variable-js" :style="'color:' + styleVariables.blue">在js脚本中使用js全局样式变量</p>
    <p class="variable-scss">在scss脚本中使用全局js样式变量</p>
</div>
</template>

<script>
    // js中使用js样式变量
    let styleVariables = require('@/styles/styleVariables.js')
    import Vue from 'vue'
    export default {
        name: "VariablesInJS",
        data(){
            return{
                styleVariables: styleVariables,//局部引入
                styleVariables_Vue: Vue.styleVariables,//挂载在Vue构造器上
                styleVariables_$Vue: this.$styleVariables//挂载在vue实例上
            }
        }
    }
</script>

<style scoped lang="scss">

div{
    .variable-scss{
        /*2.scss中使用全局js样式变量*/
        color: $blue;
    }
}

</style>
