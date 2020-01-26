import * as React from 'react';
import { IconTypes } from '../base/Icon';
import './SubmenuLink.scss';
export interface SubmenuLinkProps {
    href?: string;
    type: 'block' | 'inline';
    iconEnd?: IconTypes;
    onClick?: () => void;
}
declare class SubmenuLink extends React.Component<SubmenuLinkProps> {
    onClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string | undefined): void | null;
    render(): JSX.Element;
}
export default SubmenuLink;
