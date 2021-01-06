<template>
    <div class="wrapper">
        <p :style="'color:' + colors.waterColor2">在js中使用scss脚本中的样式变量</p>
    </div>
</template>

<script>
    // js中使用scss中的变量
    import colors from '@/styles/resource-variables.scss'
    export default {
        name: "VariablesInSCSS",
        data(){
            return{
                colors:colors
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
