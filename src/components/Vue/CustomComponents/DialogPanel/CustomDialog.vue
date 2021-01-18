<template>
    <el-dialog
            :title="title"
            :visible.sync="dialogVisible"
            :custom-class="customClass"
            :modal="false"
            :show-close="showClose"
            :before-close="beforeClose">
        <slot></slot>
    </el-dialog>
</template>
<script>
    export default {
        name: "CustomDialog",
        props: {
            isShowDialog: {
                type: Boolean,
                required: true
            },
            title:{
                type: String,
                default: "",
                required: false
            },
            showClose:{
                type: Boolean,
                default: true,
                required: false
            },
            /**
             * 类名要唯一
             */
            customClass:{
                type: String,
                default: "custom-dialog",
                required: false
            },
            /**
             * 是否开启自定义位置功能,使用此功能同时要设置customClass；
             * 不设置top left right bottom 属性，则将自适应大小，且居中
             */
            useCustomPosition:{
                type: Boolean,
                default: false,
                required: false
            },
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
            beforeClose(done){
                done()
            },
            initContainerPosition(){
                if (this.useCustomPosition) {
                    let dom = document.getElementsByClassName(this.customClass)[0]
                    dom.style.margin = 'unset'

                    /**
                     * width属性设置为100%，则没有了遮罩层，无法通过点击遮罩关闭对话框；
                     * 如需要启动遮罩功能，则要修改width属性;
                     */
                    dom.style.width = '100%'



                    let parentDom = dom.parentElement
                    if (this.top){
                        parentDom.style.top = this.top
                    }
                    if (this.bottom){
                        parentDom.style.bottom = this.bottom
                    }
                    if (this.left){
                        parentDom.style.left = this.left
                    }
                    if (this.right){
                        parentDom.style.right = this.right
                    }
                }
            }
        },
        mounted(){
            this.initContainerPosition()
        }
    }
</script>
