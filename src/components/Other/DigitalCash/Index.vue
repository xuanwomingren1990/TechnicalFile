<template>
  <div class="container">
    <el-dropdown split-button type="primary" @command="handleClick">
      更多菜单
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
            v-for="(item,index) in menus"
            :key="index"
            :command="item.value"
        >{{item.title}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!--文档-->
    <MarkDownContainer  v-show="docName == 'MarkDown1'">
      <MarkDown1></MarkDown1>
    </MarkDownContainer>
    <MarkDownContainer  v-show="docName == 'MarkDown2'">
      <MarkDown2></MarkDown2>
    </MarkDownContainer>

  </div>
</template>

<script>

import MarkDown1 from './markDownFiles/file1/README_1.md'//资金流入流出图
import MarkDown2 from './markDownFiles/file2/README_2.md'//资金流入情况

export default {
  name: "index",
  components: {
    MarkDown1,
    MarkDown2
  },
  data(){
    return {
      docName:'MarkDown1',
      menus:[
        {
          value:'MarkDown1',
          title:'资金流入流出图'
        },
        {
          value:'MarkDown2',
          title:'资金流入情况'
        }
      ]
    }
  },
  methods: {
    handleClick(value){
      this.docName = value
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  overflow-y: scroll;
  height: 100%;

  .el-dropdown{
    position: fixed;
    top: 10px;
    right: 10px;
  }
}
</style>
