<template>
    <a :href="link" class="cv-card">
        <article class="cv-card__inner">
            <span
                class="cv-card__subtitle"
                :class="{ ' cv-card__subtitle--capitalized': capitalized }"
                >{{ subtitle }}</span
            >
            <h3 class="cv-card__title">{{ title }}</h3>
            <div
                class="cv-card__image"
                :style="{ 'background-image': 'url(' + imgSrc + ')' }"
            ></div>
            <slot name="default" />
        </article>
    </a>
</template>

<script>
export default {
    name: 'CvCard',
    props: {
        title: {
            type: String,
            default: '',
        },
        subtitle: {
            type: String,
            default: '',
        },
        link: {
            type: String,
            default: '#',
        },
        imgSrc: {
            type: String,
            default: '',
        },
        capitalized: {
            type: Boolean,
            default: true,
        },
    },
};
</script>

<style lang="scss">
.cv-card {
    display: block;
    width: 290px;
    margin: 10px;
    border: 1px solid $color__background-hr;
    border-radius: 5px;
    position: relative;

    text-decoration: none !important;
    color: $color__text-main;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: opacity 0.2s ease-out;
    }

    &:hover::after {
        opacity: 0.3;
    }
}

.cv-card__inner {
    width: 100%;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    > * {
        margin: 0 23px 20px 23px;

        :first-child {
            margin-top: 28px;
        }

        :last-child {
            margin-bottom: 28px;
        }
    }
}

.cv-card__subtitle {
    margin-top: 27.5px;
    margin-bottom: 0px;
    color: $color__text-lighter;
    @include font-size(0.8);
    font-style: italic;

    &--capitalized {
        text-transform: uppercase;
    }
}

.cv-card__title {
    color: $color__text-main;
    @include font-size(1.5);
    font-style: italic;
    font-weight: normal;
}

.cv-card__image {
    position: relative;
    height: 170px;
    width: 100%;
    margin-left: 0;
    margin-right: 0;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 20px;
        background: white;
    }
}
</style>
