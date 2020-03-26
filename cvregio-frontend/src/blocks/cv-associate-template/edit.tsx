import { Component, Fragment } from '@wordpress/element';
import { BlockEditProps } from '@wordpress/blocks';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { Schema } from '@wordpress/api-fetch';
import { AssociateTemplateAttributes } from '.';
import AssociateTemplate from '../../components/associates/AssociateTemplate';

// const { Component, Fragment } = wp.element;

// interface AssociateTemplateEditProps extends BlockEditProps<AssociateTemplateAttributes> {
//     postDescription: string;
// }

class AssociateTemplateEdit extends Component<BlockEditProps<AssociateTemplateAttributes>> {
    handleValueChange(fieldName: 'firstname' | 'lastname' | 'image-path', value: string) {
        /* eslint-disable indent */
        switch (fieldName) {
            case 'firstname':
                this.props.setAttributes({ firstname: value });
                break;
            case 'lastname':
                this.props.setAttributes({ lastname: value });
                break;
            case 'image-path':
                this.props.setAttributes({ imagePath: value });
                break;
            default:
        }
        /* eslint-enable */
    }

    render() {
        const { firstname, lastname, imagePath, contactItems } = this.props.attributes;

        return (
            <Fragment>
                <AssociateTemplate
                    edit
                    firstname={firstname}
                    lastname={lastname}
                    imagePath={imagePath}
                    contactItems={contactItems}
                    handleValueChange={(title, value) => this.handleValueChange(title, value)}
                />
            </Fragment>
        );
    }
}

export default compose([
    /**
     * @param {string} props
     */
    withSelect<
        any,
        {
            attributes: BlockEditProps<{}> & {
                order: string;
                orderBy: string;
                postsToShow: number;
                offset: number;
            };
        }
    >((select, props) => {
        // const {  } = props.attributes;
        const { getEntityRecord } = select('core');

        const postId = select('core/editor').getCurrentPostId();

        const post = getEntityRecord('postType', 'cvassociates', postId) as Schema.BasePost<'edit'>;

        return {
            postDescription: post?.excerpt?.raw ?? '',
        };
    }),
])(AssociateTemplateEdit);
