<template>
    <div ref="stageSwiper" class="swiper-container">
        <div class="swiper-wrapper">
            <div
                class="swiper-slide cv-stage__item cv-stage-card"
                v-for="item in stageItems"
                :key="'swiper-item-' + item.id"
                v-html="item.innerHTML"
            />
            <div slot="pagination" class="cv-stage__controls">
                <div class="swiper-button-prev--custom">
                    <base-icon :size="16" icon="arrow-left" />
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next--custom">
                    <base-icon :size="16" icon="arrow-right" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ts-check
import { Swiper, Parallax, Pagination, Navigation, EffectFade } from 'swiper/dist/js/swiper.esm';
import 'swiper/dist/css/swiper.css';

Swiper.use([Pagination, Parallax, Navigation, EffectFade]);

export default {
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
                    nextEl: '.swiper-button-next--custom',
                    prevEl: '.swiper-button-prev--custom',
                },
                parallax: true,
                effect: 'fade',
            },
        };
    },
    mounted() {
        this.$slots.default.forEach((elm, index) => {
            const htmlDoc = new DOMParser().parseFromString(
                elm.data.domProps.innerHTML,
                'text/html'
            );
            htmlDoc
                .querySelector('.cv-stage-card__body')
                .setAttribute('data-swiper-parallax', '200');

            this.stageItems.push({
                id: index,
                // @ts-ignore
                innerHTML: htmlDoc.firstChild.children[1].innerHTML,
            });
        });
        const mySwiper = new Swiper(this.$refs.stageSwiper, this.swiperOptions);
        this.$nextTick(() => {
            mySwiper.update();
        });
    },
};
</script>

<style lang="scss">
.wp-block-cv-blocks-cv-stage {
    margin-top: 0 !important;
}

cv-stage {
    position: relative;
    display: block;
    width: 100%;
    // max-width: 100vw;
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
    z-index: 10;
    bottom: 10px;
    left: calc(30px + 5%);
    color: #fff;
    display: flex;
    align-items: center;

    .swiper-pagination {
        position: relative;
        padding: 0 4px 8px 4px;

        > * {
            margin: 0 2px;
        }
    }

    .swiper-button-prev--custom,
    .swiper-button-next--custom {
        padding: 0 4px;
    }

    .swiper-button-disabled {
        opacity: 0.2;
    }
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
