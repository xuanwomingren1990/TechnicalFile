### formatter
介绍 `内容格式器`-`字符串模板` 的用法

![img.png](./img.png)
- `{a|{b}}` 即名为` a` 的盒子；

- `\n` 即换行；

- `{hr|}` 即名为 `hr` 的盒子；

- `{b|{c}}` 即名为` b` 的盒子；

在 `rich`分别设置3个盒子的样式。

```javascript
label:{
    formatter:'{a|{b}}\n{hr|}\n{b|{c}}',
    rich:{
        a:{
            aligin:'center',
            color: this.scssVariables.grauyText
        },
        hr:{
            height:1,
                width:'100%',
                height:1,
                backgournd: this.scssVariables.grauyText
        },
        b:{
            align:"center",
            color: this.scssVariables.grauyText
        }
    }
}
```

### 多个坐标轴
介绍给图标添加多个坐标轴。如下图所示
<img src="./img_1.png" alt="img.png" style="zoom: 50%;" />