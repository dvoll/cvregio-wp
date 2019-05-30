<template>
    <div>
        <dev-header></dev-header>
        Posts
    </div>
</template>

<script>
import stage from '../components/stage.vue';
import DevHeader from '../components/dev-header.vue';
import DevButtons from '../components/dev-buttons.vue';

export default {
    components: {
        stage,
        DevHeader,
        DevButtons,
    },
};
</script>

<style lang="scss">
#app {
    // font-family: 'Avenir', Helvetica, Arial, sans-serif;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    // color: #2c3e50;
    // margin-top: 60px;
}
</style>
