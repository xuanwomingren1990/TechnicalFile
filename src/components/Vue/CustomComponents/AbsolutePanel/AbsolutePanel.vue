<template>
    <div class="absolutePanel-wrapper" :style="{
        'top': top, 'left': left, 'right': right, 'bottom': bottom, 'z-index': zIndex
    }">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "AbsolutePanel",
        props: {
            top: {
                type: String,
                default: 'auto',
                required: false
            },
            left: {
                type: String,
                default: 'auto',
                required: false
            },
            right: {
                type: String,
                default: 'auto',
                required: false
            },
            bottom: {
                type: String,
                default: 'auto',
                required: false
            },
            zIndex: {
                type: Number,
                default: 9,
                required: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .absolutePanel-wrapper {
        background-color: aqua;
        position: absolute;
        margin: 0;
        padding: 0;
        /*默认层级*/
        z-index: 9;
    }
</style>
