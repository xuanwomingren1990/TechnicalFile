<template>
    <div class="container">
        <div id="map"></div>
        <div class="buttons">
            <el-button type="primary" size="mini" @click="moveLeft">左移</el-button>
            <el-button type="primary" size="mini" @click="moveRight">右移</el-button>
            <el-button type="primary" size="mini" @click="moveUp">上移</el-button>
            <el-button type="primary" size="mini" @click="moveDown">下移</el-button>
            <el-button type="primary" size="mini" @click="backHome">回到深圳</el-button>
            <el-button type="primary" size="mini" @click="zoomIn">放大</el-button>
            <el-button type="primary" size="mini" @click="zoomOut">缩小</el-button>
        </div>
    </div>
</template>

<script>
    import { Map, View} from "ol"
    import { transform } from 'ol/proj'
    import TileLayer from "ol/layer/Tile"
    import OSM from "ol/source/OSM"
    export default {
        name: "ViewNavigation",
        data () {
            return {
                map: null,
                view: null
            }
        },
        methods: {
            moveLeft(){
                // map就是一个摄影系统；
                // 图层就是要拍摄的景物，它是由数据source生成的；
                // 视图就是相机的镜头，控制镜头就能拍摄到不同的照片；
                var mapCenter = this.view.getCenter()//镜头的中心位置
                mapCenter[0] += 10000;
                this.view.setCenter(mapCenter)//镜头对准新位置
                this.map.render();//重新渲染得到新的地图

            },
            moveRight(){
                var center = this.view.getCenter()
                center[0] -=10000
                this.view.setCenter(center)
                this.map.render()
            },
            moveUp(){
                var center = this.view.getCenter()
                center[1] += 10000
                this.view.setCenter(center)
                this.map.render()
            },
            moveDown(){
                var center = this.view.getCenter()
                center[1] -= 10000
                this.view.setCenter(center)
                this.map.render()
            },
            backHome(){
                var ShenZhen = transform([114.064839, 22.548857], 'EPSG:4326', 'EPSG:3857')//深圳所在位置
                this.view.setCenter(ShenZhen)//镜头重新对准深圳
                this.map.render()//重新渲染得到新的地图
            },
            zoomIn(){
                // 放大和缩小并没有改变镜头的位置，因此看到的景物是一样的，不用重新渲染
                var currentZoom = this.view.getZoom()
                this.view.setZoom(currentZoom + 1)
            },
            zoomOut(){
                var currentZoom = this.view.getZoom()
                this.view.setZoom(currentZoom - 1)
            }
        },
        mounted () {
            this.view = new View({
                // 此处进行坐标转换， 把EPSG:4326(wgs84地理坐标系)的坐标，转换为EPSG:3857(伪墨卡托投影，投影坐标系)坐标；
                // 因为ol默认使用的是EPSG:3857坐标,是投影坐标系
                center: transform([114.064839, 22.548857], 'EPSG:4326', 'EPSG:3857'),  //定义地图显示中心(深圳)
                zoom: 12// 定义地图显示层级为12
            })
            this.map = new Map({
                target: 'map',

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

<style lang="scss" scoped>
    .container{
        height: 100%;
        #map{
            height: 90%;
        }
    }
</style>
