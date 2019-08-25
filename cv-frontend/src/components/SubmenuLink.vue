<template>
    <a
        :href="href"
        @click="onClick"
        class="submenu-item"
        :class="{
            'submenu-item--block': type === 'block',
            'submenu-item--inline': type === 'inline',
        }"
    >
        <slot />
        <base-icon v-if="iconEnd" :icon="iconEnd" class="submenu-item__icon" />
    </a>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
        },
        type: {
            type: String, // block || inline
            default: 'block',
        },
        iconEnd: {
            type: String,
        },
    },
    methods: {
        onClick(event) {
            if (!this.href) {
                event.preventDefault();
                this.$emit('click');
            }
        },
    },
};
</script>

<style lang="scss">
.submenu-item {
    color: $color__accent;
    text-decoration: none;
    font-size: 0.9rem;
    padding: 15px 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    &--block {
        color: $color__primary;
        background-color: $color__background-input;
        padding: 4px 10px;
        margin: 2px;
        justify-content: center;

        &:hover {
            color: $color__primary;
        }

        &:visited {
            color: $color__primary;
        }
    }

    &:hover {
        background-color: darken($color__background-input, 2%);
    }

    &__icon {
        width: 13.5px;
        height: 13.5px;
        margin-left: 8px;
    }
}
</style>
