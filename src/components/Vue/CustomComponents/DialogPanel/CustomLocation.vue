<template>
    <!--
    width属性设置为100%，则没有了遮罩层，无法通过点击遮罩关闭对话框；
    如需要启动遮罩功能，则要修改width属性-->
    <el-dialog
            title="dialog弹框"
            :visible.sync="dialogVisible"
            custom-class="custom-dialog-custom-location"
            :modal="false"
            :show-close="true"
            :before-close="handleClose"
            width="100%">
        <slot></slot>
    </el-dialog>
</template>
<script>
    export default {
        name: "CustomLocation",
        props: {
            isShowDialog: {
                type: Boolean,
                required: true
            },
            /**
             * 不设置top left right bottom 属性，则将自适应大小，且居中
             */
            top: {
                type: String,
                default: 'auto',
                required: false
            },
            left: {
                type: String,
                default: 'auto',
                required: false
            },
            right: {
                type: String,
                default: 'auto',
                required: false
            },
            bottom: {
                type: String,
                default: 'auto',
                required: false
            }
        },
        data(){
            return{
            }
        },
        computed: {
            dialogVisible:  {
                get: function () {
                    return this.isShowDialog
                },
                set: function () {
                    this.$emit('close')
                }
            }
        },
        methods:{
            handleClose(done){
                done()
            },
            initContainerPosition(){
                let dom = document.getElementsByClassName('custom-dialog-custom-location')[0].parentElement
                if (this.top){
                    dom.style.top = this.top
                }
                if (this.bottom){
                    dom.style.bottom = this.bottom
                }
                if (this.left){
                    dom.style.left = this.left
                }
                if (this.right){
                    dom.style.right = this.right
                }
            }
        },
        mounted(){
            this.initContainerPosition()
        }
    }
</script>

<style lang="scss">
    .el-dialog__wrapper{
        .custom-dialog-custom-location{
            margin: unset!important;
        }
    }
</style>
