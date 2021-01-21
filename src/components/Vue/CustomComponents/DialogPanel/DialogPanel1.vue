<!--
:modal          设置遮罩层阴影效果

:before-close   由1、2两种方式,将触发before-close,默认参数done，是一个回掉函数；
                会【暂停 Dialog 的关闭】,只有调用了done(),才会去改变 :visible 的绑定值；
                默认处理函数中，就调用了done();

关闭dialog的三种方式：
    默认：
        1.点击关闭提标
        2.点击遮罩层（dialog之外的区域）
        这两种方式，触发before-close，通过调用默认的done回调，触发visible绑定值的改变。
        关闭按钮 —> :before-close —> done() —> 改变:visible绑定值 —> 父组件传递值同部改变 —>
    自定义添加：
        3.点击关闭按钮
-->
<template>
    <el-dialog
            title="相对于body居中"
            :visible.sync="dialogVisible"
            custom-class="custom-dialog"
            :modal="false"
            :show-close="false"
            :before-close="beforeClose"
            width="30%">
        <slot></slot>
    </el-dialog>
</template>

<script>
    export default {
        name: "DialogPanel1",
        props: {
            isShowDialog: {
                type: Boolean,
                required: true
            }
        },
        computed: {
            dialogVisible:  {
                get: function () {
                    return this.isShowDialog
                },
                // :visible 绑定值(即dialogVisible)被改变之后，父组件传递过来的值也要与之同步
                set: function () {
                    this.$emit('close')
                }
            }
        },
        methods:{
            // 关闭前的一些处理，比如确认提示框
            beforeClose(done){
                // ....要做的处理

                // 别忘了调用done(),不然将不会触发 :visible 绑定值的改变
                done()
            }
        }
    }
</script>

<style lang="scss" scoped>
  .el-dialog__wrapper{
    //position: absolute;
  }
</style>
