<template>
    <div class="absolutePanel-root">


        <div class="absolutePanel-container">
            <absolute-panel :top=" '20px' ">
                <div>adgadad</div>
            </absolute-panel>
        </div>


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
        background-color: aliceblue;
        height: 80vh;

        .absolutePanel-container{
            background-color: aliceblue;
        }
    }

</style>
