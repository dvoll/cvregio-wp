<template>
    <div class="cv-card-container" :class="{ 'cv-card-container--row': singleRow }">
        <div class="cv-card-container__grid">
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
    },
};
</script>
<style lang="scss"></style>
