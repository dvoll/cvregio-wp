import { Component, Fragment } from '@wordpress/element';
import StageItem from '../../components/stage-slider/StageItem';
import StageItemInspector from './components/stage-item-inspector.js';

/**
 * @type {import('../../components/stage-slider/StageItem.jsx').StageItemBackendComponentType}
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
