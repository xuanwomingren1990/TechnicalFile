<template>
    <div>
        <!--
        当使用本组件时候，组件标签内的内容，将替代<slot>标签
        例如：使用组件，‘Your Profile’ 将替换<slot>标签
        <slot-base url="/profile">
            Your Profile
        </slot-base>
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
