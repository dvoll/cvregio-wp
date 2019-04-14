<template>
    <!-- <div class="cv-stage"> -->
    <swiper :options="swiperOptions">
        <swiper-slide
            class="cv-stage__layer cv-stage-item"
            v-for="item in stageItems"
            :key="'swiper-item-' + item.id"
        >
            <!-- data-swiper-parallax="-100" -->
            <div
                class="cv-stage-item__bg"
                :style="{ backgroundImage: 'url(' + item.url + ')' }"
            ></div>
            <div class="cv-stage__overlay"></div>
            <div class="cv-stage-content" data-swiper-parallax="200">
                <div class="cv-stage-content__title-wrapper">
                    <p class="cv-stage-content__title">{{ item.title }}</p>
                </div>
                <p class="cv-stage-content__description">{{ item.text }}</p>
            </div>
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

            this.stageItems.push({
                id: index,
                title: htmlDoc.querySelector('.cv-stage-item__title').textContent.trim(),
                text: htmlDoc.querySelector('.cv-stage-item__description').textContent.trim(),
                // @ts-ignore
                url: htmlDoc.querySelector('.cv-stage-item__bg').dataset.backgroundUrl,
                // url: elm.data.attrs['data-background-url'] || '',
                // url: elm.children[1].children[0].text
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
    height: 500px;
    width: 100%;
    // background: #d2182e;
    background: #000;
    position: relative;
    overflow: hidden;

    --opacity-transiiton: opacity 0.3s ease-in;
    --headline-font: 'Open Sans', sans-serif;
    --font: 'Open Sans', sans-serif;
}

.swiper-container {
    width: 100%;
    height: 100%;
}

.cv-stage__layer {
    position: relative;
    width: 100%;
    height: 100%;
    background: #d2182e;
}

.cv-stage-item {
    .cv-stage__overlay {
        position: absolute;
        left: 0;
        top: 0;
        // z-index: 10;
        height: 100%;
        width: 100%;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
            radial-gradient(circle at bottom left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0) 80%);
    }

    // .cv-stage__overlay::before {
    //     position: absolute;
    //     left: 0;
    //     top: 0;
    //     z-index: 20;
    //     // background: linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%);
    //     background-image:
    //         radial-gradient(
    //             circle at bottom left,
    //             rgba(0,0,0,0.4),
    //             rgba(0,0,0,0) 50%
    //         );
    // }

    .cv-stage-item__bg {
        width: 100%;
        height: 100%;
        // z-index: 1;
        background-position: center center;
        background-size: cover;
        // filter: saturate(85%) contrast(90%);
        --brightness: 95%;
        filter: brightness(var(--brightness)) contrast(85%) saturate(98%);
    }

    .cv-stage-content {
        position: absolute;
        left: calc(30px + 5%);
        right: calc(30px + 5%);
        top: 90px;
        bottom: 20px;
        color: #fff;
        font-family: var(--headline-font);
    }

    .cv-stage-content__title-wrapper {
        min-height: 140px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 20px;
        max-width: 450px;
        width: 100%;
    }

    .cv-stage-content__title {
        --title-font-size-factor: 1;
        position: relative;
        white-space: pre;
        font-weight: bold;
        // font-size: calc(4rem * var(--title-font-size-factor));
        font-size: calc(40px * var(--title-font-size-factor));
        line-height: 1em; // calc(4rem * var(--title-font-size-factor));
        text-transform: uppercase;
        margin: 0;
        white-space: pre-line;

        &::before {
            content: '';
            position: absolute;
            top: 4px;
            bottom: 2px;
            left: -30px;
            width: 8px;
            background: #d22;
        }

        @media (max-width: 500px) {
            font-size: calc(30px * var(--title-font-size-factor));

            &::before {
                left: -25px;
            }
        }

        @media (max-width: 350px) {
            font-size: calc(25px * var(--title-font-size-factor));

            &::before {
                left: -20px;
            }
        }
    }

    .cv-stage-content__description {
        font-family: var(--font);
        max-width: 300px;
        margin-right: 20px;
        width: 100%;
    }
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

.cv-stage-item__url {
    display: none;
}
</style>
