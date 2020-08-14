<template>
    <div class="wrapper">
        <div id="chart-ex"></div>
        <div class="btn-list">
            <el-button size="small" type="primary" @click="displayByHour">时</el-button>
            <el-button size="small" type="primary" @click="displayByDay">日</el-button>
            <el-button size="small" type="primary" @click="displayByWeek">周</el-button>
            <el-button size="small" type="primary" @click="displayByMonth">月</el-button>
        </div>

        <div class="legend-list">
            <!--通过自定义dom元素触发图例事件-->
            <el-button size="small" type="primary" @click="legendToggleSelect('峰值')">峰值</el-button>
            <el-button size="small" type="primary" @click="legendToggleSelect('走势')">走势</el-button>
        </div>
    </div>
</template>

<script>
    import rawData from './data/rawData.js'
    import forecastData from './data/forecastData.js'
    import {deepClone} from '@/util/util.js'
    export default {
        name: 'echart-k',
        data(){
            return{
                exChart: null,
                rawData:[],
                forecastData:[]
            }
        },
        computed:{
            exOption () {
                // x轴
                let dates = this.rawData.map(function (item) {
                    return item[0]
                })
                this.forecastData.map(function (item) {
                    dates.push(item[0])
                })

                //k线数据
                let min = 999
                let max = 0
                let kData = this.rawData.map(function (item) {
                    if (item[6] < min){min = item[6]}
                    if (item[5] > max){max = item[5]}
                    return [+item[1], +item[2], +item[6], +item[5]]
                })

                // 走势线
                let trendData = this.rawData.map((item,index)=>{
                    return item[1]
                })
                this.forecastData.map(function (item) {
                    trendData.push(item[1])
                })

                //数据窗口范围的 起始和结束 数值,当数据量大时，设置先加载该范围内的数据，可以避免卡顿。
                let startValue = dates[trendData.length - this.forecastData.length * 3]
                let endValue = dates[dates.length - 1]

                let option = {
                    backgroundColor: '#000',
                    // 隐藏legend,通过自定义dom元素触发图例事件
                    legend: {
                        itemWidth:0,
                        itemHeight:0,
                        textStyle:{
                            color:'#000',
                            fontSize:1
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false,
                            type: 'cross',
                            lineStyle: {
                                color: '#376df4',
                                width: 2,
                                opacity: 1
                            }
                        },
                        // 自定义tooltip内容
                        formatter: function(params, ticket, callback) {
                            var result = '时间： ' + params[0].name + "<br/>";
                            if (params.length==1){
                                result += params[0].marker + " " +  '预测值： ' + params[0].data
                            } else {
                                result += params[1].marker + " " +  '平均值： ' + params[1].data + '<br/>' +
                                    params[0].marker + " " +  '最高值： ' + params[0].data[4] + '<br/>' +
                                    params[0].marker + " " +  '最低值： ' + params[0].data[3] + '<br/>'

                            }

                            return result;
                        },
                    },
                    xAxis: {
                        type: 'category',
                        data: dates,
                        axisLine: { lineStyle: { color: '#8392A5' } },
                        axisLabel:{
                            formatter: function (value, index) {
                                let arr = value.split(" ")
                                return arr[0] + '\n' + arr[1]
                            }
                        }
                    },
                    yAxis: {
                        // scale: true,
                        axisLine: { lineStyle: { color: '#8392A5' } },
                        splitLine: { show: false },
                        min:min - 0.5,
                        max:max + 0.5,
                    },
                    grid: {
                        bottom: 80
                    },
                    // 数据窗口
                    dataZoom: [
                        {
                            textStyle: {
                                color: '#8392A5'
                            },
                            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                            handleSize: '60%',
                            dataBackground: {
                                areaStyle: {
                                    color: '#8392A5'
                                },
                                lineStyle: {
                                    opacity: 0.8,
                                    color: '#8392A5'
                                }
                            },
                            handleStyle: {
                                color: '#fff',
                                shadowBlur: 3,
                                shadowColor: 'rgba(0, 0, 0, 0.6)',
                                shadowOffsetX: 2,
                                shadowOffsetY: 2
                            },
                            startValue:startValue,
                            endValue:endValue
                        },
                        {
                            type: 'inside',
                            startValue:startValue
                        }
                    ],
                    // 通过visualMap可以分段设置样式
                    visualMap: {
                        show: false,
                        dimension: 0,
                        pieces: [],
                        outOfRange: {
                            color: 'green'
                        }
                    },
                    animation: true,
                    series: [
                        {
                            type: 'candlestick',
                            name: '峰值',
                            data: kData,
                            itemStyle: {
                                borderColor: '#0CF49B',
                                borderColor0: '#0CF49B',
                                borderWidth:3
                            },
                            barWidth:10,

                            progressive:200,
                            progressiveThreshold:2000,

                            markPoint: {
                                label: {
                                    normal: {
                                        formatter: function (param) {
                                            return param != null ? Math.round(param.value) : '';
                                        }
                                    }
                                },
                                data: [
                                    {
                                        name: 'highest value',
                                        type: 'max',
                                        valueDim: 'highest',
                                        symbolSize:40
                                    },
                                    {
                                        name: 'lowest value',
                                        type: 'min',
                                        valueDim: 'lowest',
                                        symbolSize:40,
                                        itemStyle:{
                                            color:'rgb(0, 0, 122)'
                                        }
                                    }
                                ],
                                tooltip: {
                                    formatter: function (param) {
                                        return param.name + '<br>' + (param.data.coord || '');
                                    }
                                }
                            }
                        },
                        {
                            name: '走势',
                            type: 'line',
                            data: trendData,
                            smooth: true,
                            showSymbol: false
                        }
                    ]
                }

                // 分段设置样式
                option.visualMap.pieces.push({
                    gte:kData.length -1,
                    lte: trendData.length-1,
                    color:'red',
                    symbolSize:10
                })


                return option
            }
        },
        methods:{
            displayByHour(){
                this.rawData = deepClone(rawData)
                this.forecastData = deepClone(forecastData)

                this.exChart = this.$echarts.init(document.getElementById('chart-ex'))
                this.exChart.setOption(this.exOption)
            },
            displayByDay(){
                this.rawData = rawData.filter((crr,index)=>{
                    return index % 24 === 0
                })
                this.forecastData = forecastData.filter((crr,index)=>{
                    return (index + 1) % 24 === 0
                })

                this.exChart = this.$echarts.init(document.getElementById('chart-ex'))
                this.exChart.setOption(this.exOption)
            },
            displayByWeek(){
                this.rawData = rawData.filter((crr,index)=>{
                    return index % (7 * 24) === 0
                })
                this.forecastData = forecastData.filter((crr,index)=>{
                    return (index + 1) % 24 === 0
                })

                this.exChart = this.$echarts.init(document.getElementById('chart-ex'))
                this.exChart.setOption(this.exOption)
            },
            displayByMonth(){
                this.rawData = rawData.filter((crr,index)=>{
                    return index % (30 * 24) === 0
                })
                this.forecastData = forecastData.filter((crr,index)=>{
                    return (index + 1) % 24 === 0
                })

                this.exChart = this.$echarts.init(document.getElementById('chart-ex'))
                this.exChart.setOption(this.exOption)
            },
            legendToggleSelect(name){
                this.exChart.dispatchAction({
                    type: 'legendToggleSelect',
                    // 图例名称
                    name: name
                })
            }
        },
        mounted(){
            this.displayByMonth()
        }
    }
</script>
<style scoped>
    .wrapper{
        width: 100%;
        height: 100%;
        position: relative;
    }
    #chart-ex{
        width: 100%;
        height: 100%;
    }
    .btn-list{
        width: 100%;
        position: absolute;
        top: 45px;
        display: flex;
        justify-content: center;
    }
    .legend-list{
        width: 100%;
        position: absolute;
        top: 5px;
        display: flex;
        justify-content: center;
    }
</style>
