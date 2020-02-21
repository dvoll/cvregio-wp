import * as React from 'react';
import Icon, { IconTypes } from '../base/Icon';
import './SubmenuLink.scss';

export interface SubmenuLinkProps {
    href?: string;
    type: 'block' | 'inline';
    iconEnd?: IconTypes;
    onClick?: () => void;
}

class SubmenuLink extends React.Component<SubmenuLinkProps> {
    onClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string | undefined) {
        if (href) {
            return null;
        }
        event.preventDefault();
        return this.props.onClick && this.props.onClick();
    }

    public render() {
        const { href, type, iconEnd, children } = this.props;
        const className = `submenu-item ${type === 'block' ? 'submenu-item--block' : ''} ${
            type === 'inline' ? 'submenu-item--inline' : ''
        }`;
        return (
            <a href={href} onClick={event => this.onClick(event, href)} className={className}>
                {children}
                {iconEnd && <Icon icon={iconEnd} className="submenu-item__icon" />}
            </a>
        );
    }
}

export default SubmenuLink;
