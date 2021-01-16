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
 * WKID4547投影坐标系正算公式
 * 椭球:         CGCS2000
 * 投影方法:      高斯克吕格投影
 * 中央经线:      114E
 * @param B     纬度
 * @param L     经度
 * @returns {{x: number, y: number}} x为赤道方向坐标，y为中央经线方向坐标
 * @constructor
 */
export const BL2XY = (B,L)=>{ // eslint-disable-line no-unused-vars
    const L0 = 114
    const B_Rad = B / 180 * Math.PI // 弧度单位
    const l_Rad = (L - L0) / 180 * Math.PI // 经度差，弧度单位

    const a = 6378137         //长轴
    const f = 1 / 298.257222101   //扁率
    const b = a - a * f       //短轴。公式:f= (a-b)/a
    const e = Math.sqrt(a*a - b*b) / a //第一偏心率
    const eʹ = Math.sqrt(a*a - b*b) / b //第二偏心率

    const t = Math.tan(B_Rad)
    const ŋ = eʹ * Math.cos(B_Rad)

    /*----------------------------------------------*/
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

    let sin_B = Math.sin(B_Rad)
    // 子午圈曲率半径
    const M = m0 + m2 * Math.pow(sin_B,2) + m4 * Math.pow(sin_B,4) + m6 * Math.pow(sin_B,6) + m8 * Math.pow(sin_B,8) // eslint-disable-line no-unused-vars
    // 卯酉圈曲率半径
    const N = n0 + n2 * Math.pow(sin_B,2) + n4 * Math.pow(sin_B,4) + n6 * Math.pow(sin_B,6) + n8 * Math.pow(sin_B,8) // eslint-disable-line no-unused-vars

    const a0 = m0 + (1/2) * m2 + (3/8) * m4 + (5/16) * m6 + (35/128) * m8
    const a2 = (1/2) * m2 + (1/2) * m4 + (15/32) * m6 + (7/16) * m8
    const a4 = (1/8) * m4 + (3/16) * m6 + (7/32) * m8
    const a6 = (1/32) * m6 + (1/16) * m8
    const a8 = (1/128) * m8
    // 子午线弧长
    const X = a0 * B_Rad - (1/2) * a2 * Math.sin(2 * B_Rad) + (1 / 4) * a4 * Math.sin(4 * B_Rad) - (1 / 6) * a6 * Math.sin(6 * B_Rad) + (1 / 8) * a8 * Math.sin(8 * B_Rad)

    const Bl = Math.cos(B_Rad) * l_Rad

    // 中央经线投影为纵轴(x)
    var x = X +
            (1 / 2) * N * t * Math.pow(Bl,2) +
            (1 / 24) * N * t * (5 - Math.pow(t,2) + 9 * Math.pow(ŋ,2) + 4 * Math.pow(ŋ,4)) * Math.pow(Bl,4) +
            (1 / 720) * N * t * (61 - 58 * Math.pow(t,2) + Math.pow(t,4)) * Math.pow(Bl,6)

    // 赤道投影为横轴(y)
    // 坐标纵轴西移500公里当作起始轴
    var y = 500000 +
            N * Bl +
            (1/6) * N * (1 - Math.pow(t,2) + Math.pow(ŋ,2)) * Math.pow(Bl,3) +
            (1/120) * N * (5 - 18 * Math.pow(t,2) + Math.pow(t,4) + 14 * Math.pow(ŋ,2) - 58 * Math.pow(t,2) * Math.pow(ŋ,2) ) * Math.pow(Bl,5)



    return {
        x: y,
        y: x
    }
}


export const XY2BL = (xx,yy)=>{ // eslint-disable-line no-unused-vars
    var x = yy
    var y = xx - 500000
    const L0 = 114
    const a = 6378137         //长轴
    const f = 1 / 298.257222101   //扁率
    const b = a - a * f       //短轴。公式:f= (a-b)/a
    const e = Math.sqrt(a*a - b*b) / a //第一偏心率
    const eʹ = Math.sqrt(a*a - b*b) / b // 第二偏心率


    const m0 = a * (1 - e * e)
    const m2 = (3 / 2) * e * e * m0
    const m4 = (5 / 4) * e * e * m2
    const m6 = (7 / 6) * e * e * m4
    const m8 = (9 / 8) * e * e * m6

    const n0 =  a
    const n2 = (1 / 2) * e * e * n0
    const n4 = (3 / 4) * e * e * n2
    const n6 = (5 / 6) * e * e * n4
    const n8 = (7 / 8) * e * e * n6 // eslint-disable-line no-unused-vars

    const a0 = m0 + (1/2) * m2 + (3/8) * m4 + (5/16) * m6 + (35/128) * m8
    const a2 = (1/2) * m2 + (1/2) * m4 + (15/32) * m6 + (7/16) * m8
    const a4 = (1/8) * m4 + (3/16) * m6 + (7/32) * m8
    const a6 = (1/32) * m6 + (1/16) * m8
    const a8 = (1/128) * m8

    var B0 = x / a0
    const getB0 = ()=> {
        var B1 = (x + a2 * (1/2) * Math.sin(2 * B0) - a4 * (1/4)  * Math.sin(4 * B0) + a6 * (1/6)  * Math.sin(6 * B0) - a8 * (1/8)  * Math.sin(8 * B0)) / a0

        if ((B1 - B0) < 2.78 * Math.pow(10,-9)){
            B0 = B1
            return
        }else {
            B0 = B1
            getB0()
        }
    }
    getB0()

    var sinB0 = Math.sin(B0)
    var t = Math.tan(B0)
    var ŋ2 = eʹ * Math.pow(Math.cos(B0),2)
    var V = Math.sqrt(1 + Math.pow(eʹ,2) * Math.pow(Math.cos(B0),2))
    var N = n0 + n2 * Math.pow(sinB0,2) + n4 * Math.pow(sinB0,4) + n6 * Math.pow(sinB0,6) + n8 * Math.pow(sinB0,8)

    var B = B0 - (1 / 2) * Math.pow(V,2) * t * [
        Math.pow((y / N),2) -
        (1/12) * (5 + 3 * Math.pow(t,2) + ŋ2 - 9 * ŋ2 * Math.pow(t,2)) * Math.pow((y / N),4) +
        (1/360) * (61 + 90 * Math.pow(t,2) + 45 * Math.pow(t,4)) * Math.pow((y/N),6)
    ]

    var l = (1 / Math.cos(B0)) * [
        (y / N) -
        (1 / 6) * (1 + 2 * Math.pow(t,2) + ŋ2) * Math.pow((y/N),3) +
        (1 / 120) * (5 + 28 * Math.pow(t,2) + 24 * Math.pow(t,4) + 6 * ŋ2 + 8 * ŋ2 * Math.pow(t,2)) * Math.pow((y/N),5)
    ]



    return {
        B:R2DMS(B),
        L:R2DMS(L0 / 180 * Math.PI + l)
    }

}

/**
 * 弧度转度分秒
 * @param rad       角度，以弧度为单位
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


