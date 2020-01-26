/* eslint-disable @typescript-eslint/no-namespace */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PageHeader, { MenuItem } from './PageHeader';
// import * as retargetEvents from 'react-shadow-dom-retarget-events';

export default class PageHeaderElement extends HTMLElement {
    static get observedAttributes() {
        return ['title'];
    }

    mountPoint: HTMLSpanElement | null = null;

    title = '';

    menuItems: MenuItem[] = [];

    mounted(innerHTML: string) {
        if (innerHTML) {
            const htmlDoc = new DOMParser().parseFromString(innerHTML, 'text/html');
            const mainMenu = htmlDoc.querySelector('.main-menu');

            this.menuItems = this.getMenuItems(mainMenu?.children);
            return this.menuItems;
        }

        return [];
    }

    getMenuItems(items: HTMLCollection | undefined) {
        if (!items) return [];
        const list = Array.from(items).map(item => {
            if (!item.children || !item.children[0]) return undefined;
            const child = item.children[0] as HTMLAnchorElement | HTMLButtonElement;
            const menuItem: MenuItem = {
                title: child.innerText,
                children: [],
                href: child instanceof HTMLAnchorElement ? child.href : '',
            };
            if (item.classList.contains('current-menu-item')) {
                menuItem.current = true;
            }

            if (item.children[2]) {
                menuItem.children = this.getMenuItems(item.children[2].children);
            }
            return menuItem;
        });
        return list.filter(item => item !== undefined) as MenuItem[];
    }

    createComponent(title: string, subtitle: string, logoUrl: string, menuItems?: MenuItem[]) {
        return React.createElement(PageHeader, { title, subtitle, logoUrl, menuItems });
    }

    connectedCallback() {
        this.mountPoint = document.createElement('div');
        const { innerHTML } = this;
        this.innerHTML = '';
        this.appendChild(this.mountPoint);

        const title = this.getAttribute('title') || this.title;
        const subtitle = this.getAttribute('subtitle') || '';
        const logoUrl = this.getAttribute('logoUrl') || '';

        const menuItems = this.mounted(innerHTML);

        ReactDOM.render(this.createComponent(title, subtitle, logoUrl, menuItems), this.mountPoint);
    }

    attributeChangedCallback(title: string, oldValue: string, newValue: string) {
        if (this.mountPoint && title === 'title') {
            ReactDOM.render(this.createComponent(newValue, '', '', []), this.mountPoint);
        }
    }
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
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

window.customElements.define('page-header', PageHeaderElement);
