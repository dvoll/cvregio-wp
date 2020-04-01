import * as React from 'react';
import Associate, { AssociateItemProps } from './AssociateItem';

import './AssociateList.scss';

export interface AssociateListProps {
    associates: AssociateItemProps[];
    fullWidth?: boolean;
    slimItems?: boolean;
    itemIsPreview?: boolean;
}

class AssociateList extends React.Component<AssociateListProps> {
    public render() {
        const { associates, fullWidth = true, children, slimItems = false, itemIsPreview = false } = this.props;
        return (
            <div
                className={`associate-list ${fullWidth && 'associate-list--full-width'} ${slimItems &&
                    'associate-list--slim-items'}`}
            >
                <div className="associate-list__grid">
                    {associates.map(associate => (
                        <Associate
                            key={associate.id}
                            className={`associate-list__item ${itemIsPreview ? 'cv-blocks-dynamic-block-preview' : ''}`}
                            {...associate}
                        />
                    ))}
                    {children}
                </div>
            </div>
        );
    }
}

export default AssociateList;
