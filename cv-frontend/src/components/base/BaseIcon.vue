<template>
    <svg
        class="base-icon"
        :class="{ 'base-icon--primary': primary }"
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
        primary: {
            type: Boolean,
            default: false,
        },
    },
});
</script>

<style lang="scss">
.base-icon {
    --fill-rgb: #{$color-primary};
    fill: rgb(var(--fill-rgb));

    &--primary {
        fill: $color-accent-foreground;
    }
}
</style>
