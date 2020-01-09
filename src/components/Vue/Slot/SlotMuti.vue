<template>
    <!--通过<slot> 元素的name属性，在一个组件中使用多个插槽-->
    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <!--一个不带 name 的 <slot> 出口会带有隐含的名字“default”。-->
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "SlotMuti"
    }
</script>

<style scoped>

</style>
