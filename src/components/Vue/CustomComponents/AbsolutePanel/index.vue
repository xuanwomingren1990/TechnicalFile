<template>
  <div class="absolutePanel-root">
    <MarkDownContainer>
      <MarkDown1></MarkDown1>
    </MarkDownContainer>


    <!--父盒子相对定位-->
    <div class="absolute-panel-container">
      <!--绝对定位组件-->
      <absolute-panel :top=" '200px' " :left="'100px'">
        <!--嵌入要展示的内容-->
        <div style="width: 100px;height: 80px;background-color: #2ff5ff"></div>
      </absolute-panel>
    </div>

  </div>
</template>

<script>
import MarkDown1 from './MarkDowns/README_1.md'


import AbsolutePanel from './AbsolutePanel'

export default {
  name: "index",
  components: {
    AbsolutePanel,

    MarkDown1
  }
}
</script>

<style lang="scss" scoped>
.absolutePanel-root {
  .absolute-panel-container {
    position: relative;
    height: 20vw;
    background-color: #8d8d8d;
    margin: 0 10px;
  }
}
</style>
