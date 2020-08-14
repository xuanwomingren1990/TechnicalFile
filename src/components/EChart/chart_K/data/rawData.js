function getRandomValue(){
    let num1 =  ((Math.random()*5)+1)
    let num2 = ((Math.random()*5)+1)
    let num = Math.ceil(num1- num2)
    return num
}


let total = 60 * 7 * 24
let dataArray = []

const date = new Date(2020,7,14,1)
export const milliseconds = date.getTime()
console.log('--------------toLocaleString---------------')
console.log(date.toLocaleString())


for (let i = 0; i <= total; i++){
    let avarage = 20 + getRandomValue()

    // let timeText = '-' + i + '时'
    // if (i === 0){
    //     timeText = i
    // } else if (i > 0 && i % 24 === 0 && i % (7 * 24) != 0 && i % (30 * 24) != 0){
    //     timeText = '-' +  i / 24 + '日'
    // }else if(i > 0 && i % (7 * 24) == 0 && i % (30 * 24) != 0){
    //     timeText = '-' +  i / (7 * 24) + '周'
    // }else if(i > 0 && i % (30 * 24) === 0){
    //     timeText = '-' +  i / (30 * 24) + '月'
    // }

    let timeText = (new Date(milliseconds - i * 60 * 60 * 1000)).toLocaleString()
    timeText = timeText.slice(0,timeText.length-3)
    dataArray.push(
        [
            timeText,
            avarage,//均值
            avarage,//均值
            '',
            '',
            avarage + Math.ceil(Math.random() * 1),//最高值
            avarage - Math.ceil(Math.random() * 1),//最低值
        ]
    )
}
dataArray.reverse()

export default dataArray
