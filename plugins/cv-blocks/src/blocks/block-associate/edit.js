/**
 * External dependencies
 */

// import isUndefined from 'lodash/isUndefined';
// import pickBy from 'lodash/pickBy';
// import moment from 'moment';
// import classnames from 'classnames';
// import StageItemInspector from './components/stage-item-inspector';

const { Component, Fragment } = wp.element;

const { compose } = wp.compose;

const {
    withSelect
} = wp.data;

// const { __ } = wp.i18n;

// const { decodeEntities } = wp.htmlEntities;

// const { withSelect } = wp.data;

// const { Placeholder, Spinner, Toolbar, Button, Modal } = wp.components;
// const { withState } = wp.compose;

const { TextControl } = wp.components;

const {
    // RichText,
    // AlignmentToolbar,
    // BlockControls,
    // InspectorControls,
    // MediaUpload,
} = wp.editor;

class StageEditBlock extends Component {
    render() {
        const { attributes, setAttributes, allAuthors } = this.props;

        // Check the image orientation
        // const isLandscape = attributes.imageCrop === 'inset';

        // Check the post type
        // const isPost = attributes.postType === 'post';
        const authors = allAuthors.map((author) => {
            return <p>Author: {author.name}</p>;
        })

        // if ( ! hasPosts ) {
        return (
            <Fragment>
                { /* <StageItemInspector
                    attributes={ attributes }
                    setAttributes={ setAttributes }
                /> */ }
                <div>
                    <TextControl
                        label="Benutzer"
                        value={attributes.location}
                        onChange={value =>
                            setAttributes({
                                location: value,
                                // locationPreview: value,
                            })
                        }
                    />
                    {authors}
                </div>
            </Fragment>
        );
    }
}

export default compose([
    withSelect((select) => {
        // const {
        //     order,
        //     categories
        // } = props.attributes;

        const { getAuthors } = select('core');

        // console.log('select( core)', select('core'));
        // console.log('select( core)', getUserQueryResults());
        // console.log('select( core)', getEntityRecords('postType', 'post'));
        // console.log('select( core)', getEntityRecords('root', 'users'));
        console.log('select( core)', getAuthors());

        // const latestPostsQuery = pickBy({
        //     categories,
        //     order,
        //     orderby: props.attributes.orderBy,
        //     per_page: props.attributes.postsToShow,
        //     offset: props.attributes.offset,
        //     exclude: [wp.data.select('core/editor').getCurrentPostId()]
        // }, (value) => !isUndefined(value));

        return {
            allAuthors: getAuthors(),
        };
    })
])(StageEditBlock);
