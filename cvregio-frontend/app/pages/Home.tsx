import * as React from 'react';
import '../../src/components/cetest/CetestElement';
import MyComponent from '../../src/components/MyComponent';
import MyWpComponent from '../../src/components/MyWpComponent';
import PageLayout from '../../src/layouts/PageLayout';
import Header from '../components/Header';

class Home extends React.Component {
    public render() {
        return (
            // <React.Fragment>
            <PageLayout
                header={<Header />}
                content={
                    <React.Fragment>
                        <article
                            id="post-78"
                            className="post-78 page type-page status-publish hentry entry"
                        >
                            <div className="entry-content entry-content--starting-top">
                                {/* <stage></stage> */}
                                <h1>
                                    Willkommen beim <br />
                                    CVJM Stift Quernheim e.V.
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                    justo duo dolores et ea rebum.
                                </p>
                                <h2>Neuigkeiten</h2>
                                {/* <dev-news></dev-news> */}
                                {/* <cv-sidebar data-row-start="6" /> */}
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                    justo duo dolores et ea rebum.
                                </p>
                                <collapsible-panel name="asd" />
                            </div>
                        </article>
                        <MyComponent />
                        <MyWpComponent />
                    </React.Fragment>
                }
            />
            // </React.Fragment>
        );
    }
}

export default Home;
