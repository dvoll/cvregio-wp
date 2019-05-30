<template>
    <div>
        <div class="header-placeholder" :class="{ 'header-placeholder--mobile': isMobile }" />
        <div
            v-if="activeItem && !isMobile"
            class="overlay"
            style="position: fixed; z-index: 95; width: 100vw; height: 100vh; background: rgba(0,0,0,0.2);"
            @click="closeSubmenu()"
        />
        <div
            class="cv-header"
            :class="{
                'cv-header--small': shouldShowSmallHeader,
                'cv-header--submenu-open': activeItem && (!isMobile || mobileOpen),
                'cv-header--mobile': isMobile,
                'cv-header--mobile-open': mobileOpen,
            }"
        >
            <!-- <cv-nav
                v-if="isMobile && mobileOpen"
                :isList="isMobile"
                :menuItems="menuItems"
                @toggleMenu="toggleMenu"
            /> -->
            <MenuPage
                class="cv-header__mobile-menu"
                v-if="isMobile && mobileOpen"
                :items="menuItems"
                @onItemSelect="toggleMenu"
                title="Menü"
            ></MenuPage>
            <MenuPage
                class="cv-header__mobile-submenu"
                v-if="
                    isMobile && mobileOpen && activeItem !== null && activeItem.children.length > 0
                "
                :items="activeItem.children"
                :allowChildren="false"
                :title="activeItem.title"
                backButtonTitle="Zurück"
                @close="activeItem = null"
            >
                <template slot="info">
                    <p class="description-block__text"></p>
                    <a :href="activeItem.href" class="description-block__link">Übersicht</a>
                </template>
            </MenuPage>
            <page-submenu
                v-if="activeItem !== null && activeItem.children.length > 0 && !isMobile"
                class="cv-header__submenu"
                :title="activeItem.title"
                :items="activeItem.children"
                :href="activeItem.href"
                :isList="isMobile"
            ></page-submenu>
            <page-header
                class="cv-header__page-header"
                :title="title"
                :subtitle="subtitle"
                :small="shouldShowSmallHeader"
                :logoUrl="logoUrl"
                :mobile="isMobile"
                @toggleMobileMenu="toggleMobileMenu()"
            >
                <cv-nav :menuItems="menuItems" @toggleMenu="toggleMenu" />
                <hamburger slot="menu-button" :open="mobileOpen" @click="toggleMobileMenu()" />
            </page-header>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import CvNav from './CvNav.vue';
import PageHeader from './PageHeader.vue';
import PageSubmenu from './PageSubmenu.vue';
import MenuPage from './MenuPage.vue';
import Hamburger from './Hamburger.vue';
// import PageHeader from './PageHeader.vue';

// const initialHeaderHeight = 95;
const smallHeaderHeight = 50;
const CvHeader = Vue.extend({
    components: {
        CvNav,
        PageHeader,
        PageSubmenu,
        MenuPage,
        Hamburger,
    },
    props: {
        title: {
            type: String,
            default: '',
        },
        subtitle: {
            type: String,
        },
        logoUrl: {
            type: String,
        },
        menuItems: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            smallHeader: false,
            activeItem: null,
            mobileOpen: false,
            isMobile: false,
        };
    },
    computed: {
        shouldShowSmallHeader() {
            return this.smallHeader || this.isMobile;
        },
    },
    methods: {
        addScrollEventListener() {
            let last_known_scroll_position = 0;
            let ticking = false;
            window.addEventListener('scroll', () => {
                last_known_scroll_position = window.scrollY;

                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        // const progress = this.getRelativeHeaderTransformationProgress(
                        //     last_known_scroll_position
                        // );
                        this.changeHeader(last_known_scroll_position);
                        ticking = false;
                    });

                    ticking = true;
                }
            });
        },
        addResizeEventListener() {
            let lastKnownResizeWidth = 0;
            let ticking = false;
            window.addEventListener('resize', () => {
                lastKnownResizeWidth = window.innerWidth;

                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        this.handleResize(lastKnownResizeWidth);
                        ticking = false;
                    });

                    ticking = true;
                }
            });
        },
        handleResize(width) {
            this.isMobile = width < 1200;
            if (width < 1200) {
                this.isMobile = true;
                this.setBodyNoScroll(this.mobileOpen);
            } else {
                this.isMobile = false;
                this.setBodyNoScroll(false);
            }
        },
        setBodyNoScroll(noscroll) {
            if (noscroll) {
                document.getElementsByTagName('body')[0].classList.add('no-scroll');
            } else {
                document.getElementsByTagName('body')[0].classList.remove('no-scroll');
            }
        },
        changeHeader(position) {
            if (!this.smallHeader && position > smallHeaderHeight) {
                this.smallHeader = true;
            }
            if (this.smallHeader && position < smallHeaderHeight) {
                this.smallHeader = false;
            }
        },
        toggleMenu({ menuItem }) {
            console.log('toggle menu in header', menuItem);

            if (this.activeItem && this.activeItem.title === menuItem.title) {
                this.activeItem = null;
                return;
            }
            this.activeItem = menuItem;
        },
        toggleMobileMenu() {
            this.mobileOpen = !this.mobileOpen;
            this.setBodyNoScroll(this.mobileOpen);
        },
        closeSubmenu() {
            console.log('close submenu');

            this.activeItem = null;
        },
    },
    mounted() {
        this.addScrollEventListener();
        this.addResizeEventListener();
        this.handleResize(window.innerWidth);
    },
});
export default CvHeader;
</script>

<style lang="scss">
$initialHeaderHeight: 95;
$smallHeaderHeight: 50;
$mobileHeaderHeight: 70;
$transitionSpeedGrow: 0.3s;
$transitionSpeedShrink: 0.4s ease-out;

body.no-scroll {
    overflow: hidden;
}

.header-placeholder {
    width: 100%;
    height: #{$initialHeaderHeight}px;

    &--mobile {
        height: #{$mobileHeaderHeight}px;
    }
}

.cv-header {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    transition: transform 0.3s;
    width: 100%;
    background: #fff;

    &--small {
        transform: translateY(#{$smallHeaderHeight - $initialHeaderHeight} + 'px');
        transition: transform #{$transitionSpeedShrink};
    }

    &--mobile {
        transition: none;
        transform: translateY(#{$smallHeaderHeight - $mobileHeaderHeight} + 'px');
    }

    &__page-header {
        border-bottom: 1px solid #ccc;

        .cv-header--mobile-open &,
        .cv-header--submenu-open & {
            border-bottom: none;
        }
    }

    &__mobile-menu,
    &__mobile-submenu {
        position: absolute;
        width: 100%;
        height: 100vh;
        padding-bottom: 100px;
    }

    &__submenu {
        .cv-header--mobile & {
            height: calc(100vh - 75px);
        }
    }

    &__nav {
        margin-left: 40px;
    }
}
</style>
