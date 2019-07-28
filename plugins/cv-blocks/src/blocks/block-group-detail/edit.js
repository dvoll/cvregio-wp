/**
 * External dependencies
 */

// import isUndefined from 'lodash/isUndefined';
// import pickBy from 'lodash/pickBy';
// import moment from 'moment';
// import classnames from 'classnames';
// import StageItemInspector from './components/stage-item-inspector';
import CvGroupDetail from './cv-group-detail';

const { Component, Fragment } = wp.element;

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

export default class StageEditBlock extends Component {
    render() {
        const { attributes, setAttributes } = this.props;

        // Check the image orientation
        // const isLandscape = attributes.imageCrop === 'inset';

        // Check the post type
        // const isPost = attributes.postType === 'post';

        // if ( ! hasPosts ) {
        return (
            <Fragment>
                { /* <StageItemInspector
                    attributes={ attributes }
                    setAttributes={ setAttributes }
                /> */ }
                <div>
                    <TextControl
                        label="Meta Block Field"
                        value={ attributes.location }
                        onChange={ value =>
                            setAttributes( {
                                location: value,
                                locationPreview: value,
                            } )
                        }
                    />
                </div>
            </Fragment>
        );
    }
}