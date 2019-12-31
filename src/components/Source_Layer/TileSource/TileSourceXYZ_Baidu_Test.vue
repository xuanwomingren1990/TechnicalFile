<template>
    <div id="map" ref="rootmap">
        <!-------------------笔记------------------>
        <div class="notes hidden">
<pre>
    1.openLayers瓦片坐标系
OpenLayer的默认瓦片坐标系的原点在左上角，从左到右为x轴正方向，从下到上为y轴正方向，即：
具体到地图上来讲，地球经过投影，投影到一个平面上，平面最左边对应地球最西边，平面最上边对应地球最北边。
原点就处于整个平面的左上角，即地球的西北角，从北向南为y轴负方向，从西向东为x轴正方向。

理解这一点非常重要，因为并不是所有在线的瓦片地图都是采用这样的瓦片坐标系。用OpenLayers加载它们的时候，
如果瓦片坐标系不同，计算出来的瓦片地址就获取不到对应的瓦片，为解决这个问题，我们必须要先对瓦片坐标进行转换。
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
    import TileGrid from "ol/tilegrid/TileGrid";
    import { transform } from 'ol/proj'
    export default {
        name: "TileSourceXYZ_Baidu_Test",
        data () {
            return {
                map: null
            }
        },
        mounted() {
            this.map = new Map({
                target: "map",
                layers: [
                    new TileLayer({
                        source: new XYZ({
                            tilePixelRatio: 2,
                            tileUrlFunction: function (tileCoord) {// 参数tileCoord为瓦片坐标
                                debugger
                                var x = tileCoord[1];
                                var y = -tileCoord[2] -1;
                                var z = tileCoord[0];

                                // Math.pow(x,y)这个函数是求x的y次方
                                // 在瓦片坐标系的第z层，x和y方向上分别有 Math.pow(2,z) 块瓦片
                                var halfTileNum = Math.pow(2,z-1)// 计算当前层级下,瓦片坐标系x 和 y 方向上瓦片数量的一半，用于定位地图中点

                                // openlayers 默认的瓦片坐标系原点为：地球投影平面的左上角
                                // 百度地图的瓦片坐标系原点为：地球投影平面的中心
                                var baiduX = x - halfTileNum
                                var baiduY = y + halfTileNum

                                // var baiduX = x
                                // var baiduY = y

                                // 百度瓦片服务url将负数使用M前缀来标识
                                if (baiduX < 0){
                                     baiduX = 'M' + (-baiduX)
                                }
                                if (baiduY < 0){
                                    baiduY = 'M' + (-baiduY)
                                }

                                return 'http://online2.map.bdimg.com/onlinelabel/?qt=tile&x=' + baiduX + '&y=' + baiduY + '&z=' + z + '&styles=pl&udt=20160321&scaler=2&p=0';
                            }
                        })
                    })
                ],
                view: new View({
                    // 设置成都为地图中心
                    center: [104.06, 30.67],
                    projection: 'EPSG:4326',
                    zoom: 2
                    /*
                    zoom = 0、1、2
                            [2, 0, 0]             [2, 1, 0]   [2, 2, 0]   [2, 3, 0]
                            [2, 0, 1]             [2, 1, 1]   [2, 2, 1]   [2, 3, 1]
                            [2, 0, 2]             [2, 1, 2]   [2, 2, 2]   [2, 3, 2]
                            [2, 0, 3]             [2, 1, 3]   [2, 2, 3]   [2, 3, 3]

                    [3, 0, 2]   [3, 1, 2]   [3, 3, 2]   [3, 4, 2]   [3, 5, 2]   [3, 6, 2]   [3, 7, 2]
                    [3, 0, 3]   [3, 1, 3]   [3, 3, 3]   [3, 4, 3]   [3, 5, 3]   [3, 6, 3]   [3, 7, 3]
                    [3, 0, 4]   [3, 1, 4]   [3, 3, 4]   [3, 4, 4]   [3, 5, 4]   [3, 6, 4]   [3, 7, 4]
                    [3, 0, 5]   [3, 1, 5]   [3, 3, 5]   [3, 4, 5]   [3, 5, 5]   [3, 6, 5]   [3, 7, 5]

                    zoom = 3
                    [2, 0, 0]               [2, 2, 0]               [2, 3, 0]
                    [2, 0, 1]               [2, 2, 1]               [2, 3, 1]

                    [3, 0, 2]         [3, 4, 2]   [3, 5, 2]   [3, 6, 2]   [3, 7, 2]
                    [3, 0, 3]         [3, 4, 3]   [3, 5, 3]   [3, 6, 3]   [3, 7, 3]
                    [3, 0, 4]         [3, 4, 4]   [3, 5, 4]   [3, 6, 4]   [3, 7, 4]
                    [3, 0, 5]         [3, 4, 5]   [3, 5, 5]   [3, 6, 5]   [3, 7, 5]
                     */
                })
            });
        }
    }
</script>

<style lang="scss" scoped>
    #map{
        height:100%;
    }
</style>
