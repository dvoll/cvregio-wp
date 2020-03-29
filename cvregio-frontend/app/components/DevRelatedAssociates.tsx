import * as React from 'react';
import RelatedAssociates from '../../src/components/associates/RelatedAssociates';
import { AssociateItemProps } from '../../src/components/associates/AssociateItem';
import { ContactItemTypes } from '../../src/components/associates/ContactDetails';

import image03 from '../assets/images/03.jpg';
import image04 from '../assets/images/04.jpg';
import image05 from '../assets/images/05.jpg';

export interface DevRelatedAssociatesProps {
    showImages?: boolean;
}

class DevRelatedAssociates extends React.Component<DevRelatedAssociatesProps> {
    public render() {
        const { showImages = true } = this.props;
        const contacts: AssociateItemProps[] = [
            {
                firstname: 'Max',
                lastname: 'Mustermann-Mustermann',
                roles: [{ label: 'Leitung', name: '1vorsitzender' }],
                showImage: showImages,
            },
            {
                firstname: 'Claudia',
                lastname: 'Walter',
                roles: [{ label: 'Leitung', name: '-' }],
                imgSrc: image03,
                showImage: showImages,
            },
        ];
        const items: AssociateItemProps[] = [
            {
                firstname: 'Max',
                lastname: 'Mustermann',
                roles: [{ label: 'Mitarbeiter', name: '1vorsitzender' }],
                showImage: showImages,
            },
            {
                firstname: 'Claudia',
                lastname: 'Walter',
                roles: [{ label: 'Mitarbeiter', name: '-' }],
                imgSrc: image03,
                showImage: showImages,
            },
            {
                firstname: 'Claudia',
                lastname: 'Walter',
                roles: [{ label: 'Mitarbeiter', name: '-' }],
                imgSrc: image04,
                showImage: showImages,
            },
            {
                firstname: 'Claudia',
                lastname: 'Walter',
                roles: [{ label: 'Mitarbeiter', name: '-' }],
                imgSrc: image05,
                showImage: showImages,
            },
            {
                firstname: 'Claudia',
                lastname: 'Walter',
                roles: [{ label: 'Mitarbeiter', name: '-' }],
                imgSrc: image03,
                showImage: showImages,
            },
        ];
        return (
            <RelatedAssociates
                headline="Mitarbeiter"
                description="Lorem ipsum dolor set armed. Bei Fragen:"
                contactAssociates={contacts}
                associates={items}
                contactItems={[
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
                ]}
            />
        );
    }
}

export default DevRelatedAssociates;
