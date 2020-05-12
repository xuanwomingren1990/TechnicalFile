<template>
<div class="container">
    <div class="buttons">
        <!--在父组件中切换动态组件-->
        <el-row>
            <el-button type="primary" size="small" v-on:click="switchTo('TabComponent_A')">组件A</el-button>
            <el-button type="primary" size="small" v-on:click="switchTo('TabComponent_B')">组件B</el-button>
        </el-row>
    </div>
    <!--动态组件-->
    <!--1.组件会在 `currentTabComponent` 改变时切换-->
    <!--2.切换掉的组件实例将被移除掉，当切换回来的时候，将重新创建一个该组件的实例-->
    <!--<component v-bind:is="currentTabComponent"></component>-->

    <!--在动态组件上使用 keep-alive-->
    <!--1.切换掉的组件实例将保留在内存中，当切换回来的时候，不会重新创建；从而可以保留它的状态或避免重新渲染-->
    <!--2.配合被切换组件的 'activated' 钩子，可一实现起 组件延迟加载的作用-->
    <keep-alive>
        <component v-bind:is="currentTabComponent" v-on:checkout="checkout"></component>
    </keep-alive>


<!-------------------笔记------------------>
<div class="notes hidden">
<pre>
    动态组件的应用场景：
    1.根据属性值，动态切换组件；
      例如：点击按钮，将会改变vue实例上的currentTabComponent属性值，而vue将动态根据该值来渲染相应的组件；
    2.保存被切换组件的状态；
      例如：之前点击了A组件的第三个tab,当再次展示本A组件时,还是保持点击A第三个tab的状态。
    3.组件切换时，延迟显示组件；
      例如：点击B按钮时，B组件将延迟1秒显示
    <!--&lt;div&gt;&lt;/div&gt;-->
</pre>
</div>
<!-------------------笔记---------------->


</div>
</template>

<script>
    import TabComponent_A from './TabComponentA'
    import TabComponent_B from './TabComponentB'
    export default {
        name: "index",
        // 注册组件
        components: {
            TabComponent_A: TabComponent_A,
            TabComponent_B: TabComponent_B
        },
        data (){
            return {
                currentTabComponent: 'TabComponent_A'
            }
        },
        methods: {
            switchTo(value){
                this.currentTabComponent = value
            },
            checkout(val){
                this.switchTo(val)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        .buttons{
            display: flex;
            justify-content: center;
        }
    }
</style>
