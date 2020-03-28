import * as React from 'react';

import AssociateList from '../../src/components/associates/AssociateList';
// import image01 from '../assets/images/01.jpg';
// import image02 from '../assets/images/02.jpg';
import image03 from '../assets/images/03.jpg';
import image04 from '../assets/images/04.jpg';
import image05 from '../assets/images/05.jpg';
import { AssociateItemProps } from '../../src/components/associates/AssociateItem';
import { ContactItemTypes } from '../../src/components/associates/ContactDetails';

export interface AssociatesOverviewProps {
    alignment?: 'wide' | 'full';
}

class AssociatesOverview extends React.Component<AssociatesOverviewProps> {
    public render() {
        const { alignment = 'wide' } = this.props;
        let items: AssociateItemProps[] = [
            {
                firstname: 'Max',
                lastname: 'Mustermann',
                roles: [{ label: '1. Vorsitzender', name: '1vorsitzender' }],
            },
            {
                firstname: 'Claudia',
                lastname: 'Walter',
                roles: [
                    { label: 'Kassenwart', name: '-' },
                    { label: 'Leitung Jungenjungschar', name: '-' },
                ],
                imgSrc: image03,
                contactItems: [
                    {
                        id: 1,
                        content: 'jungenjungschar@cvjm-stift-quernheim.de',
                        type: ContactItemTypes.EMAIL,
                    },
                    {
                        id: 2,
                        content: '01234 567901',
                        type: ContactItemTypes.PHONE,
                    },
                ],
            },
            {
                firstname: 'Claudia',
                lastname: 'Walter',
                roles: [{ label: 'Dietetic technician', name: '-' }],
                imgSrc: image04,
                contactItems: [
                    {
                        id: 1,
                        content: 'vorstand@cvjm-kirchlengern.de',
                        type: ContactItemTypes.EMAIL,
                    },
                    {
                        id: 2,
                        content: '01234 567901',
                        type: ContactItemTypes.PHONE,
                    },
                ],
            },
            {
                firstname: 'Claudia',
                lastname: 'Walter',
                roles: [{ label: 'Dietetic technician', name: '-' }],
                imgSrc: image05,
                contactItems: [
                    {
                        id: 1,
                        content: 'posaunenchor@cvjm-kirchlengern.de',
                        type: ContactItemTypes.EMAIL,
                    },
                    {
                        id: 2,
                        content: '01234 567901',
                        type: ContactItemTypes.PHONE,
                    },
                ],
            },
            {
                firstname: 'Claudia',
                lastname: 'Walter',
                roles: [{ label: 'Dietetic technician', name: '-' }],
                imgSrc: image03,
                contactItems: [
                    {
                        id: 1,
                        content: 'jungen@cvjm-kirchlengern.de',
                        type: ContactItemTypes.EMAIL,
                    },
                    {
                        id: 2,
                        content: '01234 567901',
                        type: ContactItemTypes.PHONE,
                    },
                    {
                        id: 3,
                        content: 'Briefkasten Rauchfang',
                        type: ContactItemTypes.OTHER,
                    },
                ],
            },
            // {
            //     location: 'Rauchfang',
            //     title: 'Mädchenjungschar',
            //     target: 'Mädchen von 7 bis 12',
            //     time: 'freitags, 16 bis 18 Uhr',
            //     imgSrc: image04,
            // },
        ];
        items = items.concat(items.slice(1, 2));
        items = items.concat(items.slice(1, 2));
        // items = items.concat(items.slice(1, 2));
        return (
            <section className={`cv-section${alignment ? ` align${alignment}` : ''}`}>
                <AssociateList associates={items} />
            </section>
        );
    }
}

export default AssociatesOverview;
