import * as React from 'react';
import Home from './pages/Home';
import Groups from './pages/Groups';

import '../src/styles-global/main.scss';
import '../src/styles/main.scss';

class App extends React.Component<{}, { location: Location }> {
    readonly state: { location: Location } = {
        location: null,
    };

    pages = [
        { path: '/', component: Home },
        { path: '/home', component: Home },
        { path: '/groups', component: Groups },
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
