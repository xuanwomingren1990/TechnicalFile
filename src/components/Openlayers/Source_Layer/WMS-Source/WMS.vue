<template>
    <div id="map" ref="rootmap">

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
    import OSM from "ol/source/OSM";
    import * as olProj from 'ol/proj';
    import TileWMS from 'ol/source/TileWMS';
    export default {
        name: "Map",
        data () {
            return {
                map: null
            }
        },
        mounted() {
            //创建地图
            this.map = new Map({
                target: "map",

                /*
                layers: [
                    new TileLayer({
                        source: new OSM()
                    }),
                    new TileLayer({
                        extent: [-13884991, 2870341, -7455066, 6338219],
                        source: new TileWMS({
                            url: 'https://ahocevar.com/geoserver/wms',
                            params: {
                                'LAYERS': 'topp:states',
                                'TILED': true
                            },
                            serverType: 'geoserver',
                        }),
                    })
                ],
                view: new View({
                    center: [-10997148, 4569099],
                    zoom: 4
                })
                */


                layers: [
                    new TileLayer({
                        source: new OSM()
                    }),

                    new TileLayer({
                        // projection: ol.proj.get("EPSG:4326"),
                        source: new TileWMS({
                            url: 'http://172.17.9.142:6163/igs/rest/ogc/doc/gd_tdlybgdc_2015/WMSServer',
                            params: {
                                'LAYERS': 'gd_tdlybgdc_2015%3A%E5%9C%9F%E5%9C%B0%E5%88%A9%E7%94%A8%E5%8F%98%E6%9B%B4%E8%B0%83%E6%9F%A5_2015_2000%E5%9D%90%E6%A0%87_4490',
                                'crossOrigin': "Anonymous",
                                'VERSION': '1.1.1',
                                'singleTile': true,
                                // "SRS": 'EPSG:4326'
                            }
                        }),
                        zIndex: 10
                    })
                ],
                view: new View({
                    projection: "EPSG:4326",
                    center: [114.064839,22.548857], //(深圳)
                    zoom: 10//显示级别
                })
            });
        }
    }
</script>

<style lang="scss" scoped>
    #map{
        height:100%;
    }
</style>
