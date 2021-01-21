<template>
  <div class="markdown-body">
    <slot></slot>
  </div>
</template>
<script>
import 'github-markdown-css/github-markdown.css'  //样式
import hljs from 'highlight.js'
const highlightCode = () => {
  const preEl = document.querySelectorAll('pre')

  preEl.forEach((el) => {
    hljs.highlightBlock(el)
  })
}
export default {
  name: "MarkDownContainer",
}
</script>

<style lang="scss">
.markdown-body{
  padding: 10px;
  background-color: #fff;
}
</style>

