<template>
  <div class="container">
    <div class="buttons">
      <!--在父组件中切换动态组件-->
      <el-row>
        <el-button type="primary" size="small" v-on:click="switchTo('TabComponent_A')">组件A</el-button>
        <el-button type="primary" size="small" v-on:click="switchTo('TabComponent_B')">组件B</el-button>
      </el-row>
    </div>
    <!--动态组件-->
    <!--1.组件会在 `currentTabComponent` 改变时切换-->
    <!--2.切换掉的组件实例将被移除掉，当切换回来的时候，将重新创建一个该组件的实例-->
    <!--<component v-bind:is="currentTabComponent"></component>-->

    <!--在动态组件上使用 keep-alive-->
    <!--1.切换掉的组件实例将保留在内存中，当切换回来的时候，不会重新创建；从而可以保留它的状态或避免重新渲染-->
    <!--2.配合被切换组件的 'activated' 钩子，可一实现起 组件延迟加载的作用-->
    <keep-alive>
      <component v-bind:is="currentTabComponent" v-on:checkout="checkout"></component>
    </keep-alive>

    <!--  查看文档-->
    <MarkDownContainer>
      <MarkDownFile></MarkDownFile>
    </MarkDownContainer>

  </div>
</template>

<script>
import MarkDownFile from './README.md'

import TabComponent_A from './TabComponentA'
import TabComponent_B from './TabComponentB'

export default {
  name: "index",
  // 注册组件
  components: {
    TabComponent_A: TabComponent_A,
    TabComponent_B: TabComponent_B,

    MarkDownFile
  },
  data() {
    return {
      currentTabComponent: 'TabComponent_A'
    }
  },
  methods: {
    switchTo(value) {
      this.currentTabComponent = value
    },
    checkout(val) {
      this.switchTo(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .buttons {
    display: flex;
    justify-content: center;
  }
}
</style>
