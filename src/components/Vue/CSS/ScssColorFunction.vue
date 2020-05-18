<template>
    <div class="wrapper">
        <div v-for="(item,index) in types" :key="index" :class="'wrapper-row-column ' + item">
            <div :class="'item ' + item + '-color-1'"></div>
            <div :class="'item ' + item + '-color-2'"></div>
            <div :class="'item ' + item + '-color-3'"></div>
            <div :class="'item ' + item + '-color-4'"></div>
            <div :class="'item ' + item + '-color-5'"></div>
            <div :class="'item ' + item + '-color-6'"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ScssColorFunction",
        data(){
            return{
                types:[
                    'water',
                    'power',
                    'gas',
                    'population',
                    'economy',
                    'land',
                    'building'
                ]
            }
        }
    }

    let variables =  {
        'water-color': '#4dadf7',
        'power-color': '#FFA800',
        'gas-color': '#8f9cff',
        'population-color': '#E9A4DB',
        'economy-color': '#ff6b5d',
        'land-color': '#9e4f0c',
        'building-color': '#8d8d8d'
    }
</script>

<style lang="scss" scoped>
    $legend-water: #4dadf7;
    $legend-power: #FFA800;
    $legend-gas: #8f9cff;
    $legend-population: #E9A4DB;
    $legend-economy: #ff6b5d;
    $legend-land: #9e4f0c;
    $legend-building: #8d8d8d;


    @mixin serColor($type,$baseColor){
        .#{$type}-color-1{
            background-color: darken($baseColor, 30%);
        }
        .#{$type}-color-2{
            background-color: darken($baseColor, 20%);
        }
        .#{$type}-color-3{
            background-color: darken($baseColor,10%);
        }
        .#{$type}-color-4{
            background-color: lighten($baseColor, 0%);
        }
        .#{$type}-color-5{
            background-color: lighten($baseColor, 8%);
        }
        .#{$type}-color-6{
            background-color: lighten($baseColor, 16%);
        }
    }

    .wrapper{
        display: flex;
        .wrapper-row-column{
            margin-right: 20px;
            .item{
                width: 40px;
                height: 30px;
            }
        }
        @include serColor($type:'water',$baseColor:$legend-water);
        @include serColor($type:'power',$baseColor:$legend-power);
        @include serColor($type:'gas',$baseColor:$legend-gas);
        @include serColor($type:'population',$baseColor:$legend-population);
        @include serColor($type:'economy',$baseColor:$legend-economy);
        @include serColor($type:'land',$baseColor:$legend-land);
        @include serColor($type:'building',$baseColor:$legend-building);
    }
</style>
