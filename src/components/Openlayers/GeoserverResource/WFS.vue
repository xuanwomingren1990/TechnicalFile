<template>
    <div id="map" ref="rootmap">
        <!-------------------笔记------------------>
        <div class="notes hidden">
<pre>

</pre>
        </div>
        <!-------------------笔记---------------->
    </div>
</template>

<script>
    import "ol/ol.css";
    // 按需引入需要的模块
    import { Map, View } from "ol";
    import VectorLayer from 'ol/layer/Vector';
    import VectorSource from 'ol/source/Vector';
    import TileLayer from "ol/layer/Tile";
    import OSM from "ol/source/OSM";
    import GeoJSON from 'ol/format/GeoJSON';
    import {transform} from 'ol/proj';
    import Projection from 'ol/proj/Projection';
    import axios from 'axios'

    export default {
        name: "Map",
        data () {
            return {
                map: null
            }
        },
        methods:{
            addGeoJSON(src) {
                var layer = new VectorLayer({
                    source: new VectorSource({
                        features: (new GeoJSON()).readFeatures(src, {     // 用readFeatures方法可以自定义坐标系
                            dataProjection: 'EPSG:4326',    // 设定JSON数据使用的坐标系
                            featureProjection: 'EPSG:3857' // 设定当前地图使用的feature的坐标系
                        })
                    })
                });
                this.map.addLayer(layer);

                console.log(layer.getSource().getFeatures())
            }
        },
        mounted() {
            this.map = new Map({
                target: "map",
                layers: [
                    new TileLayer({
                        source: new OSM()
                    })
                ],
                view: new View({
                    zoom: 12,//显示级别
                    center: transform([-74.0104611, 40.70758763],'EPSG:4326','EPSG:3857')
                })
            })

            // 调用服务，获取geoJson数据。返回数据中包换坐标系统说明：name: "urn:ogc:def:crs:EPSG::4326"；
            // 如果与geoJson数据所用坐标系统与地图使用坐标系统不一致，需要在添加矢量数据时进行坐标抓换。
            let url = 'http://localhost:8080/geoserver/tiger/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=tiger%3Apoi&maxFeatures=50&outputFormat=application%2Fjson'
            axios.get(url)
                .then((response)=> {
                    console.log(response)
                    this.addGeoJSON(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>

<style lang="scss" scoped>
    #map{
        height:100%;
    }
</style>
