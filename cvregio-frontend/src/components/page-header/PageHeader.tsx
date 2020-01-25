import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import MenuPage from './MenuPage';
import Icon, { IconTypes } from '../base/Icon';
import Header from './Header';
import PageSubmenu from './PageSubmenu';
import Navigation from './Navigation';
import './PageHeader.scss';
import Hamburger from './Hamburger';
// import './MenuPage.scss';

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

class PageHeader extends Component<PageHeaderProps, PageHeaderState> {
    smallHeaderHeight = 50;

    readonly state: PageHeaderState = {
        smallHeader: false,
        activeItem: undefined,
        mobileOpen: false,
        isMobile: false,
    };

    componentDidMount() {
        this.addScrollEventListener();
        this.addResizeEventListener();
        this.handleResize(window.innerWidth);
    }

    submenuIsOpen() {
        const { activeItem } = this.state;
        const length = activeItem?.children?.length;
        return (length ?? 0) > 0;
    }

    shouldShowSmallHeader() {
        const { smallHeader, isMobile } = this.state;
        return smallHeader || isMobile;
    }

    disableBodyScroll(noscroll: boolean) {
        if (noscroll) {
            document.getElementsByTagName('body')[0].classList.add('no-scroll');
        } else {
            document.getElementsByTagName('body')[0].classList.remove('no-scroll');
        }
    }

    addResizeEventListener() {
        let lastKnownResizeWidth = 0;
        let ticking = false;
        window.addEventListener('resize', () => {
            lastKnownResizeWidth = window.innerWidth;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.handleResize(lastKnownResizeWidth);
                    ticking = false;
                });

                ticking = true;
            }
        });
    }

    addScrollEventListener() {
        let lastKnownScrollPosition = 0;
        let ticking = false;
        window.addEventListener('scroll', () => {
            lastKnownScrollPosition = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.changeHeader(lastKnownScrollPosition);
                    ticking = false;
                });

                ticking = true;
            }
        });
    }

    changeHeader(position: number) {
        const { smallHeader } = this.state;
        if (!smallHeader && position > this.smallHeaderHeight) {
            this.setState({ smallHeader: true });
        }

        if (smallHeader && position < this.smallHeaderHeight) {
            this.setState({ smallHeader: false });
        }
    }

    handleResize(width: number) {
        const { mobileOpen } = this.state;
        let shouldMobile = width < 1200;
        if (width < 1200) {
            shouldMobile = true;
            this.disableBodyScroll(mobileOpen);
        } else {
            shouldMobile = false;
            this.setState({ mobileOpen: false });
            this.disableBodyScroll(false);
        }
        this.setState({ isMobile: shouldMobile });
    }

    toggleMenu(menuItem: MenuItem) {
        const { activeItem } = this.state;

        if (activeItem && activeItem.title === menuItem.title) {
            this.setState({ activeItem: undefined });
            return;
        }
        this.setState({ activeItem: menuItem });
    }

    toggleMobileMenu() {
        const { mobileOpen } = this.state;

        if (mobileOpen && this.submenuIsOpen()) {
            this.closeSubmenu();
        }
        this.setState({ mobileOpen: !mobileOpen });
        this.disableBodyScroll(mobileOpen);
    }

    closeSubmenu() {
        console.log('close submenu');
        this.setState({ activeItem: undefined });
    }

    render() {
        const { smallHeader, activeItem, mobileOpen, isMobile } = this.state;
        const { menuItems, title, subtitle, logoUrl } = this.props;

        let classNames = 'cv-header';
        if (this.shouldShowSmallHeader()) {
            classNames += ' cv-header--small';
        }
        if (activeItem && (!isMobile || mobileOpen)) {
            classNames += ' cv-header--submenu-open';
        }
        if (isMobile) {
            classNames += ' cv-header--mobile';
        }
        if (mobileOpen) {
            classNames += ' cv-header--mobile-open';
        }

        return (
            <React.Fragment>
                <div
                    className={`header-placeholder ${isMobile ? 'header-placeholder--mobile' : ''}`}
                />
                <CSSTransition
                    in={activeItem && !isMobile}
                    // in
                    timeout={200}
                    classNames="fade"
                    unmountOnExit
                    // onEnter={() => setShowButton(false)}
                    // onExited={() => setShowButton(true)}
                >
                    <div
                        className="overlay"
                        aria-hidden="true"
                        onClick={() => this.closeSubmenu()}
                        style={{
                            position: 'fixed',
                            zIndex: 95,
                            width: '100vw',
                            height: '100vh',
                            background: 'rgba(0,0,0,0.2)',
                        }}
                        // style="position: fixed; z-index: 95; width: 100vw; height: 100vh; background: rgba(0,0,0,0.2);"
                    />
                </CSSTransition>
                <div className={classNames}>
                    <CSSTransition
                        in={isMobile && mobileOpen}
                        timeout={200}
                        classNames="fade-from-top"
                        unmountOnExit
                    >
                        <MenuPage
                            className="cv-header__mobile-menu"
                            menuItems={menuItems}
                            onItemSelect={item => this.toggleMenu(item)}
                            title="Menü"
                        />
                    </CSSTransition>
                    <CSSTransition
                        in={isMobile && mobileOpen && this.submenuIsOpen()}
                        timeout={2000}
                        classNames="fade-from-left"
                        unmountOnExit
                    >
                        <MenuPage
                            className="cv-header__mobile-submenu"
                            v-if="isMobile && mobileOpen && this.submenuIsOpen()"
                            menuItems={activeItem?.children}
                            allowChildren={false}
                            title={activeItem ? activeItem.title : ''}
                            backButtonTitle="Zurück"
                            close={() => {
                                this.closeSubmenu();
                            }}
                        >
                            <template slot="info">
                                <p className="description-block__text" />
                                <a
                                    href={activeItem?.href}
                                    className="button description-block__link"
                                >
                                    <Icon icon={IconTypes.ArrowRight} />
                                    Übersicht
                                </a>
                            </template>
                        </MenuPage>
                    </CSSTransition>
                    {!isMobile && (
                        <PageSubmenu
                            className="cv-header__submenu"
                            isList={false}
                            menuItem={activeItem}
                        />
                    )}
                    <Header
                        className="cv-header__page-header"
                        title={title}
                        subtitle={subtitle}
                        small={this.shouldShowSmallHeader()}
                        logoUrl={logoUrl}
                        mobile={isMobile}
                        menuButton={
                            <Hamburger open={mobileOpen} onClick={() => this.toggleMobileMenu()} />
                        }
                    >
                        <Navigation
                            menuItems={menuItems}
                            toggleMenu={menuItem => this.toggleMenu(menuItem)}
                            activeItem={activeItem}
                            small={smallHeader}
                        />
                    </Header>
                </div>
            </React.Fragment>
        );
    }
}

export default PageHeader;
