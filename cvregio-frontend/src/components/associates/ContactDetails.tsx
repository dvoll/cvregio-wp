import * as React from 'react';
import Icon, { IconTypes } from '../base/Icon';

import './ContactDetails.scss';

export interface ContactItem {
    // icon?: IconTypes;
    content: string;
    link?: string;
    type?: 'phone' | 'email';
}

export interface ContactDetailsProps {
    items?: ContactItem[];
}

class ContactDetails extends React.Component<ContactDetailsProps> {
    public render() {
        const { items = [] } = this.props;
        const contactItems = items.map(({ content, type }) => {
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
            const ItemTag: keyof JSX.IntrinsicElements = isLink ? 'a' : 'div';
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
                    {content}
                </ItemTag>
            );
        });
        return <div className="contact-details">{contactItems}</div>;
    }
}

export default ContactDetails;
