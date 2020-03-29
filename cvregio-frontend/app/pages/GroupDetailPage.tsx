import * as React from 'react';
import PageLayout from '../../src/layouts/PageLayout';
import Header from '../components/DevHeader';
import DevGroupSummery from '../components/DevGroupSummery';

class GroupDetailPage extends React.Component {
    public render() {
        return (
            <PageLayout
                templateClassName="cvgroups-template-default"
                header={<Header />}
                content={
                    <React.Fragment>
                        <article id="post-78" className="post-78 page type-page status-publish hentry entry">
                            <div className="entry-content">
                                {/* <header className="entry-header">
                                    <h1 className="entry-title">Jungschar</h1>
                                </header> */}
                                <DevGroupSummery />
                            </div>
                        </article>
                    </React.Fragment>
                }
            />
        );
    }
}

export default GroupDetailPage;
