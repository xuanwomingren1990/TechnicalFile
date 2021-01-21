<template>
  <div style="height: 100%;overflow: scroll">

    <!---------------------------------相对于body元素居中的对话框------------------------------------>
    <MarkDownContainer>
      <MarkDown1></MarkDown1>
    </MarkDownContainer>
    <div class="dialog-panel-container">
      <el-row style="display: flex;justify-content: center">
        <el-button size="small" type="primary" @click="isShowDialog1=true">相对于body居中</el-button>
      </el-row>
      <!--对话框组件-->
      <dialog-panel1 :isShowDialog="isShowDialog1" @close="closeDialog1">
        <h1>默认相对body元素居中的对话框</h1>
      </dialog-panel1>
    </div>


    <!---------------------------------相对于body元素自定义位置的对话框------------------------------------>
    <MarkDownContainer>
      <MarkDown2></MarkDown2>
    </MarkDownContainer>
    <div class="dialog-panel-container">
      <el-row style="display: flex;justify-content: center">
        <el-button size="small" type="primary" @click="isShowDialog2=true">自定义位置的对话框</el-button>
      </el-row>
      <!--对话框组件-->
      <DialogPanel2
          :showClose="true"
          :useCustomPosition="true"
          :customClass="'custom-dialog-custom-location'"
          :top="'20px'"
          :right="'100px'"
          :isShowDialog="isShowDialog2" @close="closeCustom">
        <h1>相对于body自定义位置的对话框</h1>
      </DialogPanel2>
    </div>
  </div>
</template>

<script>
import DialogPanel1 from './DialogPanel1'
import DialogPanel2 from './DialogPanel2'

import MarkDown1 from './markDownFiles/README_1.md'
import MarkDown2 from './markDownFiles/README_2.md'

export default {
  name: "index",
  components: {
    DialogPanel1,
    DialogPanel2,

    MarkDown1,
    MarkDown2
  },
  data() {
    return {
      isShowDialog1: false,
      isShowDialog2: false
    }
  },
  methods: {
    closeDialog1() {
      this.isShowDialog1 = false
    },
    closeCustom() {
      this.isShowDialog2 = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .dialog-panel-container {
    height: 30vh;
    background-color: #8d8d8d;
    margin: 10px;
    padding: 10px;

}
</style>


