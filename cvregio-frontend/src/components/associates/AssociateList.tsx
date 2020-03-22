import * as React from 'react';
import Associate, { AssociateProps } from './Associate';

import './AssociateList.scss';

export interface AssociateListProps {
    associates: AssociateProps[];
}

class AssociateList extends React.Component<AssociateListProps> {
    public render() {
        const { associates } = this.props;
        return (
            <div className="associate-list">
                <div className="associate-list__grid">
                    {associates.map(associate => (
                        <Associate className="associate-list__item" {...associate} />
                    ))}
                </div>
            </div>
        );
    }
}

export default AssociateList;
