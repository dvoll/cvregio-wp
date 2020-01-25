import React, { Component } from 'react';
import { MenuItem } from './PageHeader';
import Icon, { IconTypes } from '../base/Icon';
import SubmenuLink from './SubmenuLink';
import './MenuPage.scss';

export interface MenuPageProps {
    className?: string;
    backButtonTitle?: string;
    title: string;
    menuItems?: MenuItem[];
    allowChildren?: boolean;
    onItemSelect?: (menuItem: MenuItem) => void;
    close?: () => void;
    info?: React.ReactNode;
}

export default class MenuPage extends Component<MenuPageProps> {
    constructor(props: MenuPageProps) {
        super(props);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    getHrefForItem(item: MenuItem) {
        return !this.hasChildren(item) ? item.href : undefined;
    }

    hasChildren(item: MenuItem) {
        const { allowChildren = true } = this.props;
        return allowChildren && item.children && item.children.length > 0;
    }

    handleItemClick(item: MenuItem) {
        const { onItemSelect } = this.props;
        return onItemSelect && onItemSelect(item);
    }

    handleBackClick() {
        const { close } = this.props;
        // return close?.call(this);
        return close && close();
    }

    render() {
        const { title, backButtonTitle, menuItems = [], info, className = '' } = this.props;

        const items = menuItems.map(item => {
            return (
                <li key={`menupage${item.title}-${item.href}`}>
                    <SubmenuLink
                        href={this.getHrefForItem(item)}
                        onClick={() => this.handleItemClick(item)}
                        type="inline"
                        iconEnd={this.hasChildren(item) ? IconTypes.ArrowRight : undefined}
                    >
                        {item.title}
                    </SubmenuLink>
                </li>
            );
        });

        return (
            <div className={`menu-page ${className}`}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    role="button"
                    tabIndex={0}
                    onClick={this.handleBackClick}
                    // TODO: Check if event is acceptable
                    onKeyPress={this.handleBackClick}
                    className={`menu-page__back-link ${
                        backButtonTitle ? 'menu-page__back-link--visible' : ''
                    }`}
                    data-class="{ 'menu-page__back-link--visible': !!backButtonTitle }"
                >
                    <Icon icon={IconTypes.ArrowLeft} />
                    {backButtonTitle}
                </a>
                <h2 className="menu-page__header">{title}</h2>
                <div className="menu-page__info">{info}</div>
                <ul className="menu-list">{items}</ul>
            </div>
        );
    }
}
