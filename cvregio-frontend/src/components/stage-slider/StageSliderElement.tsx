/* eslint-disable @typescript-eslint/no-namespace */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StageSlider, { StageSliderProps, StageItem } from './StageSlider';
// import * as retargetEvents from 'react-shadow-dom-retarget-events';

export default class StageSliderElement extends HTMLElement {
    mountPoint: HTMLSpanElement | null = null;

    mounted(elements: HTMLElement[]) {
        if (elements) {
            // const htmlDoc = new DOMParser().parseFromString(innerHTML, 'text/html');
            // const cards = htmlDoc.querySelectorAll('.cv-stage-card');
            // console.log('cards', cards);

            // const mainMenu = htmlDoc.querySelector('.main-menu');
            // const items = cards.map()
            // console.log('this.childNodes', this.childNodes[0].childNodes);
            // console.log(this.innerHTML);

            const stageItems = this.getStageItemAttributess(elements);
            return stageItems;
        }

        return [];
    }

    getStageItemAttributess(items: HTMLElement[] | undefined) {
        if (!items) return [];
        const list = items.map((item, index) => {
            const cardBody = item.children[item.children.length - 1];
            cardBody.setAttribute('data-swiper-parallax', '200');
            // if (!item.children || !item.children[0]) return undefined;
            // const child = item.children[0] as HTMLAnchorElement | HTMLButtonElement;
            const stageItem: StageItem = {
                innerHTML: item.innerHTML,
                id: index,
            };
            return stageItem;
        });
        return list.filter(item => item !== undefined) as StageItem[];
    }

    createComponent(attributes: StageSliderProps) {
        const { items } = attributes;
        return React.createElement(StageSlider, { items });
    }

    connectedCallback() {
        console.log('cc', this);
        console.log('cc', this.innerHTML);
        console.log('cc', this.children);

        const children = Array.from(this.children) as HTMLElement[];
        console.log('elm', children);

        this.mountPoint = document.createElement('div');
        this.innerHTML = '';
        this.appendChild(this.mountPoint);

        const stageItems = this.mounted(children);
        ReactDOM.render(this.createComponent({ items: stageItems }), this.mountPoint);
    }
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'stage-slider': StageSliderElementAttributes;
        }

        interface StageSliderElementAttributes {
            children: any;
        }
    }
}

window.customElements.define('stage-slider', StageSliderElement);
