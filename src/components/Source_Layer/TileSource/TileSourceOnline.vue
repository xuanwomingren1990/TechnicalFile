<template>
    <div id="map"></div>
</template>

<script>
    import "ol/ol.css";
    import {Map} from 'ol'
    export default {
        name: "TileSourceOnline",
        data () {
            return {
                map: null
            }
        },
        mounted () {
            this.map = new Map({

            })
        }
    }
</script>

<style scoped>

</style>
