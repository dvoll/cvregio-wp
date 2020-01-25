import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { MenuItem } from './PageHeader';
import Icon, { IconTypes } from '../base/Icon';

import './Navigation.scss';

export interface NavigationProps {
    menuItems?: MenuItem[];
    toggleMenu: (item: MenuItem) => void;
    isList?: boolean;
    small: boolean;
    activeItem?: MenuItem;
}

class Navigation extends React.Component<NavigationProps> {
    toggleMenu(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, item: MenuItem) {
        event.preventDefault();
        this.props.toggleMenu(item);
    }

    hasCurrentAsChild(item: MenuItem) {
        if (item.children === undefined || item.children.length === 0) {
            return false;
        }
        const index = item.children.findIndex(childItem => childItem.current);

        return index >= 0;
    }

    public render() {
        const { menuItems = [], isList = false, small, activeItem } = this.props;
        const items = menuItems.map(menuItem => {
            const length = menuItem.children?.length;
            let className = 'menu-item';
            if (menuItem.current || this.hasCurrentAsChild(menuItem)) {
                className += ' current ';
            }
            if (menuItem.children && menuItem.children.length > 0) {
                className += ' menu-item-has-children';
            }

            return (
                <li key={menuItem.title} className={className}>
                    {(length ?? 0) > 0 ? (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a
                            role="button"
                            href=""
                            className="menu-item__toggle"
                            onClick={event => this.toggleMenu(event, menuItem)}
                        >
                            {menuItem.title}
                            <CSSTransition
                                in={activeItem?.title === menuItem.title}
                                classNames="fade-submenu-icon"
                                timeout={200}
                            >
                                <Icon
                                    icon={IconTypes.ArrowRight}
                                    className="menu-item__toggle-icon"
                                />
                            </CSSTransition>
                        </a>
                    ) : (
                        <a href={menuItem.href}>{menuItem.title}</a>
                    )}
                </li>
            );
        });
        return (
            <ul
                className={`main-menu ${isList ? 'main-menu--list' : ''}${
                    small ? 'main-menu--small' : ''
                }`}
            >
                {items}
            </ul>
        );
    }
}

export default Navigation;
