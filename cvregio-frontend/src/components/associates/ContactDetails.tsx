import * as React from 'react';
import { RichText } from '@wordpress/block-editor';
import Icon, { IconTypes } from '../base/Icon';

import './ContactDetails.scss';

export interface ContactItem {
    // icon?: IconTypes;
    id: number;
    content: string;
    link?: string;
    type?: 'phone' | 'email';
}

export interface ContactDetailsProps {
    items?: ContactItem[];
    edit?: boolean;
    onChange?: (item: ContactItem) => any;
}

class ContactDetails extends React.Component<ContactDetailsProps> {
    public render() {
        const { items = [], edit = false, onChange = (item: any) => null } = this.props;
        const contactItems = items.map(item => {
            const { content, type } = item;
            let isLink = false;
            let href;
            if (type === 'phone') {
                isLink = true;
                href = `tel:${content}`;
            }
            if (type === 'email') {
                isLink = true;
                href = `mailto:${content}`;
            }
            const ItemTag: keyof JSX.IntrinsicElements = !edit && isLink ? 'a' : 'div';
            let icon = IconTypes.ArrowRight;
            if (type && type === 'phone') {
                icon = IconTypes.Phone;
            }
            if (type && type === 'email') {
                icon = IconTypes.MailBlack;
            }
            return (
                <ItemTag
                    href={href}
                    className={`contact-details__item ${
                        isLink ? 'contact-details__item--link' : ''
                    }`}
                >
                    {icon && <Icon icon={icon} size={20} className="contact-details__icon" />}
                    {edit ? (
                        <RichText
                            tagName="span"
                            placeholder="Nummer/Mail-Adresse/..."
                            keepPlaceholderOnFocus
                            value={content}
                            className="info-row__title"
                            onChange={value => {
                                const newItem = { ...item, content: value };
                                return onChange(newItem);
                            }}
                        />
                    ) : (
                        content
                    )}
                </ItemTag>
            );
        });
        return <div className="contact-details">{contactItems}</div>;
    }
}

export default ContactDetails;
