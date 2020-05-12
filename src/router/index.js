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
import DiffusedCircle from '@/components/Openlayers/OverLay/DiffusedCircle.vue'

/**********************************vue 案例*****************************************/
import ArchiveComponent from '../components/Vue/ArchiveComponent/index.vue'//动态组件
import SlotIndex from '../components/Vue/Slot/Index.vue'//插槽
import WatchIndex from '../components/Vue/WatchProperty/index.vue'//监听器
import CustomComponentIndex from '../components/Vue/CustomComponents/Index.vue'// vue自定义组件的使用
import CustomPluginsIndex from '../components/Vue/Plugins/index.vue'//插件的使用

Vue.use(VueRouter)

const routes = [
    /********地图相关路由*******/
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
    {
        path: '/OverLay/DiffusedCircle',
        name: 'DiffusedCircle',
        component: DiffusedCircle
    },

    /***********VUE相关路由*********/
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
