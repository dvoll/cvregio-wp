import React from 'react';
import Footer from '../components/footer/footer';

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

                    <Footer />
                </div>
            </div>
        </React.Fragment>
    );
};

export default PageLayout;
