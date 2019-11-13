<template>
    <div id="map" ref="rootmap"></div>
</template>

<script>
    // 引入樣式文件
    import "ol/ol.css";
    // 引入需要的模塊
    import { Map, View } from "ol";
    import TileLayer from "ol/layer/Tile";
    import OSM from "ol/source/OSM";
    export default {
        name: "Map",
        data () {
            return {
                // 定义map,便于重复调用
                map: null
            }
        },
        // 在mounted钩子中创建地图实例
        mounted() {
            // var mapcontainer = this.$refs.rootmap;

            //创建地图
            this.map = new Map({
                /**1.让id为map的div作为地图的容器*/
                target: "map",
                /**2. 设置地图图层*/
                layers: [
                    //创建一个使用Open Street Map地图源的瓦片图层
                    new TileLayer({
                        source: new OSM()
                    })
                ],
                /**3. 设置显示地图的视图*/
                view: new View({
                    // ol默认使用的是EPSG:3857坐标(伪墨卡托投影，投影坐标系)；
                    projection: "EPSG:4326",    //wgs84地理坐标系(经度、维度、大地高)
                    center: [114.064839,22.548857],  //定义地图显示中心(深圳)
                    zoom: 12// 定义地图显示层级为12
                })
            });
        }
    }
</script>

<style scoped>
    #map{height:100%;}
    /*隐藏ol的一些自带元素*/
    /*.ol-attribution,.ol-zoom { display: none;}*/
</style>

<!--在vue中使用openlayers-->
<!--
建立地圖組建olMap.vue;
引入ol.css樣式
引入需要的模塊
-->
