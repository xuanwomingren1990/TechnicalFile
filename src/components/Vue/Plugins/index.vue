<template>
    <div class="demos-plugin-container">
        <div class="demo-method-setAnimation">setAnimation</div>
    </div>
</template>

<script>
    export default {
        name: "index",
        mounted(){
            // $vue.setAnimation()
            this.$setAnimation('demo-method-setAnimation','flash',null,function (dom) {
                console.log(dom)
            })
        }
    }
</script>

<style scoped lang="scss">
.demos-plugin-container{
    width: 100%;
    height: 100%;
    background-color: #e1e1db;
    .demo-method-setAnimation{
        background-color: #2ff5ff;
        display: inline-block;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
    }
}
</style>
