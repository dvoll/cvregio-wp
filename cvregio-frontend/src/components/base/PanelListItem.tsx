import * as React from 'react';
import Icon, { IconTypes } from './Icon';

import './PanelListItem.scss';

export interface PanelListItemProps {
    title: string;
    onDelete: () => void;
}

class PanelListItem extends React.Component<PanelListItemProps> {
    public render() {
        const { title, onDelete, children } = this.props;
        return (
            <div className="panel-list-item">
                <div className="panel-list-item__header">
                    <h3>{title}</h3>
                    {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus, jsx-a11y/click-events-have-key-events */}
                    <div onClick={onDelete} role="button" className="panel-list-item__close">
                        <Icon icon={IconTypes.Delete} size={16} />
                    </div>
                </div>
                {children}
            </div>
        );
    }
}

export default PanelListItem;
