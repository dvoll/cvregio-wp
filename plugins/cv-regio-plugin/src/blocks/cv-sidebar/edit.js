import { Component, Fragment } from '@wordpress/element';
import { PanelBody, RangeControl } from '@wordpress/components';
import { InspectorControls, InnerBlocks } from '@wordpress/editor';

export default class StageEditBlock extends Component {
    render() {
        const { props } = this;
        const { attributes } = props;
        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title="Position">
                        {/* <SelectControl
                            label={ 'Hintergrundbild' }
                            options={ imageCropOptions }
                            value={ 'full' }
                            onChange={ value =>
                            // this.props.setAttributes( { imageCrop: value } )
                                console.log( 'changed', value )
                            }
                        /> */}
                        <RangeControl
                            label="Nummer der Zeile, in der die Sidebar beginnen soll "
                            value={+attributes.rowOffset}
                            onChange={value => {
                                props.setAttributes({ rowOffset: value });
                            }}
                            min={0}
                            max={20}
                        />
                    </PanelBody>
                </InspectorControls>
                <section className={`${props.className} sidebar`}>
                    <InnerBlocks />
                </section>
            </Fragment>
        );
    }
}
