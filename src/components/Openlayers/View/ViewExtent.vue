<template>
    <div id="map"></div>
</template>

<script>
    import "ol/ol.css";
    import {Map, View} from 'ol'
    import TileLayer from 'ol/layer/Tile'
    import OSM from "ol/source/OSM";
    export default {
        name: "ViewExtent",
        data () {
            return {
                map: null
            }
        },
        mounted () {
            this.map = new Map({
                layers:[
                    new TileLayer ({
                        source: new OSM()
                    })
                ],
                view: new View({
                    projection: "EPSG:4326",
                    center: [114.064839,22.548857],
                    zoom: 1,
                    // 在实际使用中，往往只关心某一个区域的地图，而无需显示整个地球的地图，这样可以聚焦于业务，同时可以减少前端和后台的地图数据。
                    // 下面我们就将看到，地图只能在[113.064839,21.548857,115.064839,23.548857]之间显示。

                    // 这个范围指的是地图视图的限制范围，超过设置范围的地图将不会显示；
                    // 即：将相机镜头只能在这个范围内取景；

                    // 如果以center为焦点，镜头不断拉远，摄取范围不断扩大，达到extent的范围时，就不能再拉远了；
                    // 如果以center为焦点，镜头不断拉近，摄取范围不断缩小，但是只要在extent范围内，就可以不断拉近镜头。

                    // 这也就意味着，当设置extent后，地图将有一个最小zoom，即显示extent所用的zoom，地图不能无限缩小。如果初始zoom小于它，将失效。

                    // 如何设置extent?
                    // 首先确认一个最小的zoom 和 center
                    // 这时地图满屏，所呈现的地图范围，为extent

                    extent: [113.064839,22.048857,115.064839,23]
                }),
                target: 'map'
            })
        }
    }
</script>

<style scoped>
    #map{
        height: 100%;
    }
</style>
