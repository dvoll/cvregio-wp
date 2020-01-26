import { Component } from 'react';
import './PageHeader.scss';
export interface PageHeaderProps {
    title: string;
    subtitle: string;
    logoUrl: string;
    menuItems?: MenuItem[];
}
export interface PageHeaderState {
    smallHeader: boolean;
    activeItem?: MenuItem;
    mobileOpen: boolean;
    isMobile: boolean;
}
export interface MenuItem {
    title: string;
    href: string;
    children?: MenuItem[];
    current?: boolean;
}
declare class PageHeader extends Component<PageHeaderProps, PageHeaderState> {
    smallHeaderHeight: number;
    readonly state: PageHeaderState;
    componentDidMount(): void;
    submenuIsOpen(): boolean;
    shouldShowSmallHeader(): boolean;
    disableBodyScroll(noscroll: boolean): void;
    addResizeEventListener(): void;
    addScrollEventListener(): void;
    changeHeader(position: number): void;
    handleResize(width: number): void;
    toggleMenu(menuItem: MenuItem): void;
    toggleMobileMenu(): void;
    closeSubmenu(): void;
    render(): JSX.Element;
}
export default PageHeader;
