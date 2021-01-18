/**
 * 对象深拷贝
 */
// import {parse} from "ol/xml";

export const deepClone = data => {
    var type = getObjType(data);
    var obj;
    if (type === 'array') {
        obj = [];
    } else if (type === 'object') {
        obj = {};
    } else {
        //不再具有下一层次
        return data;
    }
    if (type === 'array') {
        for (var i = 0, len = data.length; i < len; i++) {
            obj.push(deepClone(data[i]));
        }
    } else if (type === 'object') {
        for (var key in data) {
            obj[key] = deepClone(data[key]);
        }
    }
    return obj;
};
export const getObjType = obj => {
    var toString = Object.prototype.toString;
    var map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    if (obj instanceof Element) {
        return 'element';
    }
    return map[toString.call(obj)];
};


/**
 * WKID:4547投影坐标系正算公式
 * 椭球:         CGCS2000
 * 投影方法:      高斯-克吕格，3度带投影
 * 中央经线:      114E
 * @param B     纬度
 * @param L     经度
 * @returns {{x: number, y: number}} x为赤道方向坐标，y为中央经线方向坐标
 * @constructor
 */
export const BL2XY = (B,L)=>{
    const L0 = 114
    const B_Rad = B / 180 * Math.PI // 弧度单位
    const l_Rad = (L - L0) / 180 * Math.PI // 经度差，弧度单位

    const a = 6378137         //长轴
    const f = 1 / 298.257222101   //扁率
    const b = a - a * f       //短轴。公式:f= (a-b)/a
    const e = Math.sqrt(a*a - b*b) / a //第一偏心率
    const eʹ = Math.sqrt(a*a - b*b) / b //第二偏心率

    const t = Math.tan(B_Rad)
    const t2 = Math.pow(t,2)
    const t4 = Math.pow(t,4)

    const ŋ = eʹ * Math.cos(B_Rad)
    const ŋ2 = Math.pow(ŋ,2)
    const ŋ4 = Math.pow(ŋ,4)

    const Bl = Math.cos(B_Rad) * l_Rad
    const Bl2 = Math.pow(Bl,2)
    const Bl3 = Math.pow(Bl,3)
    const Bl4 = Math.pow(Bl,4)
    const Bl5 = Math.pow(Bl,5)
    const Bl6 = Math.pow(Bl,6)

    let sin_B = Math.sin(B_Rad)
    let sin_B2 = Math.pow(sin_B,2)
    let sin_B4 = Math.pow(sin_B,4)
    let sin_B6 = Math.pow(sin_B,6)
    let sin_B8 = Math.pow(sin_B,8)



    const m0 = a * (1 - e * e)
    const m2 = (3 / 2) * e * e * m0
    const m4 = (5 / 4) * e * e * m2
    const m6 = (7 / 6) * e * e * m4
    const m8 = (9 / 8) * e * e * m6

    const n0 =  a
    const n2 = (1 / 2) * e * e * n0
    const n4 = (3 / 4) * e * e * n2
    const n6 = (5 / 6) * e * e * n4
    const n8 = (7 / 8) * e * e * n6

    const a0 = m0 + (1/2) * m2 + (3/8) * m4 + (5/16) * m6 + (35/128) * m8
    const a2 = (1/2) * m2 + (1/2) * m4 + (15/32) * m6 + (7/16) * m8
    const a4 = (1/8) * m4 + (3/16) * m6 + (7/32) * m8
    const a6 = (1/32) * m6 + (1/16) * m8
    const a8 = (1/128) * m8


    // 子午圈曲率半径
    // const M = m0 + m2*sin_B2 + m4*sin_B4 + m6*sin_B6 + m8*sin_B8
    // 卯酉圈曲率半径
    const N = n0 + n2*sin_B2 + n4*sin_B4 + n6*sin_B6 + n8*sin_B8
    // 子午线弧长
    const X = a0 * B_Rad - (1/2) * a2 * Math.sin(2 * B_Rad) + (1 / 4) * a4 * Math.sin(4 * B_Rad) - (1 / 6) * a6 * Math.sin(6 * B_Rad) + (1 / 8) * a8 * Math.sin(8 * B_Rad)



    // 中央经线投影为纵轴(x)
    var x = X +
            (1 / 2) * N * t * Bl2 +
            (1 / 24) * N * t * (5 - t2 + 9 * ŋ2 + 4 * ŋ4) * Bl4 +
            (1 / 720) * N * t * (61 - 58 * t2 + t4) * Bl6

    // 赤道投影为横轴(y)
    // 坐标纵轴西移500公里当作起始轴
    var y = 500000 +
            N * Bl +
            (1/6) * N * (1 - t2 + ŋ2) * Bl3 +
            (1/120) * N * (5 - 18 * t2 + t4 + 14 * ŋ2 - 58 * t2 * ŋ2 ) * Bl5


    return {
        x: y,
        y: x
    }
}

/**
 * WKID:4547投影坐标系反算公式
 * 椭球:         CGCS2000
 * 投影方法:      高斯-克吕格，3度带投影
 * 中央经线:      114E
 * @param xx    横向坐标
 * @param yy    纵向坐标
 * @returns {{B: {DD: number, S: number, D: number, M: number}, L: {DD: number, S: number, D: number, M: number}}}
 * B:经度值，是一个对象,对象属性参考
 * L:维度值，是一个对象
 * DD:DD,  以度为单位的角度值
 * D:D,    度分秒，度的部分值
 * M:M,    度分秒，分的部分值
 * S:S     度分秒，秒的部分值
 * @constructor
 */
export const XY2BL = (xx,yy)=>{
    var x = yy
    var y = xx - 500000
    const L0 = 114
    const a = 6378137         //长轴
    const f = 1 / 298.257222101   //扁率
    const b = a - a * f       //短轴。公式:f= (a-b)/a
    const e = Math.sqrt(a*a - b*b) / a //第一偏心率


    const e2 = Math.pow(e,2)
    const e4 = Math.pow(e,4)
    const e6 = Math.pow(e,6)
    const e8 = Math.pow(e,8)
    const A1 = a * (1 - e2) * (1 + 3/4 * e2 + 45/64 * e4 + 175/256 * e6 + 11025/16384 * e8)
    const A2 = a * (1 - e2) * (3/4 * e2 + 15/16 * e4 + 525/512 * e6 + 2205/2048 * e8)
    const A3 = a * (1 - e2) * (15/64 * e4 + 105/256 * e6 + 2205/4096 * e8)
    const A4 = a * (1 - e2) * (35/512 * e6 + 315/2048 * e8)


    var B0 = (x / A1) / 180 * Math.PI
    const getB0 = ()=> {
        var B1 = (x + A2/2 * Math.sin(2 * B0) - A3/4 * Math.sin(4 * B0) + A4/6 * Math.sin(6 * B0)) / A1

        if ((B1 - B0) < 2.78 * Math.pow(10,-9) / 180 * Math.PI){
            B0 = B1
            return
        }else {
            B0 = B1
            getB0()
        }
    }
    getB0()

    var N = a / Math.sqrt(1 - Math.pow(e,2) * Math.pow(Math.sin(B0),2))
    var ŋ2 = Math.pow(e * Math.cos(B0),2) / (1 - Math.pow(e,2))
    var Y = y / N
    var t = Math.tan(B0)

    var B = B0 - 1/2  * (1 + ŋ2) * t * [
        Math.pow(Y,2) -
        (1 / 12) * Math.pow(Y,4) * (5 + 3 * Math.pow(t,2) + ŋ2 + 9 * ŋ2 * Math.pow(t,2)) +
        (1 / 360) * Math.pow(Y,6) * (61 + 90 * Math.pow(t,2) + 45 * Math.pow(t,4))
    ]

    var l = (
        Y -
        (1 / 6) * Math.pow(Y,3) * (1 + 2 * Math.pow(t,2) + ŋ2)+
        (1 / 120) * Math.pow(Y,5) * (5 + 28 * Math.pow(t,2) + 24 * Math.pow(t,4) + 6 * ŋ2 + 8 * ŋ2 * Math.pow(t,2))
    ) / Math.cos(B0)



    return {
        B:R2DMS(B),
        L:R2DMS(L0 / 180 * Math.PI + l)
    }

}


/**
 * 弧度转度分秒
 * @param rad
 * @returns {{DD: number, S: number, D: number, M: number}}
 * DD:DD,  rad转为度为单位
 * D:D,    rad转为度分秒后，度的部分值
 * M:M,    rad转为度分秒后，分的部分值
 * S:S     rad转为度分秒后，秒的部分值
 * @constructor
 */
function R2DMS (rad){
    var DD = rad  / Math.PI * 180
    var D = parseInt(DD)
    var D_spare = DD - D

    var MM = D_spare * 60
    var M = parseInt(MM)
    var M_spare = MM - M

    var S = M_spare * 60

    return {
        DD:DD,
        D:D,
        M:M,
        S:S
    }
}


