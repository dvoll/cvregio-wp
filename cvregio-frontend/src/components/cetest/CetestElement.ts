import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import * as retargetEvents from 'react-shadow-dom-retarget-events';
import Cetest from './Cetest';

export default class CollapsiblePanel extends HTMLElement {
    static get observedAttributes() {
        return ['name'];
    }

    mountPoint: HTMLSpanElement | null = null;

    name = '';

    createCollapsed(name: string) {
        return React.createElement(Cetest, { name }, React.createElement('slot'));
    }

    connectedCallback() {
        console.log('connected');

        this.mountPoint = document.createElement('span');
        // const shadowRoot = this.attachShadow({ mode: 'open' });
        // shadowRoot.appendChild(this.mountPoint);
        this.appendChild(this.mountPoint);

        const name = this.getAttribute('name') || this.name;
        ReactDOM.render(this.createCollapsed(name), this.mountPoint);
        // retargetEvents(shadowRoot);
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (this.mountPoint && name === 'name') {
            ReactDOM.render(this.createCollapsed(newValue), this.mountPoint);
        }
    }
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'collapsible-panel': MyElementAttributes;
        }

        interface MyElementAttributes {
            name: string;
        }
    }
}

window.customElements.define('collapsible-panel', CollapsiblePanel);
