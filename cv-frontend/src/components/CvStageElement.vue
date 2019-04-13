<template>
    <div class="cv-stage">
        <swiper :options="swiperOptions">
            <swiper-slide
                class="cv-stage__layer"
                v-for="item in stageItems"
                :key="'swiper-item-' + item.id"
            >
                <div
                    data-swiper-parallax="-100"
                    class="cv-stage-item__bg"
                    :style="{ backgroundImage: 'url(' + item.url + ')' }"
                ></div>
                <div class="cv-stage__overlay"></div>
                <div class="cv-stage-content" data-swiper-parallax="200">
                    <div class="cv-stage-content__title-wrapper">
                        <p class="cv-stage-content__title">{{ item.title }}</p>
                    </div>
                    <p>{{ item.text }}</p>
                    <p>{{ item.url }}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>
    </div>
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
                text: htmlDoc.querySelector('.cv-stage-item__text').textContent.trim(),
                url: htmlDoc.querySelector('.cv-stage-item__url').textContent.trim(),
                // url: elm.children[1].children[0].text
            });
        });
        console.log('items', this.stageItems);
    },
};
</script>

<style lang="scss">
.cv-stage {
    position: relative;
    height: 500px;
    width: 100%;
    // background: #d2182e;
    background: #000;
    position: relative;
    overflow: hidden;

    --opacity-transiiton: opacity 0.3s ease-in;
}

.swiper-container {
    width: 100%;
    height: 100%;
}

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

.cv-stage__layer {
    position: relative;
    // top: 0;
    // left: 0;
    width: 100%;
    height: 100%;
    background: #d2182e;
    // // z-index: 1;
    // background-position: center center;
    // background-size: cover;
    // filter: saturate(85%) contrast(90%);
    // opacity: 1;
    // transition: var(--opacity-transiiton);
    // transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    // transform: scale(1) translateX(0);
    // will-change: transform, opacity;
    // animation-direction: reverse;
    // animation-duration: 0.5s;
}

.cv-stage-item__bg {
    width: 100%;
    height: 100%;
    // z-index: 1;
    background-position: center center;
    background-size: cover;
    filter: saturate(85%) contrast(90%);
}

.cv-stage-content {
    position: absolute;
    left: 80px;
    top: 70px;
    // z-index: 50;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    // transition: opacity 0.2s ease-out, transform 0.3s ease-out;
    // transform: translateX(150px);
    // opacity: 0;
}

.cv-stage__layer.on-top .cv-stage-content {
    transform: translateX(-150px);
}

.cv-stage-content__title-wrapper {
    height: 140px;
    // border: 0.5px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.cv-stage-content__title {
    position: relative;
    white-space: pre;
    font-weight: bold;
    font-size: 2.6rem;
    line-height: 2.6rem;
    text-transform: uppercase;
    margin: 20px 0;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        height: 100%;
        left: -30px;
        width: 8px;
        background: #d22;
    }
}

.cv-stage-content--active {
    opacity: 1;
    transform: translateX(0);
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
