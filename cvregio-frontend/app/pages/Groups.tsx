import * as React from 'react';
import Header from '../components/Header';
import PageLayout from '../../src/layouts/PageLayout';

class Groups extends React.Component {
    public render() {
        return <PageLayout header={<Header />} content={<h1>Groups</h1>} />;
    }
}

export default Groups;
