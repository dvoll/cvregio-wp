import * as React from 'react';
import Icon, { IconTypes } from '../base/Icon';

import './InfoRow.scss';

export interface InfoRowProps {
    label: string;
    title: string;
    icon?: IconTypes;
}

class InfoRow extends React.Component<InfoRowProps> {
    public render() {
        const { icon = IconTypes.ArrowRight, label, title } = this.props;
        return (
            <div className="info-row">
                <div className="info-row__header">
                    <Icon icon={icon} className="info-row__icon" size={12} />
                    <span className="info-row__label">{label}</span>
                </div>
                <div className="info-row__title">{title}</div>
            </div>
        );
    }
}

export default InfoRow;
