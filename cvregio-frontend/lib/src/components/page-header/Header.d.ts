import * as React from 'react';
import './Header.scss';
export interface HeaderProps {
    title: string;
    subtitle: string;
    small: boolean;
    mobile: boolean;
    logoUrl: string;
    menuButton: React.ReactNode;
    className?: string;
}
declare class Header extends React.Component<HeaderProps> {
    render(): JSX.Element;
}
export default Header;
