#### 开发插件

`vue.js` 的插件因该暴露一个 `install` 方法。

`install` 方法的一个参数是 `Vue构造器`，第二个参数是一个可选的选项对象。

当调用 `Vue.use(插件)` 安装插件时，`Vue构造器` 将传递到 `install` 方法中，在该方法中可以利用 `Vue构造器` 注册全局的或实例的 `property`、`方法`、`指令`、`过滤器`、`过渡`、`组件`。

```
const plugin = {
    install (Vue,options){
        1、注册全局变量|方法
        Vue.name = 方法|变量

        2、注册实例变量|方法
        Vue.prototype.$name = 方法|变量

        3、注册全局指令
        Vue.directive(指令名称, {
            inserted: (el, binding, vnode) => {

            }
        })

        4、注册全局组件
        Vue.component(component.name,component)
    }
}

export plugin

```

