<template>
    <div>
        <dev-header></dev-header>
        <stage></stage>
        <cv-nav></cv-nav>
        <br v-for="i in [, , , , , , , , , , , , , , , , , , , , , , , , , , , ,]" />
    </div>
</template>

<script>
import stage from './dev/components/stage.vue';
import DevHeader from './dev/components/dev-header.vue';
import CvNav from './components/CvNav.vue';

export default {
    name: 'app',
    components: {
        stage,
        DevHeader,
        CvNav,
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
