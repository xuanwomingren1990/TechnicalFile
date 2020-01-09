<template>
    <div>
        <span>
            <!--为了让本组件中的属性可以在父组件中，向本插槽传递内容时使用，我们可以将 user 作为 <slot> 元素的一个特性绑定上去：-->
            <slot v-bind:user="user"></slot>

            <slot name="slot2" v-bind:user="user"></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "SlotWithProperty",
        data () {
            return {
                user : '张三'
            }
        }
    }
</script>

<style scoped>

</style>
