import React, { Component } from 'react';
import { MenuItem } from './PageHeader';
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
    constructor(props: MenuPageProps);
    getHrefForItem(item: MenuItem): string | undefined;
    hasChildren(item: MenuItem): boolean | undefined;
    handleItemClick(item: MenuItem): void | undefined;
    handleBackClick(): void | undefined;
    render(): JSX.Element;
}
