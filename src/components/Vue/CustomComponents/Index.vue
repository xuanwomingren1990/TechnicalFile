<template>
    <div class="custom-components-container">
        <div class="buttons" style="display: flex;justify-content: center">
            <el-row>
                <el-button type="primary" size="small" v-on:click="switchTo('dialogPanelIndex')">DialogPanel</el-button>
            </el-row>
            <el-row>
                <el-button type="primary" size="small" v-on:click="switchTo('AbsolutePanelIndex')">AbsolutePanel</el-button>
            </el-row>
        </div>
        <!--在本组件中，利用动态组件，切换组件-->
        <component v-bind:is="currentComponent"></component>
    </div>
</template>

<script>
    import DialogPanelIndex from './DialogPanel/index'
    import AbsolutePanelIndex from './AbsolutePanel/index'
    export default {
        name: "Index",
        components: {
            DialogPanelIndex,
            AbsolutePanelIndex
        },
        data () {
            return {
                currentComponent: 'dialogPanelIndex'
            }
        },
        methods: {
            switchTo (name) {
                this.currentComponent = name
            }
        }
    }
</script>

<style lang="scss" scoped>
    .custom-components-container{
        height: 100%;
        .buttons{
            display: flex;
            .el-row{
                margin-right: 5px;
            }
        }
    }
</style>
