<template>
    <div id="map" ref="rootmap">
<!-------------------笔记------------------>
<div class="notes hidden">
<pre>
    OpenLayers学习文档：http://weilin.me/ol3-primer/
                                在vue中使用openlayers
    &lt;script&gt;
    /**1.引入樣式文件*/
    import "ol/ol.css";
    // 按需引入需要的模块
    import { Map, View } from "ol";
    import TileLayer from "ol/layer/Tile";
    import OSM from "ol/source/OSM";
    export default {
        name: "Map",
        data () {
            return {
                /**3定义map,便于重复调用*/
                map: null
            }
        },
        /**2.在mounted钩子中创建地图实例*/
        mounted() {
            // var mapcontainer = this.$refs.rootmap;
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
    &lt;/script&gt;

    map就是一个摄影系统；
    图层就是要拍摄的景物，只不过它是由数据source渲染成的；
    视图就是相机的镜头，控制镜头就能拍摄到不同的照片，因为相框是固定大小的；
    target就是相框
    <!--&lt;div&gt;&lt;/div&gt;-->
</pre>
</div>
<!-------------------笔记---------------->
    </div>
</template>

<script>
    /**1.引入樣式文件*/
    import "ol/ol.css";
    // 按需引入需要的模塊
    import { Map, View } from "ol";
    import TileLayer from "ol/layer/Tile";
    import OSM from "ol/source/OSM";
    export default {
        name: "Map",
        data () {
            return {
                /**3定义map,便于重复调用*/
                map: null
            }
        },
        /**2.在mounted钩子中创建地图实例*/
        mounted() {
            // var mapcontainer = this.$refs.rootmap;
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

            // this.map.on('moveend',e => {
            //     var zoom = this.map.getView().getZoom();  //获取当前地图的缩放级别
            //     console.log(zoom);
            // })
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
