<template>
    <div id="map" ref="rootmap">
        <div class="radios">
            <el-radio-group v-model="radio" v-on:change="change">
                <el-radio  label="openStreetMapLayer">openStreetMap地图</el-radio>
                <el-radio  label="bingMapLayer">Bing地图</el-radio>
                <el-radio  label="stamenLayer">Stamen地图</el-radio>
            </el-radio-group>
        </div>
<!-------------------笔记------------------>
<div class="notes hidden">
<pre>
    // 先移除当前的图层
    this.map.getLayers().forEach( (layer) => {
        this.map.removeLayer(layer)
    })
    // 再添加选中的图层
    switch (newValue) {
        case 'openStreetMapLayer':
            this.map.addLayer(this.openStreetMapLayer)
            break
        case 'bingMapLayer':
            this.map.addLayer(this.bingMapLayer)
            break
        case 'stamenLayer':
            this.map.addLayer(this.stamenLayer)
            break
    }
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
        methods: {
            change(value){
                console.log(value)
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
                    this.stamenLayer//初始加载的图层
                ],

                view: new View({
                    projection: "EPSG:4326",
                    center: [114.064839,22.548857],
                    zoom: 12
                })
            });
        },
        watch: {
            radio: function (newValue, oldValue) {
                // 先移除当前的图层
                this.map.getLayers().forEach( (layer) => {
                    this.map.removeLayer(layer)
                })
                // 在添加选中的图层
                switch (newValue) {
                    case 'openStreetMapLayer':
                        this.map.addLayer(this.openStreetMapLayer)
                        break
                    case 'bingMapLayer':
                        this.map.addLayer(this.bingMapLayer)
                        break
                    case 'stamenLayer':
                        this.map.addLayer(this.stamenLayer)
                        break
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #map{
        height:100%;
        position: relative;
        .radios{
            position: absolute;
            z-index: 9;
            left: 63px;
        }
    }
    /*隐藏ol的一些自带元素*/
    /*.ol-attribution,.ol-zoom { display: none;}*/
</style>
