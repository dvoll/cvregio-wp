import * as React from 'react';
import { Button } from '@wordpress/components';
import { RichText } from '@wordpress/block-editor';
import ContactDetails, { ContactItem, ContactItemTypes } from './ContactDetails';
import { AssociateItemProps } from './AssociateItem';
import AssociateList from './AssociateList';

import './RelatedAssociates.scss';

export interface RelatedAssociatesProps {
    headline?: string;
    description: string;
    contactItems?: ContactItem[];
    contactAssociates?: AssociateItemProps[];
    associates?: AssociateItemProps[];
    edit?: boolean;
    onContactItemsChange?: (contactItems: ContactItem[]) => void;
}

class RelatedAssociates extends React.Component<RelatedAssociatesProps> {
    private handleNewContactItem() {
        if (!this.props.contactItems) return;
        const newItem = {
            id: this.props.contactItems ? this.props.contactItems.length : 0,
            content: '',
            type: ContactItemTypes.OTHER,
        };
        const newItems = this.props.contactItems.concat([newItem]);
        // eslint-disable-next-line no-unused-expressions
        this.props.onContactItemsChange && this.props.onContactItemsChange(newItems);
    }

    private handleContactItemChange(item: ContactItem, remove?: boolean) {
        if (!this.props.contactItems) return;
        if (remove) {
            const newItems = this.props.contactItems.filter(contact => contact.id !== item.id);
            // eslint-disable-next-line no-unused-expressions
            this.props.onContactItemsChange && this.props.onContactItemsChange(newItems);
            return;
        }
        const newItems = this.props.contactItems.map(contact => {
            if (contact.id === item.id) {
                return item;
            }
            return contact;
        });
        // eslint-disable-next-line no-unused-expressions
        this.props.onContactItemsChange && this.props.onContactItemsChange(newItems);
    }

    public render() {
        const {
            description,
            contactItems = [],
            contactAssociates = [],
            associates = [],
            headline,
            edit = false,
        } = this.props;
        return (
            <React.Fragment>
                {edit && <RichText tagName="h2" value={headline || ''} onChange={() => null} />}
                {!edit && headline && <RichText.Content tagName="h2" value={headline} />}
                {/* {!edit && headline && <h2>{headline}</h2>} */}
                <div className="related-associates">
                    <div className="related-associates__contacts">
                        <AssociateList associates={contactAssociates} itemIsPreview={edit} fullWidth={false}>
                            <div className="related-associates__contact-info">
                                {edit && <RichText tagName="p" value={description} onChange={() => null} />}
                                {!edit && <RichText.Content tagName="p" value={description || ''} />}
                                <ContactDetails
                                    items={contactItems}
                                    edit={edit}
                                    onChange={item => this.handleContactItemChange(item)}
                                    onDelete={item => this.handleContactItemChange(item, true)}
                                />
                                {edit && (
                                    <Button isPrimary onClick={() => this.handleNewContactItem()}>
                                        Kontaktdetails hinzufügen
                                    </Button>
                                )}
                            </div>
                        </AssociateList>
                    </div>
                    <div className="related-associates__list">
                        <AssociateList associates={associates} itemIsPreview={edit} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RelatedAssociates;
