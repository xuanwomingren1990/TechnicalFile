<template>
    <div class="wrapper">
        <p :style="'color:' + colors.waterColor1">在js中使用scss脚本中的样式变量</p>
        <p>scss中使用全局中使用scss样式变量</p>
    </div>
</template>

<script>
    // js中引入scss中的变量
    import colors from '@/styles/index.scss'
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
  div{
    p:nth-child(2){
      color: $power-color-2;
    }
  }
</style>
