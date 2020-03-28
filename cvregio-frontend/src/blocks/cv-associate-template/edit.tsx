import { Component, Fragment } from '@wordpress/element';
import { BlockEditProps } from '@wordpress/blocks';
import { AssociateTemplateAttributes } from '.';
import AssociateTemplate from '../../components/associates/Associate';
import { ContactItem } from '../../components/associates/ContactDetails';

import './editor.scss';

class AssociateTemplateEdit extends Component<BlockEditProps<AssociateTemplateAttributes>> {
    handleValueChange(fieldName: 'firstname' | 'lastname' | 'image-id', value: string | number) {
        /* eslint-disable indent */
        switch (fieldName) {
            case 'firstname':
                this.props.setAttributes({ firstname: `${value}` });
                break;
            case 'lastname':
                this.props.setAttributes({ lastname: `${value}` });
                break;
            case 'image-id':
                this.props.setAttributes({ imageId: `${value}` });
                break;
            default:
        }
        /* eslint-enable */
    }

    handleContactItemChange(items: ContactItem[]) {
        this.props.setAttributes({ contactItems: JSON.stringify(items) });
    }

    render() {
        const { firstname, lastname, imageId, contactItems } = this.props.attributes;
        let contactItemArray = [] as ContactItem[];
        if (contactItems) {
            try {
                contactItemArray = JSON.parse(contactItems) as ContactItem[];
            } catch (e) {
                console.error('Error parsing contact items.', contactItems);
            }
        }
        return (
            <Fragment>
                <AssociateTemplate
                    edit
                    firstname={firstname}
                    lastname={lastname}
                    imageId={imageId && imageId !== '' ? +imageId : undefined}
                    contactItems={contactItemArray}
                    handleValueChange={(title, value) => this.handleValueChange(title, value)}
                    handleContactItemChange={items => this.handleContactItemChange(items)}
                />
            </Fragment>
        );
    }
}

export default AssociateTemplateEdit;
// export default compose([
//     /**
//      * @param {string} props
//      */
//     withSelect<
//         any,
//         {
//             attributes: BlockEditProps<{}> & {
//                 order: string;
//                 orderBy: string;
//                 postsToShow: number;
//                 offset: number;
//             };
//         }
//     >((select, props) => {
//         // const {  } = props.attributes;
//         const { getEntityRecord } = select('core');

//         const postId = select('core/editor').getCurrentPostId();

//         const post = getEntityRecord('postType', 'cvassociates', postId) as Schema.BasePost<'edit'>;

//         return {
//             postDescription: post?.excerpt?.raw ?? '',
//         };
//     }),
// ])(AssociateTemplateEdit);
