import { Component, Fragment } from '@wordpress/element';
import StageItemInspector from './components/stage-item-inspector';
import CvStageItem from './components/cv-stage-item';

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
                <StageItemInspector attributes={attributes} setAttributes={setAttributes} />
                <CvStageItem attributes={attributes} isEdit setAttributes={setAttributes} />
            </Fragment>
        );
    }
}
