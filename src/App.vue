<template>
  <div id="app">
    <div class="router-links">
      <el-collapse class="collapse_level_first">
        <!------------------------------------前端--------------------------------------->
        <el-collapse-item title="前端">
          <el-collapse class="collapse_level_second">
            <el-collapse-item title="Vue">
              <router-link class="link-item" to="/vue/ArchiveComponent">动态组件</router-link>
              <router-link class="link-item" to="/vue/SlotIndex">插槽</router-link>

              <el-collapse class="collapse_level_third">
                <el-collapse-item title="自定义组件">
                  <router-link class="link-item" to="/vue/AbsolutePanel">绝对定位组件</router-link>
                  <router-link class="link-item" to="/vue/DialogPanel">对话框</router-link>
                </el-collapse-item>
              </el-collapse>

              <router-link class="link-item" to="/vue/Plugins">插件</router-link>
              <router-link class="link-item" to="/vue/CSS">SCASS</router-link>
            </el-collapse-item>
            <el-collapse-item title="Echarts">
              <router-link class="link-item" to="/EChart/K">K线图</router-link>
              <router-link class="link-item" to="/EChart/Doc">文档</router-link>
            </el-collapse-item>
          </el-collapse>
        </el-collapse-item>
        <!---------------------------------------后台------------------------------------>
        <el-collapse-item title="后台">
          <el-collapse class="collapse_level_second">
            <el-collapse-item title="Node">
              <router-link class="link-item" to="/NPM">NPM</router-link>
            </el-collapse-item>
            <router-link class="link-item" to="/JsonServer">JsonServer</router-link>
          </el-collapse>
        </el-collapse-item>
        <!--------------------------------------GIS------------------------------------------>
        <el-collapse-item title="GIS">
          <el-collapse class="collapse_level_second">
            <el-collapse-item title="OpenLayers">
              <el-collapse class="collapse_level_third">
                <!--Map-->
                <el-collapse-item title="Map">
                  <router-link class="link-item" to="/olMap">地图基础</router-link>
                  <router-link class="link-item" to="/MapExchange">动态交换地图</router-link>
                  <router-link class="link-item" to="/MapLinkage">地图联动</router-link>
                </el-collapse-item>
                <!--View-->
                <el-collapse-item title="View">
                  <router-link class="link-item" to="/ViewNavigation">地图导航</router-link>
                  <router-link class="link-item" to="/ViewExtent">限制地图范围</router-link>
                  <router-link class="link-item" to="/ViewMinMaxZoom">限制地图缩放级别</router-link>
                  <router-link class="link-item" to="/ViewFitExtent">自适配区域</router-link>
                </el-collapse-item>
                <!--Source和Layer-->
                <el-collapse-item title="Source和Layer">
                  <el-collapse class="collapse_level_forth">
                    <el-collapse-item title="Tile-Source">
                      <router-link class="link-item" to="/TileSourceOnline">最简单的加载在线地图</router-link>
                      <router-link class="link-item" to="/TileSourceXYZ">XYZ-在线瓦片地图</router-link>
                      <router-link class="link-item" to="/TileSourceXYZ/Baidu/Test">XYZ-百度地图1
                      </router-link>
                      <router-link class="link-item" to="/TileSourceXYZ/Baidu/Formal">XYZ-百度地图2
                      </router-link>
                      <router-link class="link-item" to="/TileSourceXYZ_Baidu_1">XYZ-百度地图3</router-link>
                    </el-collapse-item>
                    <el-collapse-item title="WMS-Source">
                      <router-link class="link-item" to="/WMS">WMS服务</router-link>
                    </el-collapse-item>
                  </el-collapse>
                </el-collapse-item>

                <el-collapse-item title="geoserver服务">
                  <router-link class="link-item" to="/Geoserver/WFS">getFeature</router-link>
                </el-collapse-item>

                <!--Control-->
                <el-collapse-item title="Control">
                  <router-link class="link-item" to="/ControlIndex">控件基础</router-link>
                </el-collapse-item>

                <!--Overlay-->
                <el-collapse-item title="Overlay">
                  <router-link class="link-item" to="/OverLay/DiffusedCircle">扩散的圆</router-link>
                </el-collapse-item>
              </el-collapse>
            </el-collapse-item>
          </el-collapse>
        </el-collapse-item>
        <!--------------------------------------其他------------------------------------------>
        <el-collapse-item title="日常">
          <el-collapse class="collapse_level_second">
            <router-link class="link-item" to="/Other/DigitalCash">数字货币</router-link>
          </el-collapse>
        </el-collapse-item>
        <!--------------------------------------测试-------------------------------------------->
        <el-collapse-item title="测试">
          <router-link class="link-item" to="/ModuleTest/Test">模块测试</router-link>
        </el-collapse-item>
      </el-collapse>
    </div>

    <div class="map-components">
<!--      <el-button-->
<!--          type="primary" size="mini" v-on:click="showNotes" style="-->
<!--              z-index: 99;-->
<!--              position: absolute;-->
<!--              left: 185px;-->
<!--              bottom: 5px;">-->
<!--        查看注记-->
<!--      </el-button>-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    // 切换笔记框的显示与隐藏
    showNotes() {
      var notes = document.getElementsByClassName('notes')
      for (let i = 0; i < notes.length; i++) {
        if (notes[i].className.indexOf('hidden') >= 0) {
          notes[i].classList.remove('hidden')
        } else {
          notes[i].classList.add('hidden')
        }
      }
    }
  },
  components: {},
  mounted() {
    this.showNotes()
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

html, body {
  height: 100%;
  overflow-y: hidden;
}

#app {
  height: 100%;
  width: 100%;
  display: flex;

  .router-links {
    width: 16%;
    height: 100%;
    background-color: #c7dbff;
    overflow-y: scroll;

    .el-collapse {
      .el-collapse-item {
        .el-collapse-item__header {
          padding-left: 10px;
        }

        .el-collapse-item__wrap {
          .el-collapse-item__content {
            margin-left: 15px;
          }
        }
      }

      &.collapse_level_first {
        .el-collapse-item__header {
          font-size: 16px;
          font-weight: bold;
          color: #76bbff;
        }

        .collapse_level_second {
          .el-collapse-item__header {
            font-size: 14px;
            font-weight: bold;
            color: #000;
          }

          .collapse_level_third {
            .el-collapse-item__header {
              font-size: unset;
              font-weight: unset;
            }
          }
        }
      }
    }


    .link-item {
      display: block;
      margin-left: 10px;
    }
  }

  .map-components {
    width: 83%;
    height: 100%;
  }
}

/*笔记框样式*/
.notes {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 90;
  background-color: white;
  width: 50%;
}

.notes.hidden {
  display: none;
}
</style>
