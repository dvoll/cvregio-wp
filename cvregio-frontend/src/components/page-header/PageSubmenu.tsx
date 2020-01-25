import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import Icon, { IconTypes } from '../base/Icon';
import SubmenuLink from './SubmenuLink';
import { MenuItem } from './PageHeader';

import './PageSubmenu.scss';

export interface PageSubmenuProps {
    className: string;
    isList: boolean;
    menuItem?: MenuItem;
}

interface PageSubmenuState {
    menuItem?: MenuItem;
    show: boolean;
}

// export interface PageSubmenuState {}

class PageSubmenu extends React.Component<PageSubmenuProps, PageSubmenuState> {
    readonly state: PageSubmenuState = {
        menuItem: this.props.menuItem,
        show: false,
    };

    componentDidUpdate(prevProps: PageSubmenuProps) {
        if (this.props.menuItem?.title !== prevProps.menuItem?.title) {
            if (this.props.menuItem) {
                this.setState({ show: true, menuItem: this.props.menuItem });
            } else {
                this.setState({ show: false });
            }
        }
    }

    public render() {
        const { className = '', isList } = this.props;
        const { show, menuItem } = this.state;
        const items = menuItem?.children?.map(item => {
            return (
                <li key={item.title} className="menu-list__item">
                    <SubmenuLink href={item.href} type="block">
                        {item.title}
                    </SubmenuLink>
                </li>
            );
        });
        return (
            <CSSTransition in={show} timeout={200} classNames="fade-from-top" unmountOnExit>
                <div
                    className={`page-submenu ${className} ${
                        isList ? 'page-submenu--list' : 'page-submenu--grid'
                    }`}
                >
                    <div className="page-submenu__info description-block">
                        <h2 className="description-block__header">{menuItem?.title}</h2>
                        <p className="description-block__text" />
                        <a href={menuItem?.href} className="button description-block__link">
                            <Icon icon={IconTypes.ArrowRight} />
                            Übersicht
                        </a>
                    </div>
                    <ul
                        className={`page-submenu__menu-list ${
                            !isList ? 'page-submenu__menu-list--grid' : ''
                        }`}
                    >
                        {items}
                    </ul>
                </div>
            </CSSTransition>
        );
    }
}

export default PageSubmenu;
