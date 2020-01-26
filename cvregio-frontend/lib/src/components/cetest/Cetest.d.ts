import { Component } from 'react';
export interface CetestProps {
    name: string;
}
export declare class Cetest extends Component<CetestProps, {
    name: string;
}> {
    constructor(props: CetestProps);
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Cetest;
