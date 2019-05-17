<template>
    <div class="page-header" :class="{ 'page-header--small': small }">
        <div class="page-header__body">
            <a href="/" class="page-header__link">
                <img class="page-header__logo" :src="logoUrl" />
                <div class="page-header__title-wrapper">
                    <span class="page-header__title">{{ title }}</span>
                    <span class="page-header__subtitle">{{ subtitle }}</span>
                </div>
            </a>
            <slot name="default" class="page-header__nav" />
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
        logoUrl: {
            type: String,
            default: '../assets/logo-sq.png',
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

.page-header {
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

        .page-header--small & {
            transform: translateY(#{($initialHeaderHeight - $smallHeaderHeight) / 2} + 'px');
            transition: transform #{$transitionSpeedShrink};
        }
    }

    &__logo {
        height: #{$initialHeaderHeight - 25} + 'px';
        width: auto;
        margin: 12.5px 5px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        transition: transform 0.3s;

        .page-header--small & {
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
    }

    &__title {
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        transition: transform 0.15s; // cubic-bezier(0.47, 0, 0.74, 0.71);
        line-height: 1.4rem;
        color: #000;

        .page-header--small & {
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

        .page-header--small & {
            opacity: 0;
        }
    }

    &__nav {
        margin-left: 40px;
    }
}

.main-menu {
    li {
        line-height: 1rem;
    }
}
</style>
