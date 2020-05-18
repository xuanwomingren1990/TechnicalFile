<template>
    <div class="container">
        <div class="buttons">
            <el-row>
                <el-button type="primary" size="small" v-on:click="switchTo('Configuration')">scss配置全局js变量</el-button>
                <el-button type="primary" size="small" v-on:click="switchTo('ColorFunction')">scss颜色函数</el-button>
            </el-row>
        </div>
        <keep-alive>
            <component v-bind:is="currentTabComponent" v-on:checkout="checkout"></component>
        </keep-alive>
    </div>
</template>

<script>
    import Configuration from '@/components/Vue/CSS/Configuration.vue'
    import ColorFunction from '@/components/Vue/CSS/ScssColorFunction.vue'
    export default {
        name: "index",
        // 注册组件
        components: {
            Configuration: Configuration,
            ColorFunction: ColorFunction
        },
        data (){
            return {
                currentTabComponent: 'Configuration'
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
