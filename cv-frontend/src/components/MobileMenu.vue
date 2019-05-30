<template>
    <div></div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    props: {
        items: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
});
</script>

<style lang="scss">
</style>