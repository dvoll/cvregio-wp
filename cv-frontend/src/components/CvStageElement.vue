<template>
    <!-- <div class="cv-stage"> -->
    <swiper :options="swiperOptions">
        <swiper-slide
            class="cv-stage__item cv-stage-card"
            v-for="item in stageItems"
            :key="'swiper-item-' + item.id"
            v-html="item.innerHTML"
        >
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
    <!-- </div> -->
</template>

<script>
// @ts-check
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import './styles/_cv-stage-item.scss';

export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        items: {
            type: String,
        },
    },
    data() {
        return {
            stageItems: [],
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                parallax: true,
                effect: 'fade',
                // fadeEffect: {
                //     crossFade: true
                // }
            },
        };
    },
    mounted() {
        console.log('item string', this.items);

        this.$slots.default.forEach((elm, index) => {
            const htmlDoc = new DOMParser().parseFromString(
                elm.data.domProps.innerHTML,
                'text/html'
            );
            htmlDoc
                .querySelector('.cv-stage-card__body')
                .setAttribute('data-swiper-parallax', '200');
            console.log('add attribute', htmlDoc);

            this.stageItems.push({
                id: index,
                innerHTML: htmlDoc.activeElement.innerHTML,
            });
        });
        console.log('items', this.stageItems);
    },
};
</script>

<style lang="scss">
cv-stage {
    position: relative;
    display: block;
    // min-height: 500px;
    width: 100%;
    // background: #d2182e;
    background: #000;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    flex-wrap: nowrap;
}

.swiper-container {
    width: 100%;
    height: 100%;
}

.cv-stage__item {
    width: 100%;
    // height: 100%;
    background: #d2182e;
}

.cv-stage__controls {
    position: absolute;
    z-index: 55;
    bottom: 0;
    left: 0;
}

.swiper-pagination-bullet {
    background: #f2f2f2;
    opacity: 0.3;
}

.swiper-pagination-bullet-active {
    background: #f2f2f2;
    opacity: 1;
}
</style>
