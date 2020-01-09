<template>
    <div class="parentComponent-dialogPanel">
        <el-row>
            <el-button size="small" type="primary" @click="isShowDialog=true">显示DialogPanel</el-button>
        </el-row>

        <!--
        向DialogPanel组件注册一个自定义属性isShowDialog, 控制DialogPanel的显示与隐藏
        给DialogPanel组件注册一个自定义事件close,触发该事件来设置isShowDialog的值
        -->
        <dialog-panel :isShowDialog="isShowDialog" @close="closeDialog">
            这里是弹框内容
        </dialog-panel>

<!-------------------笔记------------------>
<div class="notes hidden">
<pre>
DialogPanel组件,适用于: 通过弹框的方式,展示信息
使用方式,参见:Vue\CustomComponents\DialogPanel\index.vue
<!--&lt;div&gt;&lt;/div&gt;-->
</pre>
</div>
<!-------------------笔记---------------->
    </div>
</template>

<script>
    import DialogPanel from './DialogPanel'
    export default {
        name: "index",
        components: {
            DialogPanel: DialogPanel,
        },
        data () {
            return {
                isShowDialog: false
            }
        },
        methods: {
            closeDialog () {
                this.isShowDialog = false
            }
        }
    }
</script>

<style scoped>
    .parentComponent-dialogPanel{
        display: flex;
        justify-content: center;
    }
</style>


