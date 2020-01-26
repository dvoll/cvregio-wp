/* eslint-disable react/button-has-type */
import * as React from 'react';
import '../../src/components/page-header/PageHeaderElement';
import logo from '../assets/cv-logo18.png';

class Header extends React.Component {
    public render() {
        return (
            <page-header
                title="CVJM Regio Testseite e.V."
                subtitle="Christlicher Verein Junger Menschen"
                logoUrl={logo}
            >
                <nav id="site-navigation" className="main-navigation" aria-label="Oberes Menü">
                    <div className="menu-primary-container">
                        <ul id="menu-primary" className="main-menu">
                            <li
                                id="menu-item-324"
                                className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-324"
                            >
                                <a href="/" aria-current="page">
                                    Startseite
                                </a>
                            </li>

                            <li
                                id="menu-item-328"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-328"
                            >
                                <a href="/groups" aria-haspopup="true" aria-expanded="false">
                                    Angebote
                                </a>
                                <button className="submenu-expand" tabIndex={-1}>
                                    <svg
                                        className="svg-icon"
                                        width="24"
                                        height="24"
                                        aria-hidden="true"
                                        role="img"
                                        focusable="false"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                                        <path fill="none" d="M0 0h24v24H0V0z" />
                                    </svg>
                                </button>
                                <ul className="sub-menu">
                                    <li
                                        id="menu-item--1"
                                        className="mobile-parent-nav-menu-item menu-item--1"
                                    >
                                        <button className="menu-item-link-return" tabIndex={-1}>
                                            <svg
                                                className="svg-icon"
                                                width="24"
                                                height="24"
                                                aria-hidden="true"
                                                role="img"
                                                focusable="false"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                            >
                                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                                <path d="M0 0h24v24H0z" fill="none" />
                                            </svg>
                                            Angebote
                                        </button>
                                    </li>
                                    <li
                                        id="menu-item-327"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-327"
                                    >
                                        <a
                                            href="/jungschar"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Club 28
                                        </a>
                                        <button className="submenu-expand" tabIndex={-1}>
                                            <svg
                                                className="svg-icon"
                                                width="24"
                                                height="24"
                                                aria-hidden="true"
                                                role="img"
                                                focusable="false"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                                                <path fill="none" d="M0 0h24v24H0V0z" />
                                            </svg>
                                        </button>
                                        <ul className="sub-menu">
                                            <li
                                                id="menu-item--2"
                                                className="mobile-parent-nav-menu-item menu-item--2"
                                            >
                                                <button
                                                    className="menu-item-link-return"
                                                    tabIndex={-1}
                                                >
                                                    <svg
                                                        className="svg-icon"
                                                        width="24"
                                                        height="24"
                                                        aria-hidden="true"
                                                        role="img"
                                                        focusable="false"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    >
                                                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                                        <path d="M0 0h24v24H0z" fill="none" />
                                                    </svg>
                                                    Aveeerrylongtextlink
                                                </button>
                                            </li>
                                            <li
                                                id="menu-item-329"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-329"
                                            >
                                                <a href="http://0.0.0.0:8000/?page_id=2">
                                                    Beispiel-Seite
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li
                                id="menu-item-325"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-325"
                            >
                                <a href="/default">Default</a>
                            </li>
                            <li
                                id="menu-item-326"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-326"
                            >
                                <a href="http://localhost:8080/post-list">Neuigkeiten</a>
                            </li>
                            <li
                                id="menu-item-327"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-326"
                            >
                                <a href="http://0.0.0.0:8000/?page_id=78">Kontakt</a>
                            </li>
                        </ul>
                    </div>
                    <div className="main-menu-more">
                        <ul className="main-menu">
                            <li className="menu-item menu-item-has-children">
                                <button
                                    className="submenu-expand main-menu-more-toggle is-empty"
                                    tabIndex={-1}
                                    aria-label="More"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <span className="screen-reader-text">Mehr</span>
                                    <svg
                                        className="svg-icon"
                                        width="24"
                                        height="24"
                                        aria-hidden="true"
                                        role="img"
                                        focusable="false"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M0 0h24v24H0z" />
                                            <path
                                                fill="currentColor"
                                                fillRule="nonzero"
                                                d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                            />
                                        </g>
                                    </svg>
                                </button>
                                <ul className="sub-menu hidden-links">
                                    <li
                                        id="menu-item--1"
                                        className="mobile-parent-nav-menu-item menu-item--1"
                                    >
                                        <button className="menu-item-link-return">
                                            <svg
                                                className="svg-icon"
                                                width="24"
                                                height="24"
                                                aria-hidden="true"
                                                role="img"
                                                focusable="false"
                                                viewBox="0 0 24 24"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                                <path d="M0 0h24v24H0z" fill="none" />
                                            </svg>
                                            Zurück
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </page-header>
        );
    }
}

export default Header;
