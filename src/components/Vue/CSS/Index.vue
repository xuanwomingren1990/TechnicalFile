<template>
    <div class="container">
        <div class="buttons">
            <el-row>
                <el-button type="primary" size="small" v-on:click="switchTo('JavascriptVariable')">使用js脚本的样式变量</el-button>
                <el-button type="primary" size="small" v-on:click="switchTo('VariablesInSCSS')">使用scss脚本中的样式变量</el-button>
                <el-button type="primary" size="small" v-on:click="switchTo('ColorFunction')">scss颜色函数</el-button>
            </el-row>
        </div>
        <keep-alive>
            <component v-bind:is="currentTabComponent" v-on:checkout="checkout"></component>
        </keep-alive>


        <!-------------------笔记------------------>
        <div class="notes hidden">
<pre>
    同时在js和scss中使用js全局样式变量
        1.定义全局js样式文件( src/styles/styleVariables.js )
        2.vue.config.js配置 css.loaderOptions ——可在scss中使用变量
        3.局部引入、挂载在实例上、挂载在Vue构造器上——可在js中使用

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
    import JavascriptVariable from '@/components/Vue/CSS/VariablesInJS.vue'
    import VariablesInSCSS from '@/components/Vue/CSS/VariablesInSCSS'
    import ColorFunction from '@/components/Vue/CSS/ScssColorFunction.vue'
    export default {
        name: "index",
        // 注册组件
        components: {
            JavascriptVariable: JavascriptVariable,
            VariablesInSCSS:VariablesInSCSS,
            ColorFunction: ColorFunction
        },
        data (){
            return {
                currentTabComponent: 'VariablesInSCSS'
            }
        },
        methods: {
            switchTo(value){
                this.currentTabComponent = value
            },
            checkout(val){
                this.switchTo(val)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        .buttons{
            display: flex;
            justify-content: center;
        }
    }
</style>
