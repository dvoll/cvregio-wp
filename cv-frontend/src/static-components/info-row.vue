<template>
    <div class="info-row">
        <div class="info-row__header">
            <base-icon icon="edit" class="info-row__icon" size="12" />
            <span class="info-row__label">{{ label }}</span>
        </div>
        <div class="info-row__title">{{ title }}</div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        iconName: {
            type: String,
            default: '',
        },
    },
};
</script>
