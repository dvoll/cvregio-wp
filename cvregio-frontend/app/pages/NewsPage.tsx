import * as React from 'react';
import PageLayout from '../../src/layouts/PageLayout';
import Header from '../components/Header';
import NewsGrid from '../components/NewsGrid';

class NewsPage extends React.Component {
    public render() {
        return (
            <PageLayout
                header={<Header />}
                content={
                    <React.Fragment>
                        <article
                            id="post-78"
                            className="post-78 page type-page status-publish hentry entry"
                        >
                            <div className="entry-content">
                                <header className="entry-header">
                                    <h1 className="entry-title">Neuigkeiten</h1>
                                </header>
                                <NewsGrid />
                            </div>
                        </article>
                    </React.Fragment>
                }
            />
        );
    }
}

export default NewsPage;
