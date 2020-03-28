import * as React from 'react';
import ContactDetails, { ContactItem } from './ContactDetails';

import './AssociateItem.scss';

export interface AssociateItemRole {
    label: string;
    name: string;
}

export interface AssociateItemProps {
    firstname: string;
    lastname: string;
    roles: AssociateItemRole[];
    pictureSources?: { src: string; media: string }[];
    imgSrc?: string;
    contactItems?: ContactItem[];
    className?: string;
}

class AssociateItem extends React.Component<AssociateItemProps> {
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
                <div className="associate-item__role">
                    {label}
                    {comma}
                </div>
            );
        });
        return (
            <div className={`associate-item ${className}`}>
                {imgSrc ? (
                    <picture className="associate-item__picture">
                        {sources}
                        <img
                            className="associate-item__img"
                            src={imgSrc}
                            alt={`Profilbild von ${name}`}
                        />
                    </picture>
                ) : (
                    <div className="associate-item__picture-placeholder" />
                )}
                <h4 className="associate-item__name">{name}</h4>
                {roleElements.length > 0 && (
                    <div className="associate-item__roles">{roleElements}</div>
                )}
                {contactItems.length > 0 && <ContactDetails items={contactItems} />}
            </div>
        );
    }
}

export default AssociateItem;
