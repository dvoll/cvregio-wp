import * as React from 'react';
import './style.scss';

export interface SidebarProps {
    rowOffset?: number;
    className?: string;
    edit?: boolean;
}

class Sidebar extends React.Component<SidebarProps> {
    public render() {
        const { children, rowOffset = 0, className = '', edit = false } = this.props;
        return (
            <section
                className={`cv-sidebar sidebar ${edit ? 'sidebar--edit' : ''} ${className}`}
                style={{ ['--sidebar-row-start' as any]: `${rowOffset + 1}` }}
            >
                {children}
            </section>
        );
    }
}

export default Sidebar;
