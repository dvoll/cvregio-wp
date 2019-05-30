<template>
    <div
        class="page-submenu"
        :class="{ 'page-submenu--grid': !isList, 'page-submenu--list': isList }"
    >
        <div class="page-submenu__info description-block">
            <h2 class="description-block__header">{{ title }}</h2>
            <p class="description-block__text"></p>
            <!-- <Button>MyButton</Button> -->
            <a :href="href" class="description-block__link">Übersicht</a>
        </div>
        <ul class="menu-list" :class="{ 'menu-list--grid': !isList }">
            <li v-for="item in items" :key="item.title" class="menu-list__item">
                <submenu-link :href="item.href" :type="'inline'">{{ item.title }}</submenu-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue';
import SubmenuLink from './SubmenuLink.vue';

export default Vue.extend({
    components: {
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
        href: {
            type: String,
            default: '',
        },
        isList: {
            type: Boolean,
            default: false,
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
    position: absolute;
    padding-top: 100px;
    width: 100%;

    &--list {
        // height: calc(100vh - 75px);
        padding: 100px 20px 0 20px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
}

.description-block {
    &__header {
        font-weight: normal;
        font-style: italic;
        font-size: 1.2rem;
    }
}

.menu-list {
    list-style: none;
    max-height: 200px;
    padding: 0;
    width: 400px;
    display: flex;
    flex-direction: column;

    &--grid {
        margin-left: 40px;
        flex-wrap: wrap;
    }

    &__item {
        // width: 50%;
        flex: 1;
    }
}
</style>
