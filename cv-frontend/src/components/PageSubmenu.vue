<template>
    <div class="page-submenu">
        <div class="page-submenu__info description-block">
            <h2 class="description-block__header">{{ title }}</h2>
            <p class="description-block__text"></p>
            <!-- <Button>MyButton</Button> -->
            <a href="" class="description-block__link">Übersicht</a>
        </div>
        <ul class="menu-list">
            <li v-for="item in items" :key="item.title" class="menu-list__item">
                <submenu-link :href="item.href">{{ item.title }}</submenu-link>
            </li>
        </ul>
    </div>
</template>

<script>
// @ts-check
import Vue from 'vue';
import SubmenuLink from './SubmenuLink.vue';
import Button from './base/Button';

export default Vue.extend({
    components: {
        Button,
        SubmenuLink,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        items: {
            type: Array,
            default: () => [],
        },
    },
});
</script>

<style lang="scss">
.page-submenu {
    background: #eee;
    padding: 20px 40px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Open Sans';

    // min-height: 400px;
}

.description-block {
    &__header {
        font-weight: normal;
        font-style: italic;
    }
}

.menu-list {
    list-style: none;
    max-height: 200px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    // justify-content: stretch;
    padding: 0;
    width: 400px;
    margin-left: 40px;

    &__item {
        // width: 50%;
        flex: 1;
    }
}
</style>
