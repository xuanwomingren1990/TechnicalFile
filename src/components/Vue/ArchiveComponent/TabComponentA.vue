<template>
    <div class="container">
        <div style="margin-bottom: 30px">当前组件：
            <span style="color: lime;font-weight: bold">A</span>
        </div>
        <el-tabs tab-position="left" style="height: 200px;">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "TabComponentA"
    }
</script>

<style lang="scss" scoped>
.container{
    margin-top: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .currentComponentName{
    }
}
</style>
