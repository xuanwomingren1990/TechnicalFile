<template>
    <div id="map" ref="rootmap">
        <div id="anchor" style="
      width: 64px;
      height: 64px;
      border-radius: 32px;
        border: 2px solid">
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
    import Overlay from 'ol/Overlay'
    import TileLayer from "ol/layer/Tile";
    import OSM from "ol/source/OSM";
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
                layers: [
                    new TileLayer({
                        source: new OSM()
                    })
                ],

                view: new View({
                    projection: "EPSG:4326",
                    center: [114.064839,22.548857],  //视图显示中心(深圳)
                    zoom: 12//显示级别
                })
            });



            var anchor = new Overlay({
                element: document.getElementById('anchor')
            });
            anchor.setPosition([114.064839,22.548857]);
            this.map.addOverlay(anchor);
        }
    }
</script>

<style lang="scss" scoped>
    #map{
        height:100%;
    }
    @keyframes zoom
    {
        from {top: 0; left: 0; width: 32px; height: 32px;border-color: rgba(138,255,0,1)}
        to {top: -8px; left: -8px; width: 48px; height: 48px;border-color: rgba(138,255,0,0)}
    }

    @-moz-keyframes zoom /* Firefox */
    {
        from {top: 0; left: 0; width: 32px; height: 32px;border-color: rgba(138,255,0,1)}
        to {top: -16px; left: -16px; width: 64px; height: 64px;border-color: rgba(138,255,0,0)}
    }

    @-webkit-keyframes zoom /* Safari 和 Chrome */
    {
        from {top: 0; left: 0; width: 32px; height: 32px;border-color: rgba(138,255,0,1)}
        to {top: -16px; left: -16px; width: 64px; height: 64px;border-color: rgba(138,255,0,0)}
    }

    @-o-keyframes zoom /* Opera */
    {
        from {top: 0; left: 0; width: 32px; height: 32px;border-color: rgba(138,255,0,1)}
        to {top: -16px; left: -16px; width: 64px; height: 64px;border-color: rgba(138,255,0,0)}
    }

    #anchor
    {
        display: block;
        position: absolute;
        animation: zoom 2.5s;
        animation-iteration-count: infinite; /* 一直重复动画 */

        -moz-animation: zoom 2.5s; /* Firefox */
        -moz-animation-iteration-count: infinite; /* 一直重复动画 */

        -webkit-animation: zoom 2.5s;  /* Safari 和 Chrome */
        -webkit-animation-iteration-count: infinite; /* 一直重复动画 */

        -o-animation: zoom 2.5s; /* Opera */
        -o-animation-iteration-count: infinite; /* 一直重复动画 */
    }
</style>
