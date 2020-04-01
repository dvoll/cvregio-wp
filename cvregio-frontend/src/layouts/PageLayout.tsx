import React from 'react';

export interface PageLayoutProps {
    header: React.ReactNode;
    content: React.ReactNode;
    templateClassName?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ header, content, templateClassName }) => {
    return (
        <React.Fragment>
            <div className={templateClassName}>
                <div id="page" className="site">
                    <a className="skip-link screen-reader-text" href="#content">
                        Zum Inhalt springen
                    </a>

                    <header
                        id="masthead"
                        className="site-header"
                        // data-classname="{ 'featured-image': featuredImage }"
                    >
                        <div className="site-branding-container">
                            <div>{header}</div>
                        </div>
                    </header>

                    <div id="content" className={`asd${Math.random()}asdrrr`} data-class="site-content">
                        <section id="primary" className="content-area">
                            <main id="main" className="site-main">
                                {content}
                            </main>
                        </section>
                    </div>

                    <footer id="colophon" className="site-footer">
                        <aside className="widget-area" aria-label="Footer">
                            <div className="widget-column footer-widget-1">
                                <section id="search-4" className="widget widget_search">
                                    <form role="search" method="get" className="search-form" action="/">
                                        <label htmlFor="footer-search">
                                            <span className="screen-reader-text">Suche nach:</span>
                                            <input
                                                type="search"
                                                className="search-field"
                                                placeholder="Suche&#160;&hellip;"
                                                name="s"
                                            />
                                        </label>
                                        <input
                                            name="footer-search"
                                            type="submit"
                                            className="search-submit"
                                            value="Suche"
                                        />
                                    </form>
                                </section>
                            </div>
                        </aside>

                        <div className="site-info">
                            <a className="site-name" href="http://0.0.0.0:8000/" rel="home">
                                CVJM Hagekirchstift e.V.
                            </a>
                            ,
                            <a href="https://de.wordpress.org/" className="imprint">
                                Stolz präsentiert von WordPress.
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PageLayout;
