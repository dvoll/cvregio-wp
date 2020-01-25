// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import Cetest from './Cetest';
// import * as retargetEvents from 'react-shadow-dom-retarget-events';

export default class CollapsiblePanel2 extends HTMLElement {
    // static get observedAttributes() {
    //     return ['title'];
    // }

    mountPoint: HTMLSpanElement | null = null;

    title = '';

    // createCollapsed(name: string) {
    //     return React.createElement(
    //         Cetest,
    //         { name },
    //         React.createElement('slot')
    //     );
    // }

    // connectedCallback() {
    //     this.mountPoint = document.createElement('span');
    //     // const shadowRoot = this.attachShadow({ mode: 'open' });
    //     // shadowRoot.appendChild(this.mountPoint);

    //     const title = this.getAttribute('title') || this.title;
    //     ReactDOM.render(this.createCollapsed(title), this.mountPoint);
    //     // retargetEvents(shadowRoot);
    // }

    // attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    //     if (this.mountPoint && name === 'title') {
    //         ReactDOM.render(this.createCollapsed(newValue), this.mountPoint);
    //     }
    // }
}

// declare global {
//     // eslint-disable-next-line @typescript-eslint/no-namespace
//     namespace JSX {
//         interface IntrinsicElements {
//             'collapsible-panel': MyElementAttributes;
//         }

//         interface MyElementAttributes {
//             name: string;
//         }
//     }
// }

// window.customElements.define('collapsible-panel', CollapsiblePanel);
