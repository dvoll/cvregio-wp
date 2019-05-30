<template>
    <dev-page-layout>
        <dev-header slot="header" />
        <dev-page-content />
        <!-- <dev-buttons /> -->
        <dev-default-content />
    </dev-page-layout>
</template>

<script>
import DevHeader from '../components/dev-header.vue';
import DevButtons from '../components/dev-buttons.vue';
import DevPageLayout from '../components/dev-page-layout.vue';
import DevDefaultContent from '../components/dev-default-content.vue';
import DevPageContent from '../components/dev-page-content.vue';

export default {
    components: {
        DevHeader,
        DevButtons,
        DevPageContent,
        DevDefaultContent,
        DevPageLayout,
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
