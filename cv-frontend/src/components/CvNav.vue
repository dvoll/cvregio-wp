<template>
    <div>
        <ul class="main-menu">
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
    </div>
</template>

<script>
import Vue from 'vue';

const cvNav = Vue.extend({
    components: {},
    // data() {
    //     return {
    //         menuItems: [{ title: '1' }, { title: '2', childItems: [{ title: '2a' }] }],
    //         activeItem: null,
    //     };
    // },
    props: {
        menuItems: {
            type: Array,
            default: () => [],
        },
        activeItem: {
            default: null,
        },
    },
    computed: {
        menuItemsWithChildren() {
            return this.menuItems.filter(item => item.children && item.children.length > 0);
        },
    },
    methods: {
        //     getMenuItems(items, menuItemsArray) {
        //         for (let item in items) {
        //             if (!isNaN(item)) {
        //                 item = items[item];
        //                 const child = item.children[0];
        //                 const menuItem = {
        //                     title: child.childNodes[child.childNodes.length - 1].data,
        //                     children: [],
        //                     href: child.href,
        //                 };
        //                 // if (item.classList.forEach(item => item === 'current-menu-item')) {
        //                 if (item.classList.contains('current-menu-item')) {
        //                     menuItem.current = true;
        //                 }
        //                 if (item.children[2]) {
        //                     menuItem.children = this.getMenuItems(item.children[2].children, []);
        //                 }
        //                 menuItemsArray.push(menuItem);
        //             }
        //         }
        //         return menuItemsArray;
        //     },
        toggleMenu(item) {
            // if (this.activeItem && this.activeItem.title === item.title) {
            //     this.activeItem = null;
            //     return;
            // }
            // this.activeItem = item;
            console.log('toggle menu');

            this.$emit('toggleMenu', { menuItem: item });
        },
    },
    // mounted() {
    //     if (this.$slots.default) {
    //         const elm = this.$slots.default[0];
    //         const htmlDoc = new DOMParser().parseFromString(
    //             elm.data.domProps.innerHTML,
    //             'text/html'
    //         );
    //         const mainMenu = htmlDoc.querySelector('.main-menu');
    //         console.log('main menu', mainMenu);

    //         this.menuItems = this.getMenuItems(mainMenu.children, []);

    //         // for (let item in mainMenu.children) {
    //         //     if (!isNaN(item)) {
    //         //         item = mainMenu.children[item];
    //         //         const menuItem = {
    //         //             title: item.children[0].innerHTML,
    //         //             children: [],
    //         //         };
    //         //         if (item.children[2]) {
    //         //             for (const subitem in item.children[2]) {
    //         //                 menuItem.children.push({
    //         //                     title: subitem.children[0].innerHTML,
    //         //                 });
    //         //             }
    //         //         }
    //         //         this.menuItems.push({ menuItem });
    //         //     }
    //         // }
    //         console.log();
    //     }
    // },
});
export default cvNav;
</script>

<style lang="scss">
.main-menu {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;

    // .menu-item {
    //     // &__toggle {
    //     //     position: relative;

    //     //     &::after {
    //     //         content: '';
    //     //         position: absolute;
    //     //         display: block;
    //     //         height: 0;
    //     //         width: 0;
    //     //         margin: 0 calc(50% - 30px);
    //     //         bottom: -6px;
    //     //         border-left: 20px solid transparent;
    //     //         border-right: 20px solid transparent;
    //     //         border-bottom: 20px solid #ccc;
    //     //     }
    //     // }
    // }

    > .menu-item-has-children {
        position: relative;

        > ul {
            display: block;
            position: absolute;
            // left: 0;
            // right: 0;
            // height: 300px;
            margin: 0 auto;
            background: #ccc;
            margin-top: 20px;

            // &::after {
            //     content: '';
            //     position: absolute;
            //     left: 0;
            //     right: 0;
            //     width: 100vw;
            //     margin-left: -50vw;
            //     height: 300px;
            //     background: green;
            // }
        }
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

.sub-menu {
    // display: none;
}
</style>
