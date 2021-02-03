## 1. JS中的样式变量
- js文件中定义样式变量
```javascript
 // styleVariables.js文件
module.exports = {
    
    'blue': '#1ba2f7',
    'yellow': '#f1c277',
    'canyan': '#8f9cff',
    'gray': '#a7a7a7'
}

```
#### 1.1 在scss中使用
- 配置为全局scss变量
```javascript
let styleVariables = require('./src/styles/styleVariables.js')
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: Object.keys(styleVariables).map(k => `\$${k}: ${styleVariables[k]};`).join('\n')
            }
        }
    }
}

```
- 使用全局scss变量
```scss
.variable-scss{
  color: gray;
}
```

#### 1.2 在js中使用
作为模块引入到js文件中即可。
- 通过插件，作为vue全局属性，或vue实例属性
```javascript
// styleVariables插件

let styles = require('@/styles/styleVariables.js')
const styleVariables = {
    install(Vue,options){
        Vue.styleVariables = styles
        Vue.prototype.$styleVariables = styles
    }
}

export {styleVariables}
```
```javascript
// 使用插件
import {styleVariables} from '@/components/Vue/Plugins/index.js'
Vue.use(styleVariables)

```
- 在组件中引入
```scss
// 组件中
<script>
  let styleVariables = require('@/styles/styleVariables.js')
</script>
```


## 2. scss文件中的样式变量
- scss文件中定义样式变量
```scss
//resource-variables.scss中

$level1:20%;
$level2:10%;

$water-color: #1ba2f7;
$water-color-1: #1ba2f7;
$water-color-2: #1ba2f7;


$power-color: #f1c277;
$power-color-1: #f1c277;
$power-color-2: #C677F1;

```
- 为了方便在`js`中引入，统一在`index.scss`中导出
```scss
//index.scss中
@import "./resource-variables";
:export{
  waterColor1:$water-color-1;
  waterColor2:$water-color-2;
}
```
#### 2.1 在scss中使用
- 配置为全局scss变量
```javascript
module.exports = {
    css: {
        loaderOptions: {
            scss:{
                // 在scss中使用 scss 全局变量
                prependData: `@import "~@/styles/index.scss";`
            }
        }
    }
}
```
- 使用全局scss变量
```scss
p:nth-child(2){
      color: $power-color-2;
}
```

#### 2.2 在js中引入变量
```javascript
// vue组件中
 import colors from '@/styles/index.scss'
```