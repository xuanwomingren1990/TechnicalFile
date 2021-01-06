<template>
    <div id="app">
        <div class="router-links">
            <el-collapse class="collapse_level_1">
                <el-collapse-item title="Vue" name="1">
                    <router-link class="link-item" to="/vue/ArchiveComponent">动态组件</router-link>
                    <router-link class="link-item" to="/vue/SlotIndex">插槽</router-link>
                    <router-link class="link-item" to="/vue/WatchIndex">监听器</router-link>
                    <router-link class="link-item" to="/vue/Components">自定义组件</router-link>
                    <router-link class="link-item" to="/vue/Plugins">插件</router-link>
                    <router-link class="link-item" to="/vue/CSS">SCASS</router-link>
                    <router-link class="link-item" to="/vue/ExternalComponent">外部组件</router-link>
                </el-collapse-item>

                <el-collapse-item title="OpenLayers" name="2">
                    <el-collapse class="collapse_level_2">
                        <!--Map-->
                        <el-collapse-item title="Map" name="2-1">
                            <router-link class="link-item" to="/olMap">地图基础</router-link>
                            <router-link class="link-item" to="/MapExchange">动态交换地图</router-link>
                            <router-link class="link-item" to="/MapLinkage">地图联动</router-link>
                        </el-collapse-item>
                        <!--View-->
                        <el-collapse-item title="View" name="2-2">
                            <router-link class="link-item" to="/ViewNavigation">地图导航</router-link>
                            <router-link class="link-item" to="/ViewExtent">限制地图范围</router-link>
                            <router-link class="link-item" to="/ViewMinMaxZoom">限制地图缩放级别</router-link>
                            <router-link class="link-item" to="/ViewFitExtent">自适配区域</router-link>
                        </el-collapse-item>
                        <!--Source和Layer-->
                        <el-collapse-item title="Source和Layer" name="2-3">
                            <el-collapse class="collapse_level_3">
                                <el-collapse-item title="Tile-Source" name="2-3-1">
                                    <router-link class="link-item" to="/TileSourceOnline">最简单的加载在线地图</router-link>
                                    <router-link class="link-item" to="/TileSourceXYZ">XYZ-在线瓦片地图</router-link>
                                    <router-link class="link-item" to="/TileSourceXYZ/Baidu/Test">XYZ-百度地图1
                                    </router-link>
                                    <router-link class="link-item" to="/TileSourceXYZ/Baidu/Formal">XYZ-百度地图2
                                    </router-link>
                                    <router-link class="link-item" to="/TileSourceXYZ_Baidu_1">XYZ-百度地图3</router-link>
                                </el-collapse-item>
                                <el-collapse-item title="WMS-Source" name="2-3-2">
                                    <router-link class="link-item" to="/WMS">WMS服务</router-link>
                                </el-collapse-item>
                            </el-collapse>
                        </el-collapse-item>

                        <el-collapse-item title="geoserver服务" name="2-4">
                            <router-link class="link-item" to="/Geoserver/WFS">getFeature</router-link>
                        </el-collapse-item>

                        <!--Control-->
                        <el-collapse-item title="Control" name="2-5">
                            <router-link class="link-item" to="/ControlIndex">控件基础</router-link>
                        </el-collapse-item>

                        <!--Overlay-->
                        <el-collapse-item title="Overlay" name="2-6">
                            <router-link class="link-item" to="/OverLay/DiffusedCircle">扩散的圆</router-link>
                        </el-collapse-item>
                    </el-collapse>
                </el-collapse-item>

                <el-collapse-item title="Echarts" name="3">
                    <router-link class="link-item" to="/EChart/K">K线图</router-link>
                </el-collapse-item>
            </el-collapse>
        </div>

        <div class="map-components">
            <el-button
                    type="primary" size="mini" v-on:click="showNotes" style="
              z-index: 99;
              position: absolute;
              left: 185px;
              bottom: 5px;">
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
        components: {}
    }
</script>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
    }

    html, body {
        height: 100%;
    }

    #app {
        height: 100%;
        width: 100%;
        display: flex;
        .router-links {
            width: 12%;
            min-width: 200px;
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
                &.collapse_level_1 {
                    .el-collapse-item__header {
                        font-size: 16px;
                        font-weight: bold;
                        color: #76bbff;
                    }
                    .collapse_level_2 {
                        .el-collapse-item__header {
                            font-size: 14px;
                            font-weight: bold;
                            color: #000;
                        }
                        .collapse_level_3 {
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
            width: 88%;
            height: 100%;
        }
    }

    /*笔记框样式*/
    .notes {
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 999999999;
        background-color: white;
        width: 50%;
    }

    .notes.hidden {
        display: none;
    }
</style>
