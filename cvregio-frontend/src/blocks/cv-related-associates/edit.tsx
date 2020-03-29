import { Component, Fragment } from '@wordpress/element';
import { BlockEditProps } from '@wordpress/blocks';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { Schema } from '@wordpress/api-fetch';
import { RelatedAssociatesAttributes } from '.';
import RelatedAssociates from '../../components/associates/RelatedAssociates';
import { ContactItem } from '../../components/associates/ContactDetails';
import { AssociateItemProps } from '../../components/associates/AssociateItem';
import RelatedAssociatesInspector from './RelatedAssociatesInspector';

import './editor.scss';

export interface AssociateFull extends AssociateItemProps {
    isContact?: boolean;
}

interface RelatedAssociatesEditProps extends BlockEditProps<RelatedAssociatesAttributes> {
    associates: AssociateFull[];
}

interface RelatedAssociatesEditState {
    selectedAssociates: AssociateFull[];
    contactItems: ContactItem[];
    // isSelected:
}

class RelatedAssociatesEdit extends Component<RelatedAssociatesEditProps, RelatedAssociatesEditState> {
    readonly state: RelatedAssociatesEditState = {
        selectedAssociates: [],
        // selectedContactAssociates: [],
        contactItems: [],
    };

    static getDerivedStateFromProps(props: RelatedAssociatesEditProps) {
        const { associates: selectedAssociates, contactItems } = props.attributes;
        let associatesArray: AssociateFull[] = [];
        if (selectedAssociates) {
            try {
                associatesArray = JSON.parse(selectedAssociates) as AssociateFull[];
            } catch (e) {
                console.error('Error parsing related associates.', selectedAssociates);
            }
        }

        let contactItemArray: ContactItem[] = [];
        if (contactItems) {
            try {
                contactItemArray = JSON.parse(contactItems) as ContactItem[];
            } catch (e) {
                console.error('Error parsing contact items.', contactItems);
            }
        }

        const newState: RelatedAssociatesEditState = {
            selectedAssociates: associatesArray,
            contactItems: contactItemArray,
        };
        return newState;
    }

    handleValueChange(fieldName: 'headline' | 'description' | 'associates' | 'contactItems', value: string) {
        /* eslint-disable indent */
        switch (fieldName) {
            case 'headline':
                this.props.setAttributes({ headline: value });
                break;
            case 'description':
                this.props.setAttributes({ description: value });
                break;
            case 'associates':
                this.props.setAttributes({ associates: value });
                break;
            case 'contactItems':
                this.props.setAttributes({ contactItems: value });
                break;
            default:
        }
        /* eslint-enable */
    }

    handleAssociateChange(id: number | string, remove = false, changedItem?: AssociateFull) {
        console.log('item change', changedItem);

        let newAssociates: AssociateFull[] = [];
        if (!remove && changedItem) {
            newAssociates = this.state.selectedAssociates.map(item => {
                if (item.id === id) {
                    return changedItem;
                }
                return item;
            });
        } else if (!remove) {
            const associate = this.props.associates.find(item => item.id === id);
            if (!associate) {
                return;
            }
            if (this.state.selectedAssociates.findIndex(item => item.id === id) >= 0) {
                return;
            }
            associate.roles = [{ name: 'Mitarbeiter', label: 'Mitarbeiter' }];
            newAssociates = this.state.selectedAssociates.concat([associate]);
            this.props.setAttributes({ associates: JSON.stringify(newAssociates) });
        } else {
            newAssociates = this.state.selectedAssociates.filter(item => item.id !== id);
        }
        this.props.setAttributes({ associates: JSON.stringify(newAssociates) });
    }

    handleContactItemChange(items: ContactItem[]) {
        console.log('contact item change', items.length, this.state.contactItems.length);

        this.props.setAttributes({ contactItems: JSON.stringify(items) });
    }

    render() {
        const {
            headline = 'Mitarbeiter',
            description = 'Hast du Fragen? Wir freuen uns über deine Nachricht.',
        } = this.props.attributes;
        const { associates, isSelected } = this.props;
        const { selectedAssociates, contactItems } = this.state;

        const contacts: AssociateItemProps[] = [];
        const otherAssociates: AssociateItemProps[] = [];
        selectedAssociates.forEach(associate => {
            if (associate.isContact) {
                contacts.push(associate);
            } else {
                otherAssociates.push(associate);
            }
        });

        return (
            <Fragment>
                <RelatedAssociatesInspector
                    associates={associates}
                    selectedAssociates={selectedAssociates}
                    // selectedContactAssociates={contacts}
                    onAssociateChange={(id, item) => this.handleAssociateChange(id, false, item)}
                    onAssociateSelect={id => this.handleAssociateChange(id)}
                    onAssociateRemove={id => this.handleAssociateChange(id, true)}
                />
                <RelatedAssociates
                    edit={isSelected}
                    headline={headline}
                    description={description}
                    contactItems={contactItems}
                    contactAssociates={contacts}
                    associates={otherAssociates}
                    onContactItemsChange={items => this.handleContactItemChange(items)}
                    // handleValueChange={(title, value) => this.handleValueChange(title, value)}
                    // handleContactItemChange={items => this.handleContactItemChange(items)}
                />
            </Fragment>
        );
    }
}

// export default RelatedAssociatesEdit;

export default compose([
    /**
     * @param {string} props
     */
    withSelect<any, {}>(select => {
        // const { order, postsToShow, offset, orderBy } = props.attributes;

        // @ts-ignore
        const { getEntityRecords } = select('core');

        // const latestPostsQuery = pickBy({
        //     order,
        //     orderby: orderBy,
        //     per_page: postsToShow,
        //     offset,
        //     // exclude: [select('core/editor').getCurrentPostId()],
        // });
        const latestPosts = (getEntityRecords('postType', 'cvassociates') as Schema.BasePost<'edit'>[]) || [];

        const associates: AssociateFull[] = latestPosts.map(item => {
            const meta: {
                cvregio_meta_associate_firstname?: string;
                cvregio_meta_associate_lastname?: string;
                cvregio_meta_associate_imageid?: string;
            } = item.meta as any;

            return {
                id: item.id,
                firstname: meta.cvregio_meta_associate_firstname || '',
                lastname: meta.cvregio_meta_associate_lastname || '',
                imageId: meta.cvregio_meta_associate_imageid ? +meta.cvregio_meta_associate_imageid : undefined,
                contactItems: [],
                roles: [],
            };
        });

        return {
            associates,
        };
    }),
])(RelatedAssociatesEdit);
