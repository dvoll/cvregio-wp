<template>
    <div class="cv-header" :class="{ 'cv-header--small': smallHeader }">
        <div class="cv-header__body">
            <img class="cv-header__logo" src="../assets/logo-sq.png" />
            <div class="cv-header__title-wrapper">
                <span class="cv-header__title">{{ title }}</span>
                <span class="cv-header__subtitle">{{ subtitle }}</span>
            </div>
            <cv-nav class="cv-header__nav">
                <!-- <template slot="default"> -->
                <!-- <slot name="nav">-header nav slot-</slot>
                <slot>-de-</slot>
                Default2 -->
                <div v-html="$slots.default[0].data.domProps.innerHTML"></div>
                <!-- </template> -->
            </cv-nav>
        </div>
    </div>
</template>

<script>
// @ts-check
import CvNav from './CvNav.vue';

// const initialHeaderHeight = 95;
const smallHeaderHeight = 50;
const CvHeaderElement = {
    components: {
        CvNav,
    },
    props: {
        title: {
            type: String,
            default: '',
        },
        subtitle: {
            type: String,
        },
    },
    data() {
        return {
            smallHeader: false,
        };
    },
    methods: {
        addScrollEventListener() {
            let last_known_scroll_position = 0;
            let ticking = false;
            window.addEventListener('scroll', e => {
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
        changeHeader(position) {
            if (!this.smallHeader && position > smallHeaderHeight) {
                this.smallHeader = true;
            }
            if (this.smallHeader && position < smallHeaderHeight) {
                this.smallHeader = false;
            }
        },
        // getRelativeHeaderTransformationProgress(scrollPosition) {
        //     if (scrollPosition > initialHeaderHeight) return 1;
        //     return scrollPosition / initialHeaderHeight;
        // },
        // updateTitlePosition() {},
        // updateHeaderHeight(position) {
        //     if (position > smallHeaderHeight) {
        //         return;
        //     }
        //     this.headerHeight = initialHeaderHeight - position;
        // },
    },
    mounted() {
        console.log('slots', this.$slots);

        this.addScrollEventListener();
    },
};
export default CvHeaderElement;
</script>

<style lang="scss">
$initialHeaderHeight: 95;
$smallHeaderHeight: 50;
$transitionSpeedGrow: 0.3s;
$transitionSpeedShrink: 0.4s ease-out;

cv-header {
    display: block;
    height: #{$initialHeaderHeight} + 'px';
}

.cv-header {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 50px;
    height: #{$initialHeaderHeight} + 'px';
    transition: transform 0.3s;
    border-bottom: 1px solid #fff;
    width: 100%;
    background: #fff;
    // overflow: hidden;

    &--small {
        // height: 50px;
        border-color: #ccc;
        transform: translateY(#{$smallHeaderHeight - $initialHeaderHeight} + 'px');
        transition: transform #{$transitionSpeedShrink};
    }

    &__body {
        height: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        transition: transform 0.3s;

        .cv-header--small & {
            // transform: translate(-30px, #{($initialHeaderHeight - $smallHeaderHeight) / 2} + 'px');
            transform: translateY(#{($initialHeaderHeight - $smallHeaderHeight) / 2} + 'px');
            transition: transform #{$transitionSpeedShrink};
        }
    }
    // padding: 12.5px 0;

    &__logo {
        // height: calc(100% - 25px);
        // position: absolute;
        height: #{$initialHeaderHeight - 25} + 'px';
        // height: 100%;
        // width: 80px;
        width: auto;
        // align-self: stretch;
        margin: 12.5px 5px;
        // margin: 0 5px;
        // background: rgb(192, 25, 25);
        // background-image: url('../../public/placeholder/logo-sq.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        // transition: height 0.5s;
        transition: transform 0.3s;

        .cv-header--small & {
            // height: #{$smallHeaderHeight - 25} + 'px';
            transform: scale(0.5);
            transition: transform #{$transitionSpeedShrink};
        }
    }

    &__title-wrapper {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        margin-left: 20px;
    }

    &__title {
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        transition: transform 0.15s; // cubic-bezier(0.47, 0, 0.74, 0.71);

        .cv-header--small & {
            transform: translate(-40px, 9px) scale(0.9);
            transition: transform 0.4s;
        }
    }

    &__subtitle {
        font-family: 'Open Sans', sans-serif;
        font-size: 11px;
        text-transform: uppercase;
        font-weight: 600;
        font-style: italic;
        color: #999;
        transition: opacity 0.5s;

        .cv-header--small & {
            opacity: 0;
        }
    }

    &__nav {
        margin-left: 40px;
    }
}
</style>
