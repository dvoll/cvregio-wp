<template>
    <a
        :href="link"
        class="cv-card no-link-style"
        :class="{ 'cv-card--wider': wider, 'cv-card--fixed-height': fixedHeight }"
    >
        <div class="cv-card__inner-wrapper">
            <article class="cv-card__inner">
                <span
                    class="cv-card__subtitle"
                    :class="{ ' cv-card__subtitle--capitalized': capitalized }"
                    >{{ subtitle }}</span
                >
                <h3 class="cv-card__title">{{ title }}</h3>
                <img v-if="imgSrc" class="cv-card__image" :src="imgSrc" />
                <slot name="default" />
            </article>
        </div>
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
        wider: {
            type: Boolean,
            default: false,
        },
        fixedHeight: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss"></style>
