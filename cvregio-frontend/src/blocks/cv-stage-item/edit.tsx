// import { Component, Fragment } from '@wordpress/element';
import StageItemInspector from './components/stage-item-inspector';
// import CvStageItem from './components/cv-stage-item';
import { Component, Fragment } from '@wordpress/element';
import { BlockEditProps } from '@wordpress/blocks';

import StageItem, {StageItemAttributes} from '@dvoll/cvregio-frontend/lib/components/stage-slider/StageItem';

export default class StageEditBlock extends Component<BlockEditProps<StageItemAttributes>> {
    render() {
        const { attributes, setAttributes } = this.props;
        return (
            <Fragment>
                <StageItemInspector attributes={attributes} setAttributes={setAttributes} />
                <StageItem {...this.props} isEdit />
            </Fragment>
        );
    }
}
