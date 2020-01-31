import { Component, Fragment } from '@wordpress/element';
import StageItem from '../../../lib/components/stage-slider/StageItem.js';
import StageItemInspector from './components/stage-item-inspector.js';

/**
 * @type {import('../../../lib/components/stage-slider/StageItem').StageItemBackendComponentType}
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
