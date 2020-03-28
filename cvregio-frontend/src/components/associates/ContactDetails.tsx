import * as React from 'react';
import { TextControl, SelectControl, Button } from '@wordpress/components';
import Icon, { IconTypes } from '../base/Icon';

import './ContactDetails.scss';

type ContactItemTypeTypes = 'PHONE' | 'EMAIL' | 'OTHER';

export const ContactItemTypes: { [key in ContactItemTypeTypes]: ContactItemType } = {
    PHONE: { value: 'PHONE', label: 'Telefon', icon: IconTypes.Phone },
    EMAIL: { value: 'EMAIL', label: 'E-Mail', icon: IconTypes.MailBlack },
    OTHER: { value: 'OTHER', label: 'Sonstige', icon: IconTypes.ArrowRight },
};

export interface ContactItemType {
    value: ContactItemTypeTypes;
    label: string;
    icon: IconTypes;
}

export interface ContactItem {
    id: number;
    content: string;
    link?: string;
    type: ContactItemType;
}

export interface ContactDetailsProps {
    items?: ContactItem[];
    edit?: boolean;
    onChange?: (item: ContactItem) => any;
}

class ContactDetails extends React.Component<ContactDetailsProps> {
    public render() {
        const { items = [], edit = false, onChange = () => null } = this.props;
        const contactItems = items.map(item => {
            const { content, type } = item;
            let isLink = false;
            let href;
            if (type.value === 'PHONE') {
                isLink = true;
                href = `tel:${content}`;
            }
            if (type.value === 'EMAIL') {
                isLink = true;
                href = `mailto:${content}`;
            }
            const ItemTag: keyof JSX.IntrinsicElements = !edit && isLink ? 'a' : 'div';
            const options = Object.keys(ContactItemTypes).map(typeKey => {
                const typeItem = ContactItemTypes[typeKey as ContactItemTypeTypes];
                return { value: typeItem.value, label: typeItem.label };
            });
            return (
                <ItemTag
                    href={href}
                    className={`contact-details__item ${
                        isLink ? 'contact-details__item--link' : ''
                    } ${edit ? 'contact-details__item--edit' : ''}`}
                >
                    {edit && (
                        <div className="">
                            <SelectControl
                                label="Art"
                                value={type.value}
                                options={options}
                                onChange={value => {
                                    const changedType = ContactItemTypes[value];
                                    const changedItem = { ...item, type: changedType };
                                    return onChange(changedItem);
                                }}
                            />
                        </div>
                    )}
                    {!edit && type.icon && (
                        <Icon icon={type.icon} size={16} className="contact-details__icon" />
                    )}
                    {edit ? (
                        <div className="">
                            <TextControl
                                label="Inhalt"
                                placeholder="Nummer/Mail-Adresse/..."
                                type="text"
                                value={content}
                                onChange={value => {
                                    const changedItem = { ...item, content: value };
                                    return onChange(changedItem);
                                }}
                            />
                        </div>
                    ) : (
                        content
                    )}
                    {edit && (
                        <Button style={{ alignSelf: 'center' }} isTertiary>
                            Entfernen
                        </Button>
                    )}
                </ItemTag>
            );
        });
        return <div className="contact-details">{contactItems}</div>;
    }
}

export default ContactDetails;
