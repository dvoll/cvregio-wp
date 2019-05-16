<template>
    <a :href="href" class="submenu-item">
        <slot />
    </a>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss">
.submenu-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    margin: 2px;
    background-color: #fff;
    color: #333;
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
        background-color: hsl(0, 0%, 97%);
    }
}
</style>
