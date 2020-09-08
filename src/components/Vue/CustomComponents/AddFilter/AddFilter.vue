<template>
    <div class="add-filter-com-wrapper">
        <el-row>
            <!--字段-->
            <el-col :span="5">
                <el-select v-model="attributeName" placeholder="属性名">
                    <el-option
                            v-for="item in attributeNameList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <!--操作符-->
            <el-col :span="5">
                <el-select v-model="operator" placeholder="操作符">
                    <el-option
                            v-for="item in operatorList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <!--字段值-->
            <el-col :span="5">
                <el-input v-model="attributeValue" placeholder="属性值"></el-input>
            </el-col>
            <!--操作-->
            <el-col :span="9" class="operation">
                <!--注意：el-button的mouseover和mouseleave不生效的问题：加上.native-->
                <el-button plain
                           :class="{active:enteredAdd}"
                           @click="handleAddFilter"
                           @mouseover.native="handleMouseOver('add')"
                           @mouseleave.native="handleMouseLeave('add')">
                    <i class="el-icon-plus"></i>
                </el-button>
                <el-button plain
                           :class="{active:enteredView}"
                           @mouseover.native="handleMouseOver('view')"
                           @mouseleave.native="handleMouseLeave('view')"
                           @click="handleViewFilterList">
                    <i class="el-icon-view"></i>
                </el-button>
                <el-button plain
                           :class="{active:enteredRefresh}"
                           @mouseover.native="handleMouseOver('refresh')"
                           @mouseleave.native="handleMouseLeave('refresh')"
                           @click="refreshFilter">
                    <i class="el-icon-refresh"></i>
                </el-button>

                <el-dialog
                        :visible.sync="dialogVisible"
                        :modal="false">
                    <li v-for="(item,index) in filterList" :key="index">
                    <span>
                        {{index + 1}}
                        {{item.propertyName}}
                        {{getLabelByValue(item.querySymbol)}}
                        {{item.proValue}}
                    </span>
                    <i class="el-icon-delete" @click="handleDelete(index)"></i>
                    </li>
                </el-dialog>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import CustomDialog from '@/components/Vue/CustomComponents/DialogPanel/CustomDialog.vue'
    export default {
        name: "AddFilter",
        props:{
            attributeNameList: {
                type: Array,
                default: function () {
                    return []
                },
                required: false
            },
        },
        data(){
            return{
                operatorList:[
                    {
                        value: 'Greater',
                        label: '大于'
                    },
                    {
                        value: 'GreaterOrEqual',
                        label: '大于 或 等于'
                    },
                    {
                        value: 'Less',
                        label: '小于'
                    },
                    {
                        value: 'LessOrEqual',
                        label: '小于 或 等于'
                    },
                    {
                        value: 'Equal',
                        label: '等于'
                    },
                    {
                        value: 'NotEqual',
                        label: '不等于'
                    },
                    {
                        value: 'Like',
                        label: '包含'
                    }
                ],

                attributeName:'',
                operator:'',
                attributeValue:'',

                filterList:[],

                enteredAdd:false,
                enteredView:false,
                enteredRefresh:false,

                dialogVisible:false
            }
        },
        methods:{
            handleAddFilter(){
                if (this.attributeName &&
                    this.operator &&
                    (this.attributeValue || this.attributeValue === 0)
                ) {
                    this.validate(this.attributeName,this.operator)
                    this.filterList.push({
                        propertyName: this.attributeName,
                        proValue:this.attributeValue,
                        querySymbol: this.operator
                    })
                }

                this.attributeName=''
                this.operator=''
                this.attributeValue=''
            },
            handleMouseOver(type){
                if (type === 'add'){
                    this.enteredAdd = true
                }else if (type === 'view'){
                    this.enteredView = true
                }else if (type === 'refresh'){
                    this.enteredRefresh = true
                }
            },
            handleMouseLeave(type){
                if (type === 'add'){
                    this.enteredAdd = false
                }else if (type === 'view'){
                    this.enteredView = false
                }else if (type === 'refresh'){
                    this.enteredRefresh = false
                }
            },
            handleViewFilterList(){
                if (this.filterList.length >0){
                    this.dialogVisible = true
                }else{
                    this.$message({
                        message: '尚未添加任何过滤条件！',
                        type: 'warning'
                    });
                }
            },
            getLabelByValue(value){
                let label = ''
                if (value){
                    this.operatorList.forEach(item=>{
                        if (item.value === value){
                            label = item.label
                        }
                    })
                }
                return label
            },
            refreshFilter(){
                this.filterList = []
            },
            handleDelete(index){
                this.filterList = this.filterList.filter((item,index_1)=>{
                    return index_1 != index
                })
            },
            // 校验过滤条件是否违法
            validate(attributeName,operator){
                let legal = true
                if (this.filterList.length > 0){
                    this.filterList.forEach(item=>{
                        // propertyName: this.attributeName,
                        //     proValue:this.attributeValue,
                        //     querySymbol: this.operator

                        // [
                        //     {
                        //         value: 'Greater',
                        //         label: '大于'
                        //     },
                        //     {
                        //         value: 'GreaterOrEqual',
                        //         label: '大于 或 等于'
                        //     },
                        //     {
                        //         value: 'Less',
                        //         label: '小于'
                        //     },
                        //     {
                        //         value: 'LessOrEqual',
                        //         label: '小于 或 等于'
                        //     },
                        //     {
                        //         value: 'Equal',
                        //         label: '等于'
                        //     },
                        //     {
                        //         value: 'NotEqual',
                        //         label: '不等于'
                        //     },
                        //     {
                        //         value: 'Like',
                        //         label: '包含'
                        //     }
                        // ]

                        if (item.propertyName === attributeName ) {
                           if (
                               item.querySymbol ===  operator ||
                               (item.querySymbol === 'Greater' && operator != 'Less' && operator != 'LessOrEqual') ||
                               (item.querySymbol === 'GreaterOrEqual' && operator != 'Less' && operator != 'LessOrEqual') ||
                               (item.querySymbol === 'Less' && operator != 'Greater' && operator != 'GreaterOrEqual') ||
                               (item.querySymbol === 'LessOrEqual' && operator != 'Greater' && operator != 'GreaterOrEqual')
                           ){
                               legal = false
                           }
                        }
                    })
                }
               return legal
            }
        },
        watch:{
            'filterList.length'(newValue){
                if (newValue == 0){
                    this.dialogVisible = false
                }
            }
        }
    }
</script>

<style lang="scss">
    .add-filter-com-wrapper{
        width: 600px;
        .el-input__inner{
            height: 30px;
            line-height: 30px;
            border-radius: unset;
        }
        .el-input__suffix{
            i{
                line-height:30px;
            }
        }
        .el-button{
            padding: 7px 20px;
            border-radius: unset;
        }
        .el-button+.el-button{
            margin: 0;
        }
        .el-col.operation{
            & button{
                position: relative;
                &::before{
                    position: absolute;
                    top: -22px;
                    left: 0px;
                    display: none;
                }
                &.active::before{
                    display: block;
                }
                &:nth-child(1)::before{
                    content: '添加条件';
                }
                &:nth-child(2)::before{
                    content: '查看条件';
                }
                &:nth-child(3)::before{
                    content: '清空条件';
                }
            }
            .el-dialog__wrapper{
                position: absolute;
                top: 35px;
                bottom: unset;
                left: unset;
                .el-dialog{
                    margin-top: 0!important;
                    margin: 0px!important;
                    width: 100%;
                    .el-dialog__header{
                        padding: 0px!important;
                        .el-dialog__headerbtn{
                            top: 5px;
                            right: 5px;
                            float: right;
                        }
                    }
                    .el-dialog__body{
                        padding: 25px 0px 10px;
                        li{
                            text-align: left;
                            display: flex;
                            justify-content: space-between;
                            margin: 8px 12px;
                            i{
                                margin-left: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
