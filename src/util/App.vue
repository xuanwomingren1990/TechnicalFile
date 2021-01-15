<template>
  <div>
    <div>
      <span>B={{B}}</span>
      <span style="display: inline-block;width: 20px;"></span>
      <span>L={{L}}</span>
    </div>
    <div>
      <span>x={{result.x}}</span>
      <span style="display: inline-block;width: 20px;"></span>
      <span>y={{result.y}}</span>
    </div>
  </div>
</template>

<script>
import {BL2XY} from './util'
export default {
name: "App",
  data(){
    return{
      B:30.45,
      L:114.45
    }
  },
  computed:{
    result(){
      return BL2XY(this.B,this.L,114)
    }
  }
}
</script>

<style scoped>

</style>