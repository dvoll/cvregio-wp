/* eslint-disable @typescript-eslint/no-namespace */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StageSlider, { StageSliderProps, StageItem } from './StageSlider';
// import * as retargetEvents from 'react-shadow-dom-retarget-events';

export default class StageSliderElement extends HTMLElement {
    mounted(elements: HTMLElement[]) {
        if (elements) {
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
        const children = Array.from(this.children) as HTMLElement[];
        this.innerHTML = '';
        this.setAttribute('element-loaded', '');

        const stageItems = this.mounted(children);
        ReactDOM.render(this.createComponent({ items: stageItems }), this);
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
