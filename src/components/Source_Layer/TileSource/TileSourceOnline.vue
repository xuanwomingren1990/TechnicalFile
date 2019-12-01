<template>
    <div id="map" ref="rootmap">
        <div class="radios">
            <el-radio v-model="radio" label="openStreetMapLayer">openStreetMap地图</el-radio>
            <el-radio v-model="radio" label="bingMapLayer">Bing地图</el-radio>
        </div>
<!-------------------笔记------------------>
<div class="notes hidden">
<pre>
    <!--&lt;div&gt;&lt;/div&gt;-->
</pre>
</div>
<!-------------------笔记---------------->
    </div>
</template>

<script>
    import "ol/ol.css";
    import { Map, View } from "ol";
    import TileLayer from "ol/layer/Tile";
    import BingMaps from 'ol/source/BingMaps';
    import Stamen from 'ol/source/Stamen';
    import OSM from "ol/source/OSM";
    export default {
        name: "Map",
        data () {
            return {
                map: null,
                openStreetMapLayer: null,
                bingMapLayer: null,
                stamenLayer: null,

                radio: 'openStreetMapLayer'
            }
        },
        mounted() {
            // Open Street Map 地图层
            this.openStreetMapLayer = new TileLayer({
                source: new OSM()
            });

            // Bing地图层
            this.bingMapLayer = new TileLayer({
                source: new BingMaps({
                    key: 'AkjzA7OhS4MIBjutL21bkAop7dc41HSE0CNTR5c6HJy8JKc7U9U9RveWJrylD3XJ',
                    imagerySet: 'Road'
                })
            });

            // Stamen地图层
            this.stamenLayer = new TileLayer({
                source: new Stamen({
                    layer: 'watercolor'
                })
            });

            this.map = new Map({
                target: "map",
                layers: [
                    this.stamenLayer
                ],

                view: new View({
                    projection: "EPSG:4326",
                    center: [114.064839,22.548857],
                    zoom: 12
                })
            });
        }
    }
</script>

<style lang="scss" scoped>
    #map{
        height:100%;
    }
    /*隐藏ol的一些自带元素*/
    /*.ol-attribution,.ol-zoom { display: none;}*/
</style>
