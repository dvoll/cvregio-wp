<template>
    <!-- <div> -->
    <ul class="main-menu" :class="{ 'main-menu--list': isList }">
        <li
            class="menu-item"
            v-for="menuItem in menuItems"
            :key="menuItem.title"
            :class="{
                current: menuItem.current,
                'menu-item-has-children': menuItem.children && menuItem.children.length > 0,
            }"
        >
            <a
                v-if="menuItem.children.length > 0"
                href=""
                class="menu-item__toggle"
                @click.prevent="toggleMenu(menuItem)"
                >{{ menuItem.title }}</a
            >
            <a v-else :href="menuItem.href">{{ menuItem.title }}</a>
        </li>
    </ul>
    <!-- </div> -->
</template>

<script>
import Vue from 'vue';

const cvNav = Vue.extend({
    components: {},
    props: {
        menuItems: {
            type: Array,
            default: () => [],
        },
        activeItem: {
            default: null,
        },
        isList: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        menuItemsWithChildren() {
            return this.menuItems.filter(item => item.children && item.children.length > 0);
        },
    },
    methods: {
        toggleMenu(item) {
            this.$emit('toggleMenu', { menuItem: item });
        },
    },
});
export default cvNav;
</script>

<style lang="scss">
.main-menu {
    li {
        line-height: 1rem;
    }
}

.main-menu {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;

    &--list {
        position: fixed;
        padding-top: 100px;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        background: #fff;
    }

    .menu-item {
        padding: 5px 10px;
    }

    .menu-item a {
        text-decoration: none;
        color: rgb(50, 50, 50);
        font-family: 'Open Sans';
        font-size: 14px;
        text-transform: uppercase;
        position: relative;

        // &:before {
        //     content: '';
        //     position: absolute;
        //     bottom: -2px;
        //     left: 0;
        //     width: 100%;
        //     height: 2px;
        //     background: rgba(0, 0, 0, 0);
        //     // border-bottom: 1px solid rgba(0, 0, 0, 0);
        // }
    }

    .menu-item a:hover:before {
        background: rgb(50, 50, 50);
        height: 1px;
    }

    .menu-item.current-menu-item a,
    .menu-item.current a {
        font-weight: 600;
        color: rgb(192, 32, 32);

        &:before {
            background: rgb(192, 32, 32);
        }
    }
}

.main-menu__submenu {
    position: absolute;
    left: 0;
    right: 0;
    background: #ccc;
    min-height: 50px;
}

.submenu--container {
    position: absolute;
    left: 0;
    right: 0;
    // min-height: 100px;
}

.submenu-expand {
    display: none;
}
</style>
