import {milliseconds} from './rawData.js'
function getRandomValue(){
    let num1 =  ((Math.random()*5)+1)
    let num2 = ((Math.random()*5)+1)
    let num = Math.ceil(num1- num2)
    return num
}


let total =  3 * 24
let dataArray = []


for (let i = 1; i <= total; i++){
    let avarage = 20 + getRandomValue()

    // let timeText = '+' + i + '时'
    // if (i % 24 === 0){
    //     timeText = '+'  + i / 24 + '日'
    // }
    let timeText = (new Date(milliseconds + i * 60 * 60 * 1000)).toLocaleString()
    timeText = timeText.slice(0,timeText.length-3)

    dataArray.push(
        [
            timeText,
            avarage,//均值
        ]
    )
}

export default dataArray
