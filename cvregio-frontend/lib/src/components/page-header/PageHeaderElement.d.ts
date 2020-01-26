import * as React from 'react';
import PageHeader, { MenuItem } from './PageHeader';
export default class PageHeaderElement extends HTMLElement {
    static get observedAttributes(): string[];
    mountPoint: HTMLSpanElement | null;
    title: string;
    menuItems: MenuItem[];
    mounted(innerHTML: string): MenuItem[];
    getMenuItems(items: HTMLCollection | undefined): MenuItem[];
    createComponent(title: string, subtitle: string, logoUrl: string, menuItems?: MenuItem[]): React.CElement<import("./PageHeader").PageHeaderProps, PageHeader>;
    connectedCallback(): void;
    attributeChangedCallback(title: string, oldValue: string, newValue: string): void;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'page-header': PageHeaderAttributes;
        }
        interface PageHeaderAttributes {
            title: string;
            subtitle: string;
            logoUrl: string;
            children: any;
        }
    }
}
