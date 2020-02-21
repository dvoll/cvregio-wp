import React, { Component } from 'react';

export interface CetestProps {
    name: string;
}

export class Cetest extends Component<CetestProps, { name: string }> {
    constructor(props: CetestProps) {
        super(props);
        this.state = {
            name: '',
        };
    }

    componentDidMount() {
        console.log('mounted');
        setTimeout(() => {
            // this.setState({ name: 'Timeout Name' });
        }, 2000);
    }

    render() {
        const { name: propName } = this.props;
        const { name: stateName } = this.state;
        let name = stateName;
        if (name === '') {
            name = propName;
        }

        return (
            <div>
                <h1>Title for {name}</h1>
            </div>
        );
    }
}

export default Cetest;
