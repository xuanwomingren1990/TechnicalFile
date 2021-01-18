<template>
  <div>
    <div>
      <h4>坐标正算：</h4>
      <div>
        <span style="display: inline-block;width: 300px;">维度B={{B}}</span>
        <span style="display: inline-block;width: 300px;">经度L={{L}}</span>
      </div>
      <div>
        <span style="display: inline-block;width: 300px;">横坐标x={{XY.x}}</span>
        <span style="display: inline-block;width: 300px;">纵坐标y={{XY.y}}</span>
      </div>
    </div>

    <div>
      <h4>坐标反算：</h4>
      <div>
        <span style="display: inline-block;width: 300px;">横坐标x={{x}}</span>
        <span style="display: inline-block;width: 300px;">纵坐标y={{y}}</span>
      </div>
      <div>
        经线度:
        <span>{{BL.L.D}}度</span>
        <span style="margin: 0 20px">{{BL.L.M}}分</span>
        <span>{{BL.L.S}}秒</span>
      </div>
      <div>
        维度:
        <span>{{BL.B.D}}度</span>
        <span style="margin: 0 20px">{{BL.B.M}}分</span>
        <span>{{BL.B.S}}秒</span>
      </div>
    </div>
  </div>
</template>

<script>
import {BL2XY,XY2BL} from './util'

export default {
name: "App",
  data(){
    return{
      // 坐标正算原始经纬度
      B:89.2364,
      L:110.0656,

      // 坐标反算原始坐标
      x:550736.88,
      y:1246280.030000001
    }
  },
  computed:{
    // 坐标正算结果
    XY(){
      return BL2XY(this.B, this.L)
    },
    // 坐标反算结果
    BL(){
      return XY2BL(this.x,this.y)
    }
  }
}
</script>

<style scoped lang="sass">

</style>