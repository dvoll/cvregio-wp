import * as React from 'react';
import './Header.scss';

export interface HeaderProps {
    title: string;
    subtitle: string;
    small: boolean;
    mobile: boolean;
    logoUrl: string;
    // onMobileToggle?: () => void;
    menuButton: React.ReactNode;
    className?: string;
}

class Header extends React.Component<HeaderProps> {
    // mobileToggle() {
    //     const { onMobileToggle } = this.props;
    //     return onMobileToggle && onMobileToggle();
    // }

    public render() {
        const {
            title,
            subtitle,
            small,
            mobile,
            logoUrl,
            children,
            menuButton,
            className = '',
        } = this.props;
        return (
            <div
                className={`cv-page-header ${small ? 'cv-page-header--small' : ''} ${
                    mobile ? 'cv-page-header--mobile' : ''
                } ${className}`}
            >
                <div className="cv-page-header__body">
                    <a href="/" className="cv-page-header__link">
                        <div className="cv-page-header__logo-container">
                            <img alt="" className="cv-page-header__logo" src={logoUrl} />
                        </div>
                        <div className="cv-page-header__title-wrapper">
                            <span className="cv-page-header__title">{title}</span>
                            <span className="cv-page-header__subtitle">{subtitle}</span>
                        </div>
                    </a>
                    {/* TODO Add classes to children */}
                    {/* <slot v-if="!mobile" name="default" className="cv-page-header__nav" /> */}
                    {!mobile && children}
                    {mobile && (
                        <div className="cv-page-header__menu-button">
                            {/* <slot name="menu-button" className="cv-page-header__menu-button" /> */}
                            {menuButton}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Header;
