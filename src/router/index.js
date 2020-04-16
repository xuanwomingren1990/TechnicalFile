import Vue from 'vue'
import VueRouter from 'vue-router'

// 各个地图组件
import olMap from '@/components/Openlayers/Map.vue'
import ControlIndex from '@/components/Openlayers/controls/ControlIndex.vue'
import MapLinkage from '@/components/Openlayers/map/MapLinkage.vue'
import MapExchange from '@/components/Openlayers/map/MapExchange.vue'
import ViewNavigation from '@/components/Openlayers/view/ViewNavigation.vue'
import ViewExtent from '@/components/Openlayers/view/ViewExtent.vue'
import ViewMinMaxZoom from '@/components/Openlayers/view/ViewMinMaxZoom.vue'
import ViewFitExtent from '@/components/Openlayers/view/ViewFitExtent.vue'
import TileSourceOnline from '@/components/Openlayers/Source_Layer/TileSource/TileSourceOnline.vue'
import TileSourceXYZ from '@/components/Openlayers/Source_Layer/TileSource/TileSourceXYZ.vue'
import TileSourceXYZ_Baidu_Formal from '@/components/Openlayers/Source_Layer/TileSource/TileSourceXYZ_Baidu_Formal.vue'
import TileSourceXYZ_Baidu_Test from '@/components/Openlayers/Source_Layer/TileSource/TileSourceXYZ_Baidu_Test.vue'
import TileSourceTileImage from '@/components/Openlayers/Source_Layer/TileSource/TileSourceTileImage.vue'

// vue 案例
import ArchiveComponent from '../components/Vue/ArchiveComponent/index.vue'
import SlotIndex from '../components/Vue/Slot/Index.vue'
import WatchIndex from '../components/Vue/WatchProperty/index.vue'
// vue自定义组件
import CustomComponentIndex from '../components/Vue/CustomComponents/Index.vue'
import CustomPluginsIndex from '../components/Vue/Plugins/index.vue'

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
    },
    {
        path: '/vue/Components',
        name: 'CustomComponentIndex',
        component: CustomComponentIndex
    },
    {
        path: '/vue/Plugins',
        name: 'CustomPluginsIndex',
        component: CustomPluginsIndex
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
