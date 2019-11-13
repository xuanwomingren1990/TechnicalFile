<template>
    <div id="container">
        <div class="mapContainer">
            <div id="map1"></div>
            <div id="map2"></div>
        </div>
        <span v-on:click="exchange">交换</span>
    </div>
</template>

<script>
    import { Map, View } from "ol"
    import TileLayer from "ol/layer/Tile"
    import OSM from "ol/source/OSM";
    export default {
        name: "MapExchange",
        data () {
            return {
                map1: null,
                map2: null
            }
        },
        mounted () {
            // 创建第一个地图
            this.map1 = new Map({
                target: 'map1',
                layers: [
                    new TileLayer({
                        source: new OSM()
                    })
                ],
                view: new View({
                    projection: "EPSG:4326",
                    center: [114.064839,22.548857],
                    zoom: 12
                })
            })
            // 创建第二个地图
            this.map2 = new Map({
                target: 'map2',
                layers: [
                    new TileLayer({
                        source: new OSM()
                    })
                ],
                view: new View({
                    projection: "EPSG:4326",
                    center: [114.064839,22.548857],
                    zoom: 12
                })
            })
        },
        methods: {
            exchange () {
                var target1 = this.map1.getTarget()
                /**
                 * 通过改变地图的容器，来实现地图呈现位置的交换
                 */
                if (target1 === 'map1') {
                    this.map1.setTarget('map2')
                    this.map2.setTarget('map1')
                }else if (target1 === 'map2'){
                    this.map1.setTarget('map1')
                    this.map2.setTarget('map2')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #container{
        height: 100%;
        display: flex;
        .mapContainer{
            width: 50%;
            height: 100%;
            #map1,#map2{
                width: 100%;
                height: 50%;
            }
        }
        span{
            background-color: #ADE0BC;
            width: 60px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border-radius: 5px;
            color: white;
            margin-top: 50vh;
            cursor: pointer;
        }
    }
</style>
