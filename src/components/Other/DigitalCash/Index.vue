<template>
  <div class="container">
    <!--文档-->
    <MarkDownContainer>
      <MarkDown1></MarkDown1>
    </MarkDownContainer>

  </div>
</template>

<script>

import MarkDown1 from './markDownFiles/README_1.md'

export default {
  name: "index",
  components: {
    MarkDown1
  },
  methods: {
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
