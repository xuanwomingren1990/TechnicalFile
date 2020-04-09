<template>
    <div>
        <!--
        当使用本组件时候，组件标签内的内容，将替代<slot>标签
        -->
        <slot></slot>

    </div>
</template>

<script>
    export default {
        name: "SlotBase"
    }
</script>

<style scoped>

</style>
