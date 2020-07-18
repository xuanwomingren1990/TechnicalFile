<template>
<div>
    <div style="display: flex;flex-direction: column;align-items: center">
        <!--1.包含插槽的组件-->
        <slot-base>
            <!--组件标签内的内容将替换组件的插槽<slot>-->
            <!--填充的内容可以是文本，组件实例属性，html，其他组件等-->
            填充内容： {{data1}}
        </slot-base>

        <hr>

        <!--2.包含默认内容的插槽组件-->
        <!--当不向插槽组件中填充内容时，插槽组件中<slot>标签中的内容将得到展示-->
        <slot-default-content></slot-default-content>
        <!--当向插槽组件中填充内容后，将覆盖掉整个<slot>标签-->
        <slot-default-content>覆盖掉整个slot标签</slot-default-content>

        <hr>

        <!--3.包含多个插槽的组件-->
        <!--在向具名插槽组件填充内容的时候，我们可以在一个 <template> 元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供其名称：-->
        <slot-multi>
            <template v-slot:header>
                <h1>name为header的插槽的内容</h1>
            </template>

            <template v-slot:default>
                <h1>插槽的默认名称为default</h1>
            </template>

            <template v-slot:footer>
                <h1>name为footer的插槽的内容</h1>
            </template>
        </slot-multi>


        <hr>

        <!--4.向插槽组件填充内容时，访问插槽组件中的数据-->
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
    插槽用于在组件中占坑。即：
    预先保留一个位置；
    当不向插槽组件标签中填充内容时，保留的位置将不占据任何空间；
    当向插槽组件标签中填充内容后，这些内容将被放在插槽所在的位置。

    应用案例：
    设计弹出框时，标题、边框、关闭按钮等可以写死；
    但是弹出框要展示的内容是动态的，这时就可以利用插槽来为这些内容预留位置。


    Vue2.6.0中使用v-slot指令取代了特殊特性slot与slot-scope，v-slot在使用时，需要在template标签内，这点大家要注意。
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
                data1: '插槽用于占坑，可以向里面填充内容'
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

<style scoped lang="scss">
    hr{
        align:center ;
        width:100% ;
        margin: 10px 0;
    }
</style>
