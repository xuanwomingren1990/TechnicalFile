let styleVariables = require('./src/styles/styleVariables.js')
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                // 在scss中使用 scss 全局变量
                // prependData: `@import "~@/styles/index.scss";`

                // 在scss中使用 javaScript 全局变量
                prependData: Object.keys(styleVariables).map(k => `\$${k}: ${styleVariables[k]};`).join('\n')
            }
        }
    }
}
