import { Component, Fragment } from '@wordpress/element';
import { BlockEditProps } from '@wordpress/blocks';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { Schema } from '@wordpress/api-fetch';
import { BlockControls, BlockAlignmentToolbar } from '@wordpress/editor';
import GroupGrid, { GroupGridItem } from '../../components/groups/GroupGrid';
import { GroupsBlockAttributes } from '.';

interface GroupsEditBlockProps extends BlockEditProps<GroupsBlockAttributes> {
    groups?: GroupGridItem[] | null;
}

class GroupsEditBlock extends Component<GroupsEditBlockProps> {
    render() {
        const { className, attributes, setAttributes } = this.props;
        const { align } = attributes;
        const groups = this.props.groups || [];
        return (
            <Fragment>
                <BlockControls>
                    <BlockAlignmentToolbar
                        value={align}
                        onChange={value => {
                            setAttributes({ align: value });
                        }}
                        controls={['wide', 'full']}
                    />
                </BlockControls>
                <section
                    className={`cv-blocks-dynamic-block-preview ${className} ${
                        align ? ` align${align}` : ''
                    }`}
                    data-align="full"
                >
                    <GroupGrid groups={groups} />
                </section>
            </Fragment>
        );
    }
}

function pickBy(object: any) {
    const obj: any = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in object) {
        if (object[key] !== null && object[key] !== false && object[key] !== undefined) {
            obj[key] = object[key];
        }
    }
    return obj;
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
        const { order, postsToShow, offset, orderBy } = props.attributes;

        // @ts-ignore
        const { getEntityRecords, getMedia } = select('core');

        const latestPostsQuery = pickBy({
            order,
            orderby: orderBy,
            per_page: postsToShow,
            offset,
            // exclude: [select('core/editor').getCurrentPostId()],
        });
        const latestPosts =
            (getEntityRecords('postType', 'cvgroups', latestPostsQuery) as Schema.BasePost<
                'edit'
            >[]) || [];

        const groupGridItems: GroupGridItem[] = latestPosts.map(item => {
            let imgSrc: Schema.BaseMedia<'edit'> | undefined;
            if (item.featured_media > 0) {
                try {
                    imgSrc = getMedia(item.featured_media);
                } catch (e) {
                    console.error(`Could not load featured image of post with id ${item.id}.`);
                }
            }

            const meta: {
                cv_blocks_meta_group_location?: string;
                cv_blocks_meta_group_target?: string;
                cv_blocks_meta_group_time?: string;
            } = item.meta as any;

            return {
                title: item.title.rendered,
                imgSrc: imgSrc?.media_details?.sizes?.medium?.source_url,
                location: meta.cv_blocks_meta_group_location || '',
                target: meta.cv_blocks_meta_group_target,
                time: meta.cv_blocks_meta_group_time,
                link: item.link,
            };
        });

        return {
            groups: groupGridItems,
        };
    }),
])(GroupsEditBlock);
