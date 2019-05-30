<template>
    <div>
        <dev-header></dev-header>
        <stage></stage>
        Homepage
    </div>
</template>

<script>
import stage from '../components/stage.vue';
import DevHeader from '../components/dev-header.vue';

export default {
    components: {
        stage,
        DevHeader,
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
