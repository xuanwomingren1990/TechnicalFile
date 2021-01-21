<template>
  <div>
    <MarkDownContainer>
      <MarkDownFile></MarkDownFile>
    </MarkDownContainer>

    <div style="display: flex;flex-direction: column;align-items: center">
      <!------------------------1.包含插槽的组件---------------------------->
      <slot-base>
        <!--组件标签内的内容将替换组件的插槽<slot>-->
        <!--填充的内容可以是文本，组件实例属性，html，其他组件等-->
        {{ data1 }}
      </slot-base>

      <hr>

      <!------------------------2.包含默认内容的插槽组件---------------------->
      <!--当不向插槽组件中填充内容时，插槽组件中<slot>标签中的内容将得到展示-->
      <slot-default-content></slot-default-content>
      <!--当向插槽组件中填充内容后，将覆盖掉整个<slot>标签-->
      <slot-default-content>给插槽组件填充的内容将覆盖掉默认内容</slot-default-content>

      <hr>

      <!-------------------------3.包含多个插槽的组件----------------------->
      <!--在向具名插槽组件填充内容的时候，我们可以在一个 <template> 元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供其名称：-->
      <slot-multi>
        <template v-slot:header>
          <span>name为header的插槽</span>
        </template>

        <template v-slot:default>
          <span>插槽的默认名称为default</span>
        </template>

        <template v-slot:footer>
          <span>name为footer的插槽</span>
        </template>
      </slot-multi>


      <hr>

      <!-------------------------4.向插槽组件填充内容时，可以访问插槽组件中的数据------------------>
      <slot-with-property>
        <!--slotProps对象，它包含所有绑定在default插槽的特性-->
        <template v-slot:default="slotProps">
          {{ slotProps.user }}
        </template>

        <!--可以使用结构来解析slotProps对象-->
        <!--结构语法参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E8%A7%A3%E6%9E%84%E5%AF%B9%E8%B1%A1-->
        <template v-slot:slot2="{user}">
          <div>{{ user }}</div>
        </template>
      </slot-with-property>
    </div>
  </div>
</template>

<script>
import SlotBase from './SlotBase'
import SlotDefaultContent from './SlotDefaultContent'
import SlotMulti from './SlotMuti'
import SlotWithProperty from './SlotWithProperty'
import MarkDownFile from './README.md'

export default {
  name: "Index",
  data() {
    return {
      data1: '这是给插槽填充的内容'
    }
  },
  components: {
    SlotBase: SlotBase,
    SlotDefaultContent: SlotDefaultContent,
    SlotMulti: SlotMulti,
    SlotWithProperty: SlotWithProperty,

    MarkDownFile
  }
}
</script>

<style scoped lang="scss">
hr {
  align: center;
  width: 100%;
  margin: 30px 0;
}
</style>
