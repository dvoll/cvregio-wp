import * as React from 'react';
import PageLayout from '../../src/layouts/PageLayout';
import DevHeader from '../components/DevHeader';
import DevNewsGrid from '../components/DevNewsGrid';

class NewsPage extends React.Component {
    public render() {
        return (
            <PageLayout
                header={<DevHeader />}
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
                                <DevNewsGrid />
                            </div>
                        </article>
                    </React.Fragment>
                }
            />
        );
    }
}

export default NewsPage;
