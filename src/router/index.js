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
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
