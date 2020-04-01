import * as React from 'react';
import apiFetch from '@wordpress/api-fetch';
import ContactDetails, { ContactItem } from './ContactDetails';

import './AssociateItem.scss';

export interface AssociateItemRole {
    label: string;
    name: string;
}

export interface AssociateItemProps {
    id?: string | number;
    firstname: string;
    lastname: string;
    roles: AssociateItemRole[];
    pictureSources?: { src: string; media: string }[];
    showImage?: boolean;
    imgSrc?: string;
    contactItems?: ContactItem[];
    className?: string;
    imageId?: number | string;
}

interface AssociateItemState {
    thumbnailUrl?: string;
}

class AssociateItem extends React.Component<AssociateItemProps, AssociateItemState> {
    readonly state: AssociateItemState = {
        thumbnailUrl: undefined,
    };

    componentDidMount() {
        if (this.props.imageId && this.props.imageId !== '') {
            this.fetchImage(+this.props.imageId);
        }
    }

    componentDidUpdate(nextProps: AssociateItemProps) {
        if (nextProps.id !== this.props.id) {
            if (nextProps.imageId && nextProps.imageId !== '') {
                this.fetchImage(+nextProps.imageId);
            }
        }
    }

    private fetchImage(imageId: number) {
        apiFetch({ path: `/wp/v2/media/${imageId}` }).then((imageResponse: any) => {
            const imageUrl = imageResponse?.media_details?.sizes?.thumbnail?.source_url;
            this.setState({ thumbnailUrl: imageUrl });
        });
    }

    public render() {
        const {
            firstname,
            lastname,
            roles = [],
            pictureSources = [],
            showImage = true,
            imgSrc = false,
            contactItems = [],
            className = '',
        } = this.props;
        const { thumbnailUrl = undefined } = this.state;
        const name = `${firstname} ${lastname}`;
        const sources = pictureSources.map(srcItem => {
            return <source src={srcItem.src} media={srcItem.media} />;
        });
        const roleElements = roles.map(({ label }, index) => {
            const comma = index < roles.length - 1 ? ',' : '';
            return (
                <div className="associate-item__role" key={label}>
                    {label}
                    {comma}
                </div>
            );
        });
        const imageSection =
            imgSrc || thumbnailUrl ? (
                <picture className="associate-item__picture">
                    {sources}
                    <img className="associate-item__img" src={imgSrc || thumbnailUrl} alt={`Profilbild von ${name}`} />
                </picture>
            ) : (
                <div className="associate-item__picture-placeholder" />
            );
        return (
            <div className={`associate-item ${className}`}>
                {showImage && imageSection}
                <span className="associate-item__name">{name}</span>
                {roleElements.length > 0 && <div className="associate-item__roles">{roleElements}</div>}
                {contactItems.length > 0 && <ContactDetails items={contactItems} />}
            </div>
        );
    }
}

export default AssociateItem;
