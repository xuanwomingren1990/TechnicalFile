<template>
<div>
    <div style="display: flex;flex-direction: column;align-items: center">
        <!--1.包含插槽的组件-->
        <slot-base>
            <!--组件标签的的内容将替换组件的插槽<slot>-->
            <!--可以是文本，组件实例属性，html，其他组件等-->
            填充内容： {{data1}}
        </slot-base>

        <!--2.包含默认内容的插槽组件-->
        <!--当不提供任何插槽内容时，将显示插槽的默认内容-->
        <slot-default-content></slot-default-content>
        <!--提供插槽内容，则会覆盖的默认内容-->
        <slot-default-content>覆盖默认内容</slot-default-content>

        <!--3.包含多个插槽的组件-->
        <!--在向具名插槽提供内容的时候，我们可以在一个 <template> 元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供其名称：-->
        <slot-multi>
            <template v-slot:header>
                <h1>name为header的插槽的内容</h1>
            </template>

            <template v-slot:default>
                <h1>默认插槽的内容</h1>
            </template>

            <template v-slot:footer>
                <h1>name为footer的插槽的内容</h1>
            </template>
        </slot-multi>

        <!--4.向插槽传递内容时，在内容中访问插槽组件中的数据-->
        <slot-with-property>
            <!--slotProps对象包含所有绑定在default插槽的特性-->
            <template v-slot:default="slotProps">
                {{ slotProps.user }}
            </template>

            <!--可以使用结构来解析slotProps对象-->
            <!--结构语法参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E8%A7%A3%E6%9E%84%E5%AF%B9%E8%B1%A1-->
            <template v-slot:slot2="{user}">
                {{ user }}
            </template>
        </slot-with-property>
    </div>



<!-------------------笔记------------------>
<div class="notes hidden">
<pre>
    <!--&lt;div&gt;&lt;/div&gt;-->
</pre>
</div>
<!-------------------笔记---------------->

</div>
</template>

<script>
    import SlotBase from './SlotBase'
    import SlotDefaultContent from './SlotDefaultContent'
    import SlotMulti from './SlotMuti'
    import SlotWithProperty from './SlotWithProperty'
    export default {
        name: "Index",
        data () {
            return {
                data1: 'aaaaaa'
            }
        },
        components: {
            SlotBase: SlotBase,
            SlotDefaultContent: SlotDefaultContent,
            SlotMulti: SlotMulti,
            SlotWithProperty: SlotWithProperty
        }
    }
</script>

<style scoped>

</style>
