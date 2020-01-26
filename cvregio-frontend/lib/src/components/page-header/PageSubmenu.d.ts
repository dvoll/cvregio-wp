import * as React from 'react';
import { MenuItem } from './PageHeader';
import './PageSubmenu.scss';
export interface PageSubmenuProps {
    className: string;
    isList: boolean;
    menuItem?: MenuItem;
}
interface PageSubmenuState {
    menuItem?: MenuItem;
    show: boolean;
}
declare class PageSubmenu extends React.Component<PageSubmenuProps, PageSubmenuState> {
    readonly state: PageSubmenuState;
    componentDidUpdate(prevProps: PageSubmenuProps): void;
    render(): JSX.Element;
}
export default PageSubmenu;
