<template>
    <div class="cv-associate">
        <img
            class="cv-associate__picture"
            v-if="imgSrc"
            :src="imgSrc"
            :alt="'picure of' + headline"
        />
        <div class="cv-associate__headline">{{ headline }}</div>
        <div class="cv-associate__subline">{{ subline }}</div>
    </div>
</template>

<script>
export default {
    props: {
        headline: {
            type: String,
            default: '',
        },
        subline: {
            type: String,
            default: '',
        },
        imgSrc: {
            type: String,
        },
    },
};
</script>

<style lang="scss">
.cv-associate {
    min-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
}

.cv-associate__headline,
.cv-associate__headline {
    text-align: center;
}

.cv-associate__headline {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    line-height: 1.3em;
    margin-top: 8px;
    margin-bottom: 3px;
}

.cv-associate__subline {
    font-size: 0.5333rem;
    color: $color__text-light;
    text-transform: uppercase;
}

.cv-associate__picture,
.cv-associate img,
.cv-associate__subline {
    flex-grow: 0;
}

.cv-associate__picture,
.cv-associate img {
    border-radius: 50%;
    height: 70px;
    width: 70px;
    background: #464646;
    overflow: hidden;
    font-size: 0.6rem;
}
</style>
