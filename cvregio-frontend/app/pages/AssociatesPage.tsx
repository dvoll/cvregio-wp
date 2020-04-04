import * as React from 'react';
import PageLayout from '../layouts/PageLayout';
import DevHeader from '../components/DevHeader';
import AssociatesOverview from '../components/DevAssociatesOverview';

class AssociatesPage extends React.Component {
    public render() {
        return (
            <PageLayout
                header={<DevHeader />}
                content={
                    <React.Fragment>
                        <article id="post-78" className="post-78 page type-page status-publish hentry entry">
                            <div className="entry-content">
                                <header className="entry-header">
                                    <h1 className="entry-title">Mitarbeiter</h1>
                                </header>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum.
                                </p>
                                <AssociatesOverview />
                                <p />
                                <h2>Liste ohne Bilder</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                    eos et accusam et justo duo dolores et ea rebum.
                                </p>
                                <AssociatesOverview showImages={false} />
                            </div>
                        </article>
                    </React.Fragment>
                }
            />
        );
    }
}

export default AssociatesPage;
