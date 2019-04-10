<template>
    <section class="cv-stage">
        <div class="cv-stage__layer-wrapper">
            <div v-for="(item, index) in activeItems" :key="'cv-stage-bg-' + item.id" class="cv-stage__layer" :style="{ backgroundImage: 'url(' + item.url + ')'}" :class="{active: item.id === active, 'on-top': isOnTop(item.id) }" >
                <div class="cv-stage__overlay" slot="overlay"></div>
                <div class="cv-stage-content" :class="{'cv-stage-content--active': item.id === active}" >
                    <div class="cv-stage-content__title-wrapper">
                        <p class="cv-stage-content__title">{{ item.text }}</p>
                    </div>
                    <p>{{ item.url }}</p>
                </div>
            </div>
            <!-- <div v-for="item in stageItems" :key="'cv-stage-content-' + item.id" class="cv-stage-content" :class="{'cv-stage-content--active': item.id === active}" -->
        </div>
        <div class="cv-stage__controls">
            <slot name="overlay">
                <button @click="slide(true)">{{"<"}}</button>
                <button @click="slide()">{{">"}}</button>
            </slot>
        </div>
    </section>
</template>

<script>
// , 'underlying-visible': item.id === active-1
export default {
    props: {
        items: {
            type: String,
        },
    },
    data() {
        return {
            stageItems: [],
            active: 0,
        };
    },
    methods: {
        slide(prev = false) {
            if (prev) {
                if (this.active > 0) {
                    this.active--;
                }
                return;
            } 
            
            if(this.active + 1 < this.stageItems.length) {
                this.active = this.active + 1;
            }
        },
        isOnTop(index) {
            console.log('isTop');
            return index > this.active;
        }
    },
    computed: {
       activeItems() {
           return this.stageItems.filter((item) => {
               return item.id <= this.active + 1; // || item.id === this.active + 1 || item.id === this.active - 1;
           })
       }
    },
    mounted: function() {
        console.log('item string', this.items);
        
        this.$slots.default.forEach((elm, index) => {
            const htmlDoc = new DOMParser().parseFromString(
                elm.data.domProps.innerHTML,
                'text/html'
            );
            
            this.stageItems.push({
                id: index,
                text: htmlDoc.querySelector('.cv-stage-item__text').textContent,
                url: htmlDoc.querySelector('.cv-stage-item__url').textContent,
                // url: elm.children[1].children[0].text
            });
        });
        console.log('items', this.stageItems);
    }
};
</script>

<style lang="scss">
.cv-stage {
    position: relative;
    height: 500px;
    width: 100%;
    background: #d2182e;
    position: relative;
    overflow: hidden;
    
    --opacity-transiiton: opacity 0.3s ease-in;
}

.cv-stage__overlay {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 20;
    height: 100%;
    width: 100%;
    background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0) 100%
        ),
        radial-gradient(
            circle at bottom left,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0) 80%
        );
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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-position: center center;
    background-size: cover;
    filter: saturate(85%) contrast(90%);
    opacity: 1;
    // transition: var(--opacity-transiiton);
    transition: transform .3s ease-out, opacity .3s ease-out;
    transform: scale(1) translateX(0);
    will-change: transform, opacity;
    // animation-direction: reverse;
    // animation-duration: 0.5s;
}

.cv-stage__layer.underlying-visible {
    opacity: 1;
}

.cv-stage__layer.active {
    // z-index: 5;
    opacity: 1;
    transform: scale(1) translateX(0);
    // animation-name: slideFromTop;
}

.cv-stage__layer.on-top {
    // z-index: 5;
    transform: translateX(100px); //scale(1.05) 
    opacity: 0;
    // visibility: hidden;
}

@keyframes slideFromTop {
    0% {
        opacity: 0;
        transform: scale(1.1) translateX(150px);
    }
    40% {
        opacity: 1;
    }
    100% {
        transform: scale(1) translateX(0);
    }
}

.cv-stage-content {
    position: absolute;
    left: 80px;
    top: 70px;
    z-index: 50;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    transition: opacity .2s ease-out, transform .3s ease-out;
    transform: translateX(150px);
    opacity: 0;
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
</style>