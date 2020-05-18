<template>
<div>
    <p class="variable-js" :style="'color:' + waterColor">js中使用js全局样式变量</p>
    <p class="variable-scss">scss中使用全局js样式变量</p>
<!-------------------笔记------------------>
<div class="notes hidden">
<pre>
    同时在js和scss中使用js全局样式变量
        1.定义全局js样式文件( src/styles/styleVariables.js )
        2.vue.config.js配置 css.loaderOptions ——可在scss中使用变量
        3.main.js中引入，挂载在实例——可在js中使用

    在scss中使用scss全局变量
        1.定义全局scss样式文件( src/styles/index.scss )
        2.vue.config.js配置 css.loaderOptions

    参考：
        1.SASS用法指南: http://www.ruanyifeng.com/blog/2012/06/sass.html
        2.如何在 SCSS 使用 JavaScript 变量/scss全局变量: https://www.cnblogs.com/fayin/p/10363924.html
    <!--&lt;div&gt;&lt;/div&gt;-->
</pre>
</div>
<!-------------------笔记---------------->
</div>
</template>

<script>
    export default {
        name: "Configuration",
        data(){
            return{
                // 1.js中使用全局js样式变量
                waterColor: this.$styleVariables.waterColor
            }
        }
    }
</script>

<style scoped lang="scss">

div{
    .variable-scss{
        /*2.scss中使用全局js样式变量*/
        color: $waterColor;
    }
}

</style>
