<template>
    <div class="container">
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
    display: flex;
    justify-content: center;
}
</style>
