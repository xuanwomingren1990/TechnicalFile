<template>
    <div id="map" ref="rootmap">

        <!-------------------笔记------------------>
        <div class="notes hidden">
<pre>
    <!--&lt;div&gt;&lt;/div&gt;-->
</pre>
        </div>
        <!-------------------笔记---------------->
    </div>
</template>

<script>
    import 'ol/ol.css';
    import Map from 'ol/Map';
    import VectorSource from 'ol/source/Vector';
    import View from 'ol/View';
    import XYZ from 'ol/source/XYZ';
    import {GeoJSON, WFS} from 'ol/format';
    import {Stroke, Style} from 'ol/style';
    import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
    import {
        and as andFilter,
        equalTo as equalToFilter,
        like as likeFilter,
    } from 'ol/format/filter';

    export default {
        name: "WFS",
        data () {
            return {
                map: null
            }
        },
        mounted() {
            var vectorSource = new VectorSource();
            var vector = new VectorLayer({
                source: vectorSource,
                style: new Style({
                    stroke: new Stroke({
                        color: 'rgba(0, 0, 255, 1.0)',
                        width: 2,
                    }),
                }),
            });

            var key = 'Get your own API key at https://www.maptiler.com/cloud/';
            var attributions =
                '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
                '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

            var raster = new TileLayer({
                source: new XYZ({
                    attributions: attributions,
                    url: 'https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=' + key,
                    maxZoom: 20,
                }),
            });


            //创建地图
            let map = new Map({
                target: "map",
                layers: [raster, vector],
                view: new View({
                    center: [-8908887.277395891, 5381918.072437216],
                    maxZoom: 19,
                    zoom: 12,
                })
            });

            var featureRequest = new WFS().writeGetFeature({
                srsName: 'EPSG:3857',
                featureNS: 'http://openstreemap.org',
                featurePrefix: 'osm',
                featureTypes: ['water_areas'],
                outputFormat: 'application/json',
                filter: andFilter(
                    likeFilter('name', 'Mississippi*'),
                    equalToFilter('waterway', 'riverbank')
                ),
            });
            console.log(featureRequest)

            fetch('https://ahocevar.com/geoserver/wfs', {
                method: 'POST',
                body: new XMLSerializer().serializeToString(featureRequest),
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (json) {
                    var features = new GeoJSON().readFeatures(json);
                    vectorSource.addFeatures(features);
                    map.getView().fit(vectorSource.getExtent());
                });
        }
    }
</script>

<style lang="scss" scoped>
    #map{
        height:100%;
    }
</style>
