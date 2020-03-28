import * as React from 'react';

import { MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import { Button, TextControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import ContactDetails, { ContactItem, ContactItemTypes } from './ContactDetails';

import './AssociateItem.scss';

export interface AssociateProps {
    firstname?: string;
    lastname?: string;
    imageId?: number;
    contactItems: ContactItem[];
    edit?: boolean;
    handleValueChange?: (
        title: 'firstname' | 'lastname' | 'image-id',
        value: string | number
    ) => void;
    handleContactItemChange?: (items: ContactItem[]) => void;
}

interface AssociateState {
    imagePath?: string;
}

class Associate extends React.Component<AssociateProps, AssociateState> {
    readonly state: AssociateState = {
        imagePath: undefined,
    };

    constructor(props: AssociateProps) {
        super(props);
        this.onContactItemChange = this.onContactItemChange.bind(this);
        this.handleNewContactItem = this.handleNewContactItem.bind(this);
        if (props.imageId) {
            this.fetchImage(props.imageId);
        }
    }

    private onContactItemChange(changedItem: ContactItem) {
        const items = this.props.contactItems?.map(prevItem => {
            if (prevItem.id === changedItem.id) {
                return changedItem;
            }
            return prevItem;
        });
        // eslint-disable-next-line no-unused-expressions
        this.props.handleContactItemChange && this.props.handleContactItemChange(items ?? []);
    }

    private handleNewContactItem() {
        this.addContactitem();
    }

    private addContactitem(type = ContactItemTypes.OTHER) {
        const newItem = {
            id: this.props.contactItems ? this.props.contactItems.length : 0,
            content: '',
            type,
        };
        // eslint-disable-next-line no-unused-expressions
        this.props.handleContactItemChange &&
            this.props.handleContactItemChange(this.props.contactItems.concat([newItem]));
    }

    private fetchImage(imageId: number) {
        return apiFetch({ path: `/wp/v2/media/${imageId}` }).then((imageResponse: any) => {
            const imageUrl = imageResponse?.media_details?.sizes?.thumbnail?.source_url;
            this.setState({ imagePath: imageUrl });
        });
    }

    private handleImageChange(
        element: {
            id: number;
        } & {
            [k: string]: any;
        }
    ) {
        this.fetchImage(element.id);
        const { handleValueChange = () => null } = this.props;
        handleValueChange('image-id', element.id);
    }

    public render() {
        const {
            firstname = '',
            lastname = '',
            imageId,
            contactItems = [],
            edit = false,
            handleValueChange = () => null,
        } = this.props;
        const { imagePath = '' } = this.state;
        return (
            <div className="entry-content">
                {edit && <h2>Mitarbeiter anlegen/bearbeiten</h2>}
                {edit ? (
                    <TextControl
                        label="Vorname"
                        type="text"
                        value={firstname}
                        onChange={value =>
                            handleValueChange('firstname', value === '<br>' ? '' : value)
                        }
                    />
                ) : (
                    <span>{firstname}</span>
                )}
                {edit ? (
                    <TextControl
                        label="Nachname"
                        type="text"
                        value={lastname}
                        onChange={value =>
                            handleValueChange('lastname', value === '<br>' ? '' : value)
                        }
                    />
                ) : (
                    <span>{lastname}</span>
                )}
                <h4>Profilbild</h4>
                <div className="associate-template__picture-row">
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={el => this.handleImageChange(el)}
                            allowedTypes={['image']}
                            value={imageId}
                            render={({ open }) => {
                                return imageId && imagePath ? (
                                    <React.Fragment>
                                        <div className="associate-item__picture">
                                            <picture>
                                                <img
                                                    className="associate-item__img"
                                                    src={imagePath}
                                                    alt="profile"
                                                />
                                            </picture>
                                        </div>
                                        <Button onClick={open}>Bild ändern</Button>
                                    </React.Fragment>
                                ) : (
                                    <Button onClick={open}>Bild auswählen</Button>
                                );
                            }}
                        />
                    </MediaUploadCheck>
                </div>
                <div className="">
                    <h4>Kontaktdetails</h4>
                    <ContactDetails edit items={contactItems} onChange={this.onContactItemChange} />
                    <Button isPrimary onClick={this.handleNewContactItem}>
                        Kontaktdetails hinzufügen
                    </Button>
                </div>
            </div>
        );
    }
}

export default Associate;
