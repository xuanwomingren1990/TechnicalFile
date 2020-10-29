<template>
    <div class="add-filter-index">
        <add-filter
        :attributeNameList="attributeNameList"
        :width="700"
        @add="handleAddFilter"
        @search="handleSearch"></add-filter>
    </div>
</template>

<script>
    import AddFilter from './AddFilter.vue'
    export default {
        name: "Index",
        components:{
            AddFilter
        },
        data(){
            return{
                attributeNameList:[{
                    value: 'attr1',
                    label: '属性1'
                },{
                    value: 'attr2',
                    label: '属性2'
                },{
                    value: 'attr3',
                    label: '属性3'
                },{
                    value: 'attr4',
                    label: '属性4'
                },{
                    value: 'attr5',
                    label: '属性5'
                }],

                filterList:[]
            }
        },
        methods:{
            handleAddFilter(filterList){
                this.filterList = filterList
            },
            handleSearch(){
                console.log('-------handleSearch--------')
            }
        }
    }
</script>

<style scoped>
    .add-filter-index{
        min-height: 80%;
        background-color: #8d8d8d;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
