import * as React from 'react';
import PageLayout from '../layouts/PageLayout';
import DevHeader from '../components/DevHeader';
import GroupOverview from '../components/DevGroupOverview';

class GroupsPage extends React.Component {
    public render() {
        return (
            <PageLayout
                header={<DevHeader />}
                content={
                    <React.Fragment>
                        <article id="post-78" className="post-78 page type-page status-publish hentry entry">
                            <div className="entry-content">
                                <header className="entry-header">
                                    <h1 className="entry-title">Angebote</h1>
                                </header>
                                <GroupOverview />
                            </div>
                        </article>
                    </React.Fragment>
                }
            />
        );
    }
}

export default GroupsPage;
