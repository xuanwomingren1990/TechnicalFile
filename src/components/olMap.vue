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
        name: "olMap",
        data () {
            return {
                map: null
            }
        },
        mounted() {
            // var mapcontainer = this.$refs.rootmap;
            this.map = new Map({
                target: "map",
                layers: [
                    new TileLayer({
                        source: new OSM()
                    })
                ],
                view: new View({
                    projection: "EPSG:4326",    //使用这个坐标系
                    center: [114.064839,22.548857],  //深圳
                    zoom: 12
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
