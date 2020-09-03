<template>
<div class="absolutePanel-root">


    <absolute-panel :top=" '20px' " :left="'100px'">
        <div>这是要决对定位的内容</div>
    </absolute-panel>


<!-------------------笔记------------------>
<div class="notes hidden">
<pre>
AbsolutePanel组件：
1.AbsolutePanel组件是一个绝对定位的容器，使用时只需要给组件标签传入
  top, left, right, bottom, zIndex等属性，即可实现让容器绝对定位到相应的位置
2.把要绝对定位的内容，插入组件标签内，这些内容即可被绝对定位
<!--&lt;div&gt;&lt;/div&gt;-->
</pre>
</div>
<!-------------------笔记---------------->

</div>
</template>

<script>
    import AbsolutePanel from './AbsolutePanel'
    export default {
        name: "index",
        components : {AbsolutePanel}
    }
</script>

<style lang="scss" scoped>
    .absolutePanel-root{
        background-color: #8d8d8d;
        height: 80vh;
        position: relative;
    }
</style>
