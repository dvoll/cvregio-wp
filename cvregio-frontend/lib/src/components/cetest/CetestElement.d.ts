import * as React from 'react';
import Cetest from './Cetest';
export default class CollapsiblePanel extends HTMLElement {
    static get observedAttributes(): string[];
    mountPoint: HTMLSpanElement | null;
    name: string;
    createCollapsed(name: string): React.CElement<import("./Cetest").CetestProps, Cetest>;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'collapsible-panel': MyElementAttributes;
        }
        interface MyElementAttributes {
            name: string;
        }
    }
}
