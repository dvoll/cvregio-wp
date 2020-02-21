import * as React from 'react';

import GroupGrid, { GroupGridItem } from '../../src/components/groups/GroupGrid';
// import image01 from '../assets/images/01.jpg';
// import image02 from '../assets/images/02.jpg';
import image03 from '../assets/images/03.jpg';
import image04 from '../assets/images/04.jpg';
import image05 from '../assets/images/04.jpg';

export interface GroupOverviewProps {
    alignment?: 'wide' | 'full';
}

class GroupOverview extends React.Component<GroupOverviewProps> {
    public render() {
        const { alignment = 'full' } = this.props;
        let groups: GroupGridItem[] = [
            {
                location: 'Rauchfang',
                title: 'Mädchenjungschar',
                target: 'Mädchen von 7 bis 12',
                time: 'freitags, 16 bis 18 Uhr',
                imgSrc: image04,
            },
            {
                location: 'Rauchfang',
                title: 'Jungenjungschar',
                target: 'Jungen von 7 bis 12',
                time: 'sastags, 15 bis 17 Uhr',
                imgSrc: image05,
            },
            {
                location: 'Rauchfang',
                title: 'Mädchenjungschar',
                target: 'Mädchen von 7 bis 12',
                time: 'freitags, 16 bis 18 Uhr',
            },
            {
                location: 'Rauchfang',
                title: 'Jungenjungschar',
                target: 'Jungen von 7 bis 12',
                time: 'samstags, 15 bis 17 Uhr',
                imgSrc: image03,
            },
        ];
        groups = groups.concat(groups.slice(1, 4));
        return (
            <section className={`cv-section${alignment ? ` align${alignment}` : ''}`}>
                <GroupGrid groups={groups} />
            </section>
        );
    }
}

export default GroupOverview;
