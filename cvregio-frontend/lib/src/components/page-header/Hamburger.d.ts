import * as React from 'react';
import './Hamburger.scss';
export interface HamburgerProps {
    open?: boolean;
    onClick: () => void;
}
declare class Hamburger extends React.Component<HamburgerProps> {
    render(): JSX.Element;
}
export default Hamburger;
