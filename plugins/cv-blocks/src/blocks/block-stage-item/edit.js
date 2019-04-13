/**
 * External dependencies
 */

// import isUndefined from 'lodash/isUndefined';
// import pickBy from 'lodash/pickBy';
// import moment from 'moment';
// import classnames from 'classnames';
import StageItemInspector from './components/stage-item-inspector';

const { Component, Fragment } = wp.element;

// const { __ } = wp.i18n;

// const { decodeEntities } = wp.htmlEntities;

// const { withSelect } = wp.data;

// const { Placeholder, Spinner, Toolbar, Button, Modal } = wp.components;
// const { withState } = wp.compose;

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

        const { title = 'das', text = '123', url = 'bkadb' } = attributes;
        // Check the image orientation
        // const isLandscape = attributes.imageCrop === 'inset';

        // Check the post type
        // const isPost = attributes.postType === 'post';

        // if ( ! hasPosts ) {
        return (
            <Fragment>
                <StageItemInspector { ...this.props } />
                <div className="cv-stage__layer cv-stage-item cv-stage-edit-item">
                    <div
                        className="cv-stage-item__bg"
                        style={ { backgroundImage: 'url(' + url + ')' } }
                    />
                    <div className="cv-stage__overlay" />
                    <div className="cv-stage-content">
                        <p className="cv-stage-content__title cv-stage-item__title">
                            { title }
                        </p>
                        <p className="cv-stage-content__text cv-stage-item__text">
                            { text }
                        </p>
                        <p className="cv-stage-content__url cv-stage-item__url">
                            { url }
                        </p>
                    </div>
                </div>
            </Fragment>
        );
    }
}
