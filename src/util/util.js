/**
 * 对象深拷贝
 */
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
 * 坐标正算
 * @param B
 * @param L
 * @param L0    中央经线
 * @returns {{x: number, y: number}}
 * @constructor
 */
export const BL2XY = (B,L,L0)=>{ // eslint-disable-line no-unused-vars
    const B_Rad = B / 180 * Math.PI // eslint-disable-line no-unused-vars // 弧度单位
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
    var x = X +
            (1 / 2) * N * t * Math.pow(Bl,2) +
            (1 / 24) * N * t * (5 - Math.pow(t,2) + 9 * Math.pow(ŋ,2) + 4 * Math.pow(ŋ,4)) * Math.pow(Bl,4) +
            (1 / 720) * N * t * (61 - 58 * Math.pow(t,2) + Math.pow(t,4)) * Math.pow(Bl,6)

    var y = N * Bl +
            (1/6) * N * (1 - Math.pow(t,2) + Math.pow(ŋ,2)) * Math.pow(Bl,3) +
            (1/120) * N * (5 - 18 * Math.pow(t,2) + Math.pow(t,4) + 14 * Math.pow(ŋ,2) - 58 * Math.pow(t,2) * Math.pow(ŋ,2) ) * Math.pow(Bl,5)



    return {
        x: y + 500000,
        y: x
    }
}
