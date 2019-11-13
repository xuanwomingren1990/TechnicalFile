<template>
    <div class="container">
        <div id="map1"></div>
        <div id="map2"></div>
    </div>
</template>

<script>
    import Map from 'ol/Map';
    import View from 'ol/View';
    import TileLayer from 'ol/layer/Tile';
    import OSM from 'ol/source/OSM';
    export default {
        name: "MapLinkage",
        data () {
            return {
                map1: null,
                map2: null,
                view: null
            }
        },
        mounted () {
            // 地图1 和 地图2 共享一个视图
            this.view = new View({
                projection: "EPSG:4326",
                center: [114.064839,22.548857],
                zoom: 12
            })

            // 地图1
            this.map1 = new Map({
                target: 'map1',
                layers: [
                    new TileLayer({
                        source: new OSM()
                    })
                ],
                view: this.view
            })

            // 地图2
            this.map2 = new Map({
                target: 'map2',
                layers: [
                    new TileLayer({
                        source: new OSM()
                    })
                ],
                view: this.view
            })
        }
    }
</script>

<style scoped>
    .container{
        height: 100%;
    }
    #map1{
        height: 45%;
        width: 45%;
    }
    #map2{
        height: 45%;
        width: 45%;
    }
</style>
<!--
                                            地图联动
        两幅个地图实例，如果共享同一个视图，则能达到联动的效果：操作一副地图，另外一副地图也将跟着变动。
-->
