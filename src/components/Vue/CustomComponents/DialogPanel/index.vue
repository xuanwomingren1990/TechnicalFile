<template>
<div class="parentComponent-dialogPanel">
    <el-row>
        <el-button size="small" type="primary" @click="isShowDialog=true">默认剧中的对话框</el-button>
        <el-button size="small" type="primary" @click="isShowCustom=true">自定义位置的对话框</el-button>
    </el-row>

    <!--
    向DialogPanel组件注册一个自定义属性isShowDialog, 控制DialogPanel的显示与隐藏
    给DialogPanel组件注册一个自定义事件close,点击关闭按钮时将触发该事件，来设置isShowDialog的值为false
    -->
    <dialog-panel :isShowDialog="isShowDialog" @close="closeDialog">
        <h1>默认剧中的对话框</h1>
    </dialog-panel>

    <custom-location
            :top=" '100px' " :left="'200px'"
            :isShowDialog="isShowCustom" @close="closeCustom">
        <h1>自定义位置的对话框</h1>
    </custom-location>


<!-------------------笔记------------------>
<div class="notes hidden">
<pre>
DialogPanel组件：
1.适用于: 通过弹框的方式,展示信息
2.组件利用了插槽，使用组件时，只需要向组件标签中填充要展示的内容即可，可以是文本，也可以是html
3.使用方式,参见:Vue\CustomComponents\DialogPanel\index.vue
<!--&lt;div&gt;&lt;/div&gt;-->
</pre>
</div>
<!-------------------笔记---------------->
</div>
</template>

<script>
    import DialogPanel from './DialogPanel'
    import CustomLocation from './CustomLocation'
    export default {
        name: "index",
        components: {
            DialogPanel: DialogPanel,
            CustomLocation
        },
        data () {
            return {
                isShowDialog: false,
                isShowCustom:false
            }
        },
        methods: {
            closeDialog () {
                this.isShowDialog = false
            },
            closeCustom(){
                this.isShowCustom = false
            }
        }
    }
</script>

<style scoped>
    .parentComponent-dialogPanel{
        display: flex;
        justify-content: center;
        align-items:center;
        min-height: 80%;
        background-color: #8d8d8d;
    }
</style>


