<template>
    <div id="map"></div>
</template>

<script>
    // 引入樣式文件
    import "ol/ol.css"
    // 引入需要的模塊
    import { Map, View } from "ol"
    import OSM from "ol/source/OSM.js"
    import TileLayer from 'ol/layer/Tile.js'
    import {defaults as defaultControls, FullScreen} from 'ol/control.js'
    export default {
        name: "ControlIndex",
        data () {
            return {
                map: null
            }
        },
        mounted () {
            this.map = new Map({
                target: "map",
                layers: [
                    new TileLayer({
                        source: new OSM()
                    })
                ],
                view: new View({
                    projection: "EPSG:4326",
                    center: [114.064839,22.548857],
                    zoom: 12
                }),
                /**
                 * 最初添加到地图中的控件;
                 * 如果没有指定，则会默认调用模块:ol/control.js的defaults()方法;
                 * 除非另行配置，否则该方法将返回一个集合，其中包含Zoom、Rotate、Attribution三个控件
                 */

                // 1.可以通过extend()方法，向js的defaults()方法返回的Collection中追加控件
                // controls: defaultControls().extend([
                //     new FullScreen()
                // ]),

                // 2.可以控制默认控件的显示与隐藏
                // controls: defaultControls({
                    // attribution: false,
                    // rotate:false,
                    // zoom:false
                // })

                // 3.还可以控制配置默认控件的属性
                controls: defaultControls({
                    attributionOptions:{
                        label:"唐",
                        collapsible:true
                    }
                })
            })
        }
    }
</script>

<style scoped>
    #map{
        height: 100%;
    }
</style>

<!--每一个地图应用都应该有一些工具方便用户控制地图的行为，比如缩放，全屏，坐标控件等等-->
