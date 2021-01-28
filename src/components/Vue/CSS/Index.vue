<template>
  <div class="container">
    <div class="buttons">
      <el-row>
        <el-button type="primary" size="small" v-on:click="switchTo('JavascriptVariable')">使用js脚本的样式变量</el-button>
        <el-button type="primary" size="small" v-on:click="switchTo('VariablesInSCSS')">使用scss脚本中的样式变量</el-button>
        <el-button type="primary" size="small" v-on:click="switchTo('ColorFunction')">scss颜色函数</el-button>
      </el-row>
    </div>
    <keep-alive>
      <component v-bind:is="currentTabComponent" v-on:checkout="checkout"></component>
    </keep-alive>


    <!--文档-->
    <MarkDownContainer>
      <MarkDown1></MarkDown1>
    </MarkDownContainer>
<!--    参考：-->
<!--    1.SASS用法指南: http://www.ruanyifeng.com/blog/2012/06/sass.html-->
<!--    2.如何在 SCSS 使用 JavaScript 变量/scss全局变量: https://www.cnblogs.com/fayin/p/10363924.html-->

  </div>
</template>

<script>
import JavascriptVariable from '@/components/Vue/CSS/VariablesInJS.vue'
import VariablesInSCSS from '@/components/Vue/CSS/VariablesInSCSS'
import ColorFunction from '@/components/Vue/CSS/ScssColorFunction.vue'


import MarkDown1 from './markDownFiles/README_1.md'

export default {
  name: "index",
  // 注册组件
  components: {
    JavascriptVariable: JavascriptVariable,
    VariablesInSCSS: VariablesInSCSS,
    ColorFunction: ColorFunction,

    MarkDown1
  },
  data() {
    return {
      currentTabComponent: 'VariablesInSCSS'
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
  overflow-y: scroll;
  height: 100%;

  .buttons {
    display: flex;
    justify-content: center;
  }
}
</style>
