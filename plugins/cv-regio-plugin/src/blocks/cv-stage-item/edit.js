import { Component, Fragment } from '@wordpress/element';
import StageItem from '@dvoll/cvregio-frontend/lib/components/stage-slider/StageItem';
import StageItemInspector from './components/stage-item-inspector';

/**
 * @type {import('@dvoll/cvregio-frontend/lib/components/stage-slider/StageItem').StageItemBackendComponentType}
 */
const WpStageItemComponent = Component;
export default class StageEditBlock extends WpStageItemComponent {
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
