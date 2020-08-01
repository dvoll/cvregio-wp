import React, { Fragment } from 'react';

const Footer = () => {
    return (
        <footer id="colophon" className="site-footer">
            <aside className="widget-area" aria-label="Footer">
                <div className="widget-column footer-widget-1">{/* sections */}</div>
                <div className="widget-column footer-widget-2">
                    <section id="pages-3" className="widget widget_pages">
                        <h2 className="widget-title">Pages</h2>{' '}
                        <ul>
                            <li className="page_item page-item-2">
                                <a href="http://localhost:8082/sample-page/">Sample Page</a>
                            </li>
                        </ul>
                    </section>
                    <section id="text-3" className="widget widget_text">
                        {' '}
                        <div className="textwidget">
                            <p>
                                <a href="http://localhost:8082/?page_id=2">Link 1</a>
                            </p>
                            <p>
                                <a href="http://localhost:8082/?page_id=2">Link 2</a>
                                <br />
                                <a href="http://localhost:8082/?page_id=2">Link 3</a>
                            </p>
                        </div>
                    </section>{' '}
                </div>
            </aside>

            <div className="site-info">
                <a className="site-name" href="http://localhost:8082/" rel="home">
                    CVJM Regio Dev
                </a>
                ,
                <a href="https://wordpress.org/" className="imprint">
                    Proudly powered by WordPress.{' '}
                </a>
            </div>
        </footer>
    );
};

const Sections = () => {
    return (
        <Fragment>
            <section id="search-2" className="widget widget_search">
                <form role="search" method="get" className="search-form" action="http://localhost:8082/">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label>
                        <span className="screen-reader-text">Search for:</span>
                        <input type="search" className="search-field" placeholder="Search …" value="" name="s" />
                    </label>
                    <input type="submit" className="search-submit" value="Search" />
                </form>
            </section>
            <section id="recent-posts-2" className="widget widget_recent_entries">
                <h2 className="widget-title">Recent Posts</h2>
                <ul>
                    <li>
                        <a href="http://localhost:8082/2020/08/hello-world/">Hello world!</a>
                    </li>
                </ul>
            </section>
            <section id="recent-comments-2" className="widget widget_recent_comments">
                <h2 className="widget-title">Recent Comments</h2>
                <ul id="recentcomments">
                    <li className="recentcomments">
                        <span className="comment-author-link">
                            <a href="https://wordpress.org/" rel="external nofollow ugc" className="url">
                                A WordPress Commenter
                            </a>
                        </span>{' '}
                        on <a href="http://localhost:8082/2020/08/hello-world/#comment-1">Hello world!</a>
                    </li>
                </ul>
            </section>
            <section id="archives-2" className="widget widget_archive">
                <h2 className="widget-title">Archives</h2>
                <ul>
                    <li>
                        <a href="http://localhost:8082/2020/08/">August 2020</a>
                    </li>
                </ul>
            </section>
            <section id="categories-2" className="widget widget_categories">
                <h2 className="widget-title">Categories</h2>
                <ul>
                    <li className="cat-item cat-item-1">
                        <a href="http://localhost:8082/category/uncategorized/">Uncategorized</a>
                    </li>
                </ul>
            </section>
            <section id="meta-2" className="widget widget_meta">
                <h2 className="widget-title">Meta</h2>{' '}
                <ul>
                    <li>
                        <a href="http://localhost:8082/wp-login.php">Log in</a>
                    </li>
                    <li>
                        <a href="http://localhost:8082/feed/">Entries feed</a>
                    </li>
                    <li>
                        <a href="http://localhost:8082/comments/feed/">Comments feed</a>
                    </li>
                    <li>
                        <a href="https://wordpress.org/">WordPress.org</a>
                    </li>{' '}
                </ul>
            </section>{' '}
        </Fragment>
    );
};

export default Footer;
