import * as React from 'react';

import './Icon.scss';

export enum IconTypes {
    ArrowRight = 'arrow-right',
    ArrowLeft = 'arrow-left',
    Edit = 'edit',
}

export interface IconProps {
    icon: IconTypes;
    viewBox?: string;
    fillRgb?: string;
    size?: number;
    className?: string;
}

class Icon extends React.Component<IconProps> {
    public render() {
        const { icon, viewBox = '0 0 50 50', fillRgb, size, className = '' } = this.props;
        const styles: React.CSSProperties = {
            width: size,
            height: size,
            ['--fill-rgb' as any]: fillRgb,
        };
        return (
            <svg
                className={`base-icon ${fillRgb ? 'base-icon--has-fill' : ''} ${className}`}
                viewBox={viewBox}
                style={styles}
            >
                <use href={`#${icon}`} />
            </svg>
        );
    }
}

export default Icon;
