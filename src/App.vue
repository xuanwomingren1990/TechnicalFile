<template>
  <div id="app">
    <!--<ol-map>地图基本</ol-map>-->
    <!--<control-index>控件基础</control-index>-->
    <!--<map-linkage>地图联动</map-linkage>-->
    <!--<map-exchange></map-exchange>-->
    <view-navigation></view-navigation>
  </div>
</template>

<script>
  import olMap from './components/Map.vue'
  import ControlIndex from './components/controls/ControlIndex.vue'
  import MapLinkage from './components/map/MapLinkage.vue'
  import MapExchange from './components/map/MapExchange.vue'
  import ViewNavigation from './components/view/ViewNavigation.vue'
  export default {
      name: 'app',
      components: {
          olMap,//地图基本
          ControlIndex,//控件基础
          MapLinkage,//地图联动
          MapExchange,//动态交换地图
          ViewNavigation//导航
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
