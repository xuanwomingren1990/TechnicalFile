<template>
    <div id="map"></div>
</template>

<script>
    import { Map, View } from "ol";
    import TileLayer from 'ol/layer/Tile';
    import OSM from 'ol/source/OSM';
    export default {
        name: "ViewMinMaxZoom",
        data () {
            return{
                map: null
            }
        },
        mounted () {
            this.map = new Map({
                target: 'map',
                view: new View({
                    projection: "EPSG:4326",
                    center: [114.064839,22.548857],
                    zoom: 12,

                    /**限制地图缩放最大级别为14，最小级别为10*/
                    minZoom: 10,
                    maxZoom: 14
                }),
                layers: [
                    new TileLayer({
                        source: new OSM()
                    })
                ],
            })
        }
    }
</script>

<style scoped>
    #map{
        height: 100%;
    }
</style>
