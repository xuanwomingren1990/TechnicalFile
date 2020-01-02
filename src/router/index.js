import Vue from 'vue'
import VueRouter from 'vue-router'

// 各个地图组件
import olMap from '../components/Map.vue'
import ControlIndex from '../components/controls/ControlIndex.vue'
import MapLinkage from '../components/map/MapLinkage.vue'
import MapExchange from '../components/map/MapExchange.vue'
import ViewNavigation from '../components/view/ViewNavigation.vue'
import ViewExtent from '../components/view/ViewExtent'
import ViewMinMaxZoom from '../components/view/ViewMinMaxZoom.vue'
import ViewFitExtent from '../components/view/ViewFitExtent.vue'
import TileSourceOnline from '../components/Source_Layer/TileSource/TileSourceOnline.vue'
import TileSourceXYZ from '../components/Source_Layer/TileSource/TileSourceXYZ.vue'
import TileSourceXYZ_Baidu_Formal from '../components/Source_Layer/TileSource/TileSourceXYZ_Baidu_Formal.vue'
import TileSourceXYZ_Baidu_Test from '../components/Source_Layer/TileSource/TileSourceXYZ_Baidu_Test.vue'
import TileSourceTileImage from '../components/Source_Layer/TileSource/TileSourceTileImage.vue'

// vue 案例
import ArchiveComponent from '../components/Vue/ArchiveComponent/index.vue'
import SlotIndex from '../components/Vue/slot/Index.vue'
import WatchIndex from '../components/Vue/watch/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/olMap'
    },
    {
      path: '/olMap',
      name: 'olMap',
      component: olMap
    },
    {
        path: '/ControlIndex',
        name: 'ControlIndex',
        component: ControlIndex
    },
    {
        path: '/MapLinkage',
        name: 'MapLinkage',
        component: MapLinkage
    },
    {
        path: '/MapExchange',
        name: 'MapExchange',
        component: MapExchange
    },
    {
        path: '/ViewNavigation',
        name: 'ViewNavigation',
        component: ViewNavigation
    },
    {
        path: '/ViewExtent',
        name: 'ViewExtent',
        component: ViewExtent
    },
    {
        path: '/ViewMinMaxZoom',
        name: 'ViewMinMaxZoom',
        component: ViewMinMaxZoom
    },
    {
        path: '/ViewFitExtent',
        name: 'ViewFitExtent',
        component: ViewFitExtent
    },
    {
        path: '/TileSourceOnline',
        name: 'TileSourceOnline',
        component: TileSourceOnline
    },
    {
        path: '/TileSourceXYZ',
        name: 'TileSourceXYZ',
        component: TileSourceXYZ
    },
    {
        path: '/TileSourceXYZ/Baidu/Test',
        name: 'TileSourceXYZ_Baidu_Test',
        component: TileSourceXYZ_Baidu_Test
    },
    {
        path: '/TileSourceXYZ/Baidu/Formal',
        name: 'TileSourceXYZ_Baidu_Formal',
        component: TileSourceXYZ_Baidu_Formal
    },
    {
        path: '/TileSourceTileImage',
        name: 'TileSourceTileImage',
        component: TileSourceTileImage
    },


    // VUE
    {
        path: '/vue/ArchiveComponent',
        name: 'ArchiveComponent',
        component: ArchiveComponent
    },
    {
        path: '/vue/SlotIndex',
        name: 'SlotIndex',
        component: SlotIndex
    },
    {
        path: '/vue/WatchIndex',
        name: 'WatchIndex',
        component: WatchIndex
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
