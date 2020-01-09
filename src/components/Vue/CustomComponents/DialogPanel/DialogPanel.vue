<template>
    <el-dialog
            title="dialog弹框"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"><!--点击关闭图标,将触发before-close事件-->
        <slot></slot>
    </el-dialog>
</template>

<script>
    export default {
        name: "DialogPanel",
        props: {
            isShowDialog: {
                type: Boolean,
                required: true
            }
        },
        data () {
            return {
            }
        },
        computed: {
            // 根据自定义属性isShowDialog,得到计算属性,该属性控制对话框的显示与隐藏
            dialogVisible:  {
                get: function () {
                    return this.isShowDialog
                }
            }
        },
        methods: {
            // 触发自定义事件 'close',  来改变自定义属性的值
            handleClose () {
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>

</style>
