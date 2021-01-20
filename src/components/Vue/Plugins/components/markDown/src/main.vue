<template>
  <div class="markdown-body">
    <slot></slot>
  </div>
</template>
<script>
import 'github-markdown-css/github-markdown.css'  //导入
export default {
  name: "MarkDownContainer",
}
</script>

<style lang="scss">
.markdown-body{
  width: 100%;
  height: 100%;
  padding: 10px;
  top: 0px;
  background-color: #fff;
}
</style>

