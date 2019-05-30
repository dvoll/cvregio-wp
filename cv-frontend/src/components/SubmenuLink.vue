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
    color: #333;
    text-decoration: none;
    font-size: 0.9rem;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    &--block {
        background-color: #fff;
        padding: 4px 10px;
        margin: 2px;
        justify-content: center;
    }

    &:hover {
        background-color: hsl(0, 0%, 97%);
    }
}
</style>
