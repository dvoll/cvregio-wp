import * as React from 'react';
import PageLayout from '../../src/layouts/PageLayout';
import Header from '../components/Header';

class GroupsPage extends React.Component {
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
                                    <h1 className="entry-title">Angebote</h1>
                                </header>
                            </div>
                        </article>
                    </React.Fragment>
                }
            />
        );
    }
}

export default GroupsPage;
