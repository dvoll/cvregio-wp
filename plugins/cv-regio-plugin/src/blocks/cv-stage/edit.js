import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/editor';

const BLOCKS_TEMPLATE = [['cv-blocks/cv-stage-item', {}]];
// const BLOCKS_TEMPLATE = [
//     [ 'core/image', {} ],
//     [ 'core/paragraph', { placeholder: 'Image Details' } ],
// ];

export default class StageEditBlock extends Component {
    render() {
        const { props } = this;
        return (
            <Fragment>
                <section className={`${props.className} alignfull cv-stage-edit`} data-align="full">
                    <InnerBlocks
                        allowedBlocks={[]}
                        // @ts-ignore // TODO: check type error
                        template={BLOCKS_TEMPLATE}
                    />
                </section>
            </Fragment>
        );
    }
}
