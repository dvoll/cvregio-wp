<template>
    <!-- <div> -->
    <ul class="main-menu" :class="{ 'main-menu--list': isList, 'main-menu--small': small }">
        <li
            class="menu-item"
            v-for="menuItem in menuItems"
            :key="menuItem.title"
            :class="{
                current: menuItem.current || hasCurrentAsChild(menuItem),
                'menu-item-has-children': menuItem.children && menuItem.children.length > 0,
            }"
        >
            <a
                v-if="menuItem.children.length > 0"
                href=""
                class="menu-item__toggle"
                @click.prevent="toggleMenu(menuItem)"
                >{{ menuItem.title }}
                <transition name="fade-submenu-icon">
                    <base-icon
                        v-show="activeItem && activeItem.title === menuItem.title"
                        icon="arrow-right"
                        class="menu-item__toggle-icon"
                    />
                </transition>
            </a>
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
        small: {
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
        hasCurrentAsChild(item) {
            if (item.children === null || item.children.length === 0) {
                return false;
            }
            for (const childItem of item.children) {
                if (childItem.current) {
                    return true;
                }
            }
            return false;
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
        background: $color__background-body;
    }

    .menu-item {
        padding: 5px 10px;

        &__toggle-icon {
            position: absolute;
            left: calc(50% - 6px);
            transform: translatey(0) rotateZ(90deg);
            bottom: -20px;
            width: 12px;
            height: 12px;
            color: $color__text-light;
            transition: opacity 0.2s ease-in-out, transform 0.2s ease;
        }
    }

    .menu-item a {
        text-decoration: none;
        // color: rgb(50, 50, 50);
        color: $color__primary;
        opacity: 0.8;
        font-family: 'Open Sans';
        font-size: 14px;
        text-transform: uppercase;
        position: relative;
        outline: none;
    }

    .menu-item.current-menu-item a,
    .menu-item.current a {
        font-weight: 600;
        color: $color__accent;
        opacity: 1;
    }
}

.main-menu--small .menu-item__toggle-icon {
    transform: translateY(-8px) rotateZ(90deg);
}

.fade-submenu-icon-enter, .fade-submenu-icon-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
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
