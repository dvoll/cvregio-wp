import * as React from 'react';
import './Icon.scss';
export declare enum IconTypes {
    ArrowRight = "arrow-right",
    ArrowLeft = "arrow-left"
}
export interface IconProps {
    icon: IconTypes;
    viewBox?: string;
    fillRgb?: string;
    size?: number;
    className?: string;
}
declare class Icon extends React.Component<IconProps> {
    render(): JSX.Element;
}
export default Icon;
