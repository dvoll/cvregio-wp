import * as React from 'react';
import { MenuItem } from './PageHeader';
import './Navigation.scss';
export interface NavigationProps {
    menuItems?: MenuItem[];
    toggleMenu: (item: MenuItem) => void;
    isList?: boolean;
    small: boolean;
    activeItem?: MenuItem;
}
declare class Navigation extends React.Component<NavigationProps> {
    toggleMenu(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, item: MenuItem): void;
    hasCurrentAsChild(item: MenuItem): boolean;
    render(): JSX.Element;
}
export default Navigation;
