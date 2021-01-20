<template>
    <div id="map" ref="rootmap">
      <MarkDownContainer>
        <MarkDownFile></MarkDownFile>
      </MarkDownContainer>
    </div>
</template>

<script>
    /**
     * 1.引入样式文件
     */
    import "ol/ol.css";
    // 按需引入需要的模块
    import { Map, View } from "ol";
    import TileLayer from "ol/layer/Tile";
    import OSM from "ol/source/OSM";

    import MarkDownFile from './Map.md'
    export default {
        name: "Map",
      components: {
        MarkDownFile
      },
        data () {
            return {
                /**
                 * 3定义map,便于重复调用
                 */
                map: null
            }
        },
        /**
         * 2.在mounted钩子中创建地图实例*
         */
        mounted() {
            //创建地图
            this.map = new Map({
                //1.让id为map的div作为地图的容器
                target: "map",

                //2. 设置地图图层
                layers: [
                    //创建一个使用Open Street Map地图源的 瓦片图层
                    new TileLayer({
                        source: new OSM()
                    })
                ],

                //3. 设置显示地图的视图
                view: new View({
                    // ol默认使用的是EPSG:3857坐标---(伪墨卡托投影，投影坐标系，例如：[12697639.794896733, 2577550.933585181])；
                    // EPSG:4326--- wgs84地理坐标系[经度、维度]
                    projection: "EPSG:4326",
                    /**一定要设置*/
                    center: [114.064839,22.548857],  //视图显示中心(深圳)
                    /**一定要设置*/
                    zoom: 12//显示级别
                })
            });
        }
    }
</script>

<style lang="scss" scoped>
    #map{
        height:100%;
    }
    /*隐藏ol的一些自带元素*/
    /*.ol-attribution,.ol-zoom { display: none;}*/
</style>
