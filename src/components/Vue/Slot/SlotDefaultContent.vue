<template>
    <div>
        <!--给插槽添加默认内容-->
        <slot>这是给插槽预先设置的默认内容</slot>
    </div>
</template>

<script>
    export default {
        name: "SlotDefaultContent"
    }
</script>

<style scoped>

</style>
