<template>
  <div id="app">
    <ol-map></ol-map>
  </div>
</template>

<script>
  import olMap from './components/olMap.vue'
  export default {
      name: 'app',
      components: {
          olMap
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
