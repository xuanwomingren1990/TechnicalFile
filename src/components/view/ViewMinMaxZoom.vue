<template>
    <div id="map"></div>
</template>

<script>
    import { Map, View } from "ol";
    export default {
        name: "ViewMinMaxZoom",
        data () {
            return{
                map: null
            }
        },
        mounted () {
            this.map = new Map({
                target: 'map'
            })
        }
    }
</script>

<style scoped>
    #map{
        height: 100%;
    }
</style>
