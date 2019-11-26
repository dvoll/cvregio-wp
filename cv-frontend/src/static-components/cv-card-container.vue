<template>
    <div
        class="cv-card-container"
        :class="{
            'cv-card-container--row': singleRow,
            'cv-card-container--fixed-height': fixedHeight,
            'cv-card-container--wider': wider,
        }"
    >
        <div class="cv-card-container__grid" :class="{ 'cv-card-container--wider': wider }">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        singleRow: {
            type: Boolean,
            default: false,
        },
        wider: {
            type: Boolean,
            default: false,
        },
        fixedHeight: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
<style lang="scss"></style>
