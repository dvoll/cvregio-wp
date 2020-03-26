import * as React from 'react';

// import './AssociateTemplate.scss';
import { RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import ContactDetails, { ContactItem } from './ContactDetails';

// export interface AssociateTemplateAttributes {
//     location?: string;
//     target?: string;
//     time?: string;
// }

export interface AssociateTemplateProps {
    firstname?: string;
    lastname?: string;
    imagePath?: string;
    contactItems?: ContactItem[];
    edit?: boolean;
    handleValueChange?: (title: 'firstname' | 'lastname' | 'image-path', value: string) => void;
    handleContactItemChange?: (items: ContactItem[]) => void;
}

interface AssociateTemplateState {
    firstname?: string;
    lastname?: string;
    imagePath?: string;
    contactItems?: ContactItem[];
}

class AssociateTemplate extends React.Component<AssociateTemplateProps, AssociateTemplateState> {
    readonly state: AssociateTemplateState = {
        firstname: this.props.firstname,
        lastname: this.props.lastname,
        imagePath: this.props.imagePath,
        contactItems: this.props.contactItems,
    };

    constructor(props: AssociateTemplateProps) {
        super(props);
        this.onContactItemChange = this.onContactItemChange.bind(this);
        this.handleNewContactItem = this.handleNewContactItem.bind(this);
    }

    private onContactItemChange(item: ContactItem) {
        this.setState(prevState => {
            return {
                ...prevState,
                contactItems: prevState.contactItems
                    ? [...prevState.contactItems, item]
                    : undefined,
            };
        });
        // TODO: handle contact item change
    }

    private handleNewContactItem() {
        this.addContactitem();
    }

    private addContactitem(type?: 'email' | 'phone') {
        this.setState(prevState => {
            const newItem = {
                id: prevState.contactItems ? prevState.contactItems.length : 0,
                content: '',
                type,
            };
            return {
                ...prevState,
                contactItems: prevState.contactItems
                    ? [...prevState.contactItems, newItem]
                    : [newItem],
            };
        });
    }

    public render() {
        const {
            // firstname = '',
            // lastname = '',
            // imagePath,
            // contactItems = [],
            edit = false,
            handleValueChange = () => null,
        } = this.props;
        const { firstname = '', lastname = '', imagePath = '', contactItems = [] } = this.state;
        return (
            <div className="entry-content">
                <div className="">
                    {edit ? (
                        // if edit use a span to overcome styling issues
                        <RichText
                            tagName="div"
                            placeholder="firstname"
                            keepPlaceholderOnFocus
                            value={firstname}
                            className=""
                            onChange={value =>
                                handleValueChange('firstname', value === '<br>' ? '' : value)
                            }
                        />
                    ) : (
                        <RichText.Content tagName="div" className="" value={firstname} />
                    )}
                </div>
                <div className="">
                    {edit ? (
                        // if edit use a span to overcome styling issues
                        <RichText
                            tagName="div"
                            placeholder="lastname"
                            keepPlaceholderOnFocus
                            value={lastname}
                            className=""
                            onChange={value =>
                                handleValueChange('lastname', value === '<br>' ? '' : value)
                            }
                        />
                    ) : (
                        <RichText.Content tagName="div" className="" value={lastname} />
                    )}
                </div>
                <div className="">
                    {edit ? (
                        // if edit use a span to overcome styling issues
                        <RichText
                            tagName="div"
                            placeholder="imagePath"
                            keepPlaceholderOnFocus
                            value={imagePath}
                            className=""
                            onChange={value =>
                                handleValueChange('image-path', value === '<br>' ? '' : value)
                            }
                        />
                    ) : (
                        <RichText.Content tagName="div" className="" value={imagePath} />
                    )}
                </div>
                <div className="">
                    <Button onClick={this.handleNewContactItem}>Add Item</Button>
                    <ContactDetails edit items={contactItems} onChange={this.onContactItemChange} />
                </div>
            </div>
        );
    }
}

export default AssociateTemplate;
