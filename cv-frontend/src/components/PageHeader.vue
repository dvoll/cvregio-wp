<template>
    <div
        class="cv-page-header"
        :class="{ 'cv-page-header--small': small, 'cv-page-header--mobile': mobile }"
    >
        <div class="cv-page-header__body">
            <a href="/" class="cv-page-header__link">
                <div class="cv-page-header__logo-container">
                    <img class="cv-page-header__logo" :src="logoUrl" />
                </div>
                <div class="cv-page-header__title-wrapper">
                    <span class="cv-page-header__title">{{ title }}</span>
                    <span class="cv-page-header__subtitle">{{ subtitle }}</span>
                </div>
            </a>
            <slot v-if="!mobile" name="default" class="cv-page-header__nav" />
            <div v-else class="cv-page-header__menu-button">
                <slot name="menu-button" class="cv-page-header__menu-button"></slot>
            </div>
        </div>
    </div>
</template>

<script>
const CvHeaderElement = {
    props: {
        title: {
            type: String,
            default: '',
        },
        subtitle: {
            type: String,
        },
        small: {
            type: Boolean,
        },
        mobile: {
            type: Boolean,
            default: false,
        },
        logoUrl: {
            type: String,
        },
    },
    methods: {
        onMobileToggle() {
            this.$emit('toggleMobileMenu');
        },
    },
};
export default CvHeaderElement;
</script>

<style lang="scss">
$initialHeaderHeight: 95;
$smallHeaderHeight: 50;
$transitionSpeedGrow: 0.3s;
$transitionSpeedShrink: 0.4s ease-out;

.cv-page-header {
    position: fixed;
    width: 100%;
    background-color: $color__background-body;
    overflow: hidden;

    &__link {
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
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
        padding: 0 50px;

        .cv-page-header--small & {
            transform: translateY(#{($initialHeaderHeight - $smallHeaderHeight) / 2} + 'px');
            transition: transform #{$transitionSpeedShrink};
        }

        .cv-page-header--mobile & {
            transition: none;
            transform: translateY(#{($initialHeaderHeight - $smallHeaderHeight) / 2 - 10} + 'px');
            padding-left: 0;
            padding-right: 0;
        }
    }

    &__logo-container {
        height: #{$initialHeaderHeight - 25} + 'px';
        width: 70px;
        margin: 12.5px 5px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        transition: transform 0.3s;

        .cv-page-header--small & {
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
        margin-right: 20px;

        .cv-page-header--mobile & {
            // position: absolute;
            // left: 70px;
            margin-right: 0px;
        }
    }

    &__title {
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        transition: transform 0.15s; // cubic-bezier(0.47, 0, 0.74, 0.71);
        line-height: 1.4rem;
        color: #000;

        .cv-page-header--small & {
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

        .cv-page-header--small & {
            opacity: 0;
        }

        .cv-page-header--mobile & {
            white-space: nowrap;
            overflow: hidden;
            width: 1px;
        }
    }

    &__nav {
        margin-left: 40px;
    }

    &__menu-button {
        padding: 5px;
        justify-self: end;
        position: absolute;
        right: 10px;
        z-index: 10;
    }
}
</style>
