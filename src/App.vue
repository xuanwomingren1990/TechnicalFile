<template>
  <div id="app">
    <!--<ol-map></ol-map>-->
    <control-index></control-index>
  </div>
</template>

<script>
  import olMap from './components/olMap.vue'
  import controlIndex from './components/controls/controlIndex.vue'
  export default {
      name: 'app',
      components: {
          // olMap,
          controlIndex
      }
  }
</script>

<style lang="scss">
  *{
    padding:0;
    margin:0;}
  html,body{
    height: 100%;
  }
  #app {
    height: 100%;
  }
</style>
