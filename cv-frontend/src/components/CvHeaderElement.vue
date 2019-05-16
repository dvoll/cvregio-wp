<template>
    <cv-header :menuItems="menuItems" :title="title" :subtitle="subtitle" logUrl="url" />
</template>

<script>
// @ts-check
import CvHeader from './CvHeader.vue';

const CvHeaderElement = {
    components: {
        CvHeader,
    },
    props: {
        title: {
            type: String,
            default: '',
        },
        subtitle: {
            type: String,
        },
        // menuItems: {
        //     type: Array,
        // },
    },
    data() {
        return {
            menuItems: [],
        };
    },
    methods: {
        getMenuItems(items, menuItemsArray) {
            for (let item in items) {
                // @ts-ignore
                if (!isNaN(item)) {
                    item = items[item];
                    // @ts-ignore
                    const child = item.children ? item.children[0] : [];
                    const menuItem = {
                        title: child.childNodes[child.childNodes.length - 1].data,
                        children: [],
                        href: child.href,
                    };
                    if (item.classList.contains('current-menu-item')) {
                        menuItem.current = true;
                    }
                    if (item.children[2]) {
                        menuItem.children = this.getMenuItems(item.children[2].children, []);
                    }
                    menuItemsArray.push(menuItem);
                }
            }
            return menuItemsArray;
        },
    },
    mounted() {
        if (this.$slots.default) {
            const elm = this.$slots.default[0];
            const htmlDoc = new DOMParser().parseFromString(
                elm.data.domProps.innerHTML,
                'text/html'
            );
            const mainMenu = htmlDoc.querySelector('.main-menu');
            console.log('main menu', mainMenu);

            this.menuItems = this.getMenuItems(mainMenu.children, []);
        }
    },
};
export default CvHeaderElement;
</script>

<style lang="scss">
cv-header {
    display: block;
    height: 95px;
}
</style>
