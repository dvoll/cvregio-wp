import * as React from 'react';
import { RichText } from '@wordpress/editor';
import Icon, { IconTypes } from '../base/Icon';

import './InfoRow.scss';

export interface InfoRowProps {
    label: string;
    title?: string;
    icon?: IconTypes;
    edit?: boolean;
    onChange?: (value: string) => void;
}

class InfoRow extends React.Component<InfoRowProps> {
    public render() {
        const {
            icon = IconTypes.ArrowRight,
            label,
            title = '',
            edit = false,
            onChange = () => null,
        } = this.props;
        return (
            <div className="info-row">
                <div className="info-row__header">
                    <Icon icon={icon} className="info-row__icon" size={12} />
                    <span className="info-row__label">{label}</span>
                </div>
                {!edit && (
                    <RichText.Content tagName="div" className="info-row__title" value={title} />
                )}
                {edit && (
                    // if edit use a span to overcome styling issues
                    <RichText
                        tagName="div"
                        placeholder={label}
                        keepPlaceholderOnFocus
                        value={title}
                        className="info-row__title"
                        onChange={value => onChange(value === '<br>' ? '' : value)}
                    />
                )}
                {/* <div className="info-row__title">{title}</div> */}
            </div>
        );
    }
}

export default InfoRow;
