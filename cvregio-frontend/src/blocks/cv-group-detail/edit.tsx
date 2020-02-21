import { Component, Fragment } from '@wordpress/element';
import { BlockEditProps } from '@wordpress/blocks';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { Schema } from '@wordpress/api-fetch';
import { GroupSummeryAttributes } from '.';
import GroupSummery from '../../components/groups/GroupSummery';

// const { Component, Fragment } = wp.element;

interface GroupSummeryEditProps extends BlockEditProps<GroupSummeryAttributes> {
    postDescription: string;
}

class GroupSummeryEdit extends Component<GroupSummeryEditProps> {
    handleValueChange(fieldName: 'location' | 'time' | 'target', value: string) {
        /* eslint-disable indent */
        switch (fieldName) {
            case 'location':
                this.props.setAttributes({ location: value });
                break;
            case 'time':
                this.props.setAttributes({ time: value });
                break;
            case 'target':
                this.props.setAttributes({ target: value });
                break;
            default:
        }
        /* eslint-enable */
    }

    render() {
        const { postDescription } = this.props;
        const { location, target, time } = this.props.attributes;

        return (
            <Fragment>
                <GroupSummery
                    edit
                    location={location}
                    target={target}
                    time={time}
                    handleValueChange={(title, value) => this.handleValueChange(title, value)}
                    description={postDescription}
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

        const post = getEntityRecord('postType', 'cvgroups', postId) as Schema.BasePost<'edit'>;

        return {
            postDescription: post?.excerpt?.raw ?? '',
        };
    }),
])(GroupSummeryEdit);
