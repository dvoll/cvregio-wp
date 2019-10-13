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
}

.cv-associate__headline,
.cv-associate__headline {
    text-align: center;
}

.cv-associate__headline {
    flex-grow: 1;
    display: flex;
    align-items: center;
}

.cv-associate__picture,
.cv-associate__subline {
    flex-grow: 0;
}

.cv-associate__picture {
    border-radius: 50%;
    height: 70px;
    width: 70px;
    background: #464646;
    overflow: hidden;
}
</style>