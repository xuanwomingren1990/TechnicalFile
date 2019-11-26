<template>
    <div class="container">
        <div id="map"></div>
        <div class="button" v-on:click="fitToNanchang()">显示南昌</div>
    </div>
</template>

<script>
    // 引入樣式文件
    import "ol/ol.css";
    // 引入需要的模塊
    import { Map, View } from "ol";
    import TileLayer from "ol/layer/Tile";
    import OSM from "ol/source/OSM";
    export default {
        name: "ViewFitExtent",
        data (){
            return {
                map: null
            }
        },
        methods: {
            fitToNanchang(){
                this.map.getView().fit([104, 30.6, 104.12, 30.74], this.map.getSize());
            }
        },
        mounted () {
            this.map = new Map({
                target: 'map',
                layers: [
                    new TileLayer({
                        source: new OSM()
                    })
                ],
                view: new View({
                    center: [114.064839,22.548857],
                    projection: "EPSG:4326",
                    zoom: 12
                })
            })
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        height: 100%;
        #map{height:90%;}
        .button{
            text-align: center;
            line-height: 20px;
            width: 80px;
            height: 20px;
            border-radius: 5px;
            background-color: mediumturquoise;
            cursor: pointer;
        }
    }

</style>

