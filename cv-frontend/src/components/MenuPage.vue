<template>
    <div class="menu-page">
        <a
            role="button"
            @click="handleBackClick"
            class="menu-page__back-link"
            :class="{ 'menu-page__back-link--visible': !!backButtonTitle }"
        >
            <base-icon icon="arrow-left" />
            {{ backButtonTitle }}
        </a>
        <!-- <div v-else class="menu-page__close-button-placeholder"></div> -->
        <h2 class="menu-page__header">{{ title }}</h2>
        <div class="menu-page__info">
            <slot name="info" />
        </div>
        <ul class="menu-list">
            <li v-for="item in items" :key="item.title" class="menu-list__item">
                <submenu-link
                    :href="getHrefForItem(item)"
                    type="inline"
                    @click="handleItemClick(item)"
                    >{{ item.title }}</submenu-link
                >
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
        backButtonTitle: {
            type: String,
        },
        title: {
            type: String,
        },
        allowChildren: {
            type: Boolean,
            default: true,
        },
        items: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        handleItemClick(item) {
            this.$emit('onItemSelect', { menuItem: item });
        },
        handleBackClick() {
            this.$emit('close');
        },
        getHrefForItem(item) {
            if (!this.allowChildren) {
                return item.href;
            }
            return item.children && item.children.length > 0 ? null : item.href;
        },
    },
});
</script>

<style lang="scss">
.menu-page {
    background: #fff;
    padding: 20px 40px;

    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Open Sans';
    position: absolute;
    padding-top: 100px;
    width: 100%;
    padding: 100px 20px 0 20px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    &__header {
        font-weight: normal;
        font-style: italic;
        font-size: 1.2rem;
    }

    &__back-link {
        font-size: $font__size-xs;
        visibility: hidden;

        .base-icon {
            height: 12px;
        }

        &--visible {
            visibility: visible;
        }
    }

    &__close-button {
        // TODO: Add button component
        background: none;
        border: none;
        padding: 4px 8px;
        cursor: pointer;
    }
}

.menu-list {
    list-style: none;
    max-height: 200px;
    padding: 0;
    width: 400px;
    display: flex;
    flex-direction: column;

    &__item {
        // width: 50%;
        flex: 1;
    }
}
</style>
