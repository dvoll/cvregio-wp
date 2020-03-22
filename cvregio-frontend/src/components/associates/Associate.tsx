import * as React from 'react';
import ContactDetails, { ContactItem } from './ContactDetails';

import './Associate.scss';

export interface AssociateRole {
    label: string;
    name: string;
}

export interface AssociateProps {
    firstname: string;
    lastname: string;
    roles: AssociateRole[];
    pictureSources?: { src: string; media: string }[];
    imgSrc?: string;
    contactItems?: ContactItem[];
    className?: string;
}

class Associate extends React.Component<AssociateProps> {
    public render() {
        const {
            firstname,
            lastname,
            roles = [],
            pictureSources = [],
            imgSrc = false,
            contactItems = [],
            className = '',
        } = this.props;
        const name = `${firstname} ${lastname}`;
        const sources = pictureSources.map(srcItem => {
            return <source src={srcItem.src} media={srcItem.media} />;
        });
        const roleElements = roles.map(({ label }, index) => {
            const comma = index < roles.length - 1 ? ',' : '';
            return (
                <div className="associate__role">
                    {label}
                    {comma}
                </div>
            );
        });
        return (
            <div className={`associate ${className}`}>
                {imgSrc ? (
                    <picture className="associate__picture">
                        {sources}
                        <img
                            className="associate__img"
                            src={imgSrc}
                            alt={`Profilbild von ${name}`}
                        />
                    </picture>
                ) : (
                    <div className="associate__picture-placeholder" />
                )}
                <h4 className="associate__name">{name}</h4>
                {roleElements.length > 0 && <div className="associate__roles">{roleElements}</div>}
                {contactItems.length > 0 && <ContactDetails items={contactItems} />}
            </div>
        );
    }
}

export default Associate;
