import * as React from 'react';
import HomePage from './pages/HomePage';
import GroupsPage from './pages/GroupsPage';
import './common.d';
import '../src/styles-global/main.scss';
import '../src/styles/main.scss';
import NewsPage from './pages/NewsPage';
import GroupDetailPage from './pages/GroupDetailPage';

class App extends React.Component<{}, { location: Location }> {
    readonly state: { location: Location } = {
        location: null,
    };

    pages = [
        { path: '/', component: HomePage },
        { path: '/home', component: HomePage },
        { path: '/news', component: NewsPage },
        { path: '/groups', component: GroupsPage },
        { path: '/group-detail', component: GroupDetailPage },
    ];

    componentDidMount(): void {
        this.setState({ location: window.location });
    }

    public render() {
        const { location } = this.state;
        if (location == null || !location.pathname) {
            return 'Loading';
        }

        const NotFound = () => <h1>Page not found</h1>;
        const path = location.pathname;
        const Page = this.pages.reduce((prev, curr) => {
            if (curr.path === path) {
                document.title = `${document.title} - ${curr.path}`;
                return curr.component;
            }
            return prev;
        }, NotFound);

        return (
            <div className="app">
                <Page />
            </div>
        );
    }
}

export default App;
