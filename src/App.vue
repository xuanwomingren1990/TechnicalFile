<template>
  <div id="app">
    <div class="router-links">
      <el-collapse>
        <!--Map-->
        <el-collapse-item title="Map" name="1">
          <router-link class="link-item" to="/olMap">地图基础</router-link>
          <router-link class="link-item" to="/MapExchange">动态交换地图</router-link>
          <router-link class="link-item" to="/MapLinkage">地图联动</router-link>
        </el-collapse-item>

        <!--View-->
        <el-collapse-item title="View" name="2">
          <router-link class="link-item" to="/ViewNavigation">地图导航</router-link>
          <router-link class="link-item" to="/ViewExtent">限制地图范围</router-link>
          <router-link class="link-item" to="/ViewMinMaxZoom">限制地图缩放级别</router-link>
          <router-link class="link-item" to="/ViewFitExtent">自适配区域</router-link>
        </el-collapse-item>

        <!--Source和Layer-->
        <el-collapse-item title="Source和Layer" name="3">
          <el-collapse>
            <el-collapse-item title="TileSource" name="31">
              <router-link class="link-item" to="/TileSourceOnline">最简单的加载在线地图</router-link>
              <router-link class="link-item" to="/TileSourceXYZ">XYZ加载在线瓦片地图</router-link>
              <router-link class="link-item" to="/TileSourceXYZ/Baidu/Test">XYZ加载百度地图(测试)</router-link>
              <router-link class="link-item" to="/TileSourceXYZ/Baidu/Formal">XYZ加载百度地图(正式)</router-link>
              <router-link class="link-item" to="/TileSourceTileImage">TileSourceTileImage加载百度地图</router-link>
            </el-collapse-item>
          </el-collapse>
        </el-collapse-item>

        <!--Control-->
        <el-collapse-item title="Control" name="4">
          <router-link class="link-item" to="/ControlIndex">控件基础</router-link>
        </el-collapse-item>

        <!--VUE部分-->
          <el-collapse-item title="vue案例" name="5">
              <router-link class="link-item" to="/vue/ArchiveComponent">动态组件</router-link>
              <router-link class="link-item" to="/vue/SlotIndex">插槽</router-link>
              <router-link class="link-item" to="/vue/WatchIndex">监听器</router-link>
          </el-collapse-item>
      </el-collapse>
    </div>
    <div class="map-components">
      <el-button
              type="primary" size="mini" v-on:click="showNotes" style="
              z-index: 99;
              position: absolute;
              top: 65px;
              margin-left: 10px;">
        查看注记
      </el-button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'app',
      methods: {
          // 切换笔记框的显示与隐藏
          showNotes(){
              var notes = document.getElementsByClassName('notes')
              for (let i = 0; i < notes.length; i++) {
                  if (notes[i].className.indexOf('hidden') >= 0) {
                      notes[i].classList.remove('hidden')
                  }else {
                      notes[i].classList.add('hidden')
                  }
              }
          }
      },
      components: {
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
    width: 100%;
    display: flex;
    .router-links{
      width: 12%;
      height: 100%;
      background-color: #c7dbff;
      .el-collapse{
        .el-collapse-item{
            .el-collapse-item__header{
                padding-left: 23px;
            }
          .el-collapse-item__wrap{
            .el-collapse-item__content{
              margin-left: 15px;
                padding-left: 15px;
            }
          }
        }
      }
      .link-item{
        display: block;
      }
    }
    .map-components{
      width: 85%;
      height: 100%;
    }
  }

  /*笔记框样式*/
  .notes{
    position: absolute;
    right: 10px;
    top:10px;
    z-index: 999999999;
    background-color: white;
    width: 50%;
  }
  .notes.hidden{
    display: none;
  }
</style>
