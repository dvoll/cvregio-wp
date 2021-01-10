import { Component, Fragment } from '@wordpress/element';
import { PanelBody, RangeControl } from '@wordpress/components';
import { InspectorControls, InnerBlocks } from '@wordpress/editor';
import { BlockEditProps } from '@wordpress/blocks';
import { SidebarBlockAttributes } from '.';
import { GroupGridItem } from '../../components/groups/GroupGrid';
import Sidebar from '../../components/sidebar/Sidebar';

import './editor.scss';

interface SidebarEditBlockProps extends BlockEditProps<SidebarBlockAttributes> {
    groups?: GroupGridItem[] | null;
}

export default class StageEditBlock extends Component<SidebarEditBlockProps> {
    render() {
        const { attributes, setAttributes, className } = this.props;
        const { rowOffset = 0 } = attributes;
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
                            value={+rowOffset}
                            onChange={value => {
                                setAttributes({ rowOffset: value });
                            }}
                            min={0}
                            max={20}
                        />
                    </PanelBody>
                </InspectorControls>
                <Sidebar className={className}>
                    <InnerBlocks />
                </Sidebar>
            </Fragment>
        );
    }
}
