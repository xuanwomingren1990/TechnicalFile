<template>
    <div id="map" ref="rootmap">
        <div class="radios">
            <el-radio-group v-model="radio" v-on:change="change">
                <el-radio  label="openStreetMapLayer">openStreetMap地图</el-radio>
                <el-radio  label="GaodeMapLayer">高德地图</el-radio>
                <el-radio  label="YahooMapLayer">Yahoo地图</el-radio>
            </el-radio-group>
        </div>
        <!-------------------笔记------------------>
        <div class="notes hidden">
<pre>
    1.ol.source.XYZ是一个通用的Source,可以适应广大的在线瓦片地图数据源
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
    import XYZ from 'ol/source/XYZ';
    export default {
        name: "TileSourceXYZ",
        data () {
            return {
                map: null,
                openStreetMapLayer: null,
                GaodeMapLayer: null,
                YahooMapLayer: null,

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
                source: new XYZ({
                    url:'http://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    tileUrlFunction: function (tileCoord) {
                        debugger

                        /*
                          zoom = 0

                         */
                    }
                })
            });

            // 高德地图层
            this.GaodeMapLayer = new TileLayer({
                source: new XYZ({
                    url: 'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
                })
            });

            // Yahoo地图层
            this.YahooMapLayer = new TileLayer({
                source: new XYZ({
                    // 默认情况下，tileSize为256，这也是现在绝大多数瓦片采用的大小。但Yahoo地图使用的是512，
                    tileSize: 512,
                    url:'https://{0-3}.base.maps.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/512/png8?lg=ENG&ppi=250&token=TrLJuXVK62IQk0vuXFzaig%3D%3D&requestid=yahoo.prod&app_id=eAdkWGYRoc4RfxVo0Z4B'
                })
            });

            this.map = new Map({
                target: "map",
                layers: [
                    this.openStreetMapLayer//初始加载的图层
                ],

                view: new View({
                    projection: "EPSG:4326",
                    center: [114.064839,22.548857],
                    zoom: 1
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
                    case 'GaodeMapLayer':
                        this.map.addLayer(this.GaodeMapLayer)
                        break
                    case 'YahooMapLayer':
                        this.map.addLayer(this.YahooMapLayer)
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
</style>
