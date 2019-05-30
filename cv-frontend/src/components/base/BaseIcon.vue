<template>
    <svg
        class="base-icon"
        :class="{ 'base-icon--has-fill': fillRgb }"
        :viewBox="viewBox"
        :style="{ '--fill-rgb': fillRgb }"
    >
        <use :href="'#' + icon" />
    </svg>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    props: {
        icon: {
            type: String,
            default: 'arrow-right',
        },
        viewBox: {
            type: String,
            default: '0 0 50 50',
        },
        fillRgb: {
            type: String,
        },
    },
});
</script>

<style lang="scss">
.base-icon {
    fill: currentColor;

    &--has-fill {
        fill: rgb(var(--fill-rgb));
    }
}
</style>
