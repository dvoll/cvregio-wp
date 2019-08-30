/**
 * External dependencies
 */

// import isUndefined from 'lodash/isUndefined';
// import pickBy from 'lodash/pickBy';
// import moment from 'moment';
// import classnames from 'classnames';
// import Inspector from './inspector';

const { Component, Fragment } = wp.element;

// const { __ } = wp.i18n;

// const { decodeEntities } = wp.htmlEntities;

// const { withSelect } = wp.data;

// const { Placeholder, Spinner, Toolbar, Button, Modal } = wp.components;
// const { withState } = wp.compose;

const { InspectorControls, InnerBlocks } = wp.editor;

const {
    PanelBody,
    TextareaControl,
    RangeControl,
    SelectControl,
    TextControl,
    ToggleControl,
    Button,
    // FocalPointPicker,
} = wp.components;

const {
    // RichText,
    // AlignmentToolbar,
    // BlockControls,
    // InspectorControls,
    // MediaUpload,
} = wp.editor;

const BLOCKS_TEMPLATE = [['cv-blocks/cv-stage-item', {}]];
// const BLOCKS_TEMPLATE = [
//     [ 'core/image', {} ],
//     [ 'core/paragraph', { placeholder: 'Image Details' } ],
// ];

export default class StageEditBlock extends Component {
    render() {
        const props = this.props;
        const attributes = props.attributes;
        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={'Position'}>
                        { /* <SelectControl
                            label={ 'Hintergrundbild' }
                            options={ imageCropOptions }
                            value={ 'full' }
                            onChange={ value =>
                            // this.props.setAttributes( { imageCrop: value } )
                                console.log( 'changed', value )
                            }
                        /> */ }
                        <RangeControl
                            label={'Nummer der Zeile, in der die Sidebar beginnen soll '}
                            value={+attributes.rowOffset}
                            onChange={value => {
                                props.setAttributes({ rowOffset: value });
                            }}
                            min={0}
                            max={20}
                        />
                    </PanelBody>
                </InspectorControls>
                <section className={props.className + ' sidebar'}>
                    <InnerBlocks />
                </section>
            </Fragment>
        );
    }
}

// const MyModal = withState( {
//     isOpen: false,
// } )( ( { isOpen, setState } ) => (
//     <div>
//         <Button isDefault onClick={ () => setState( { isOpen: true } ) }>
// 			Open Modal
//         </Button>
//         { isOpen && (
//             <Modal
//                 className="cv-stage-edit__modal"
//                 title="This is my modal"
//                 onRequestClose={ () => setState( { isOpen: false } ) }
//             >
//                 <Button isDefault onClick={ () => setState( { isOpen: false } ) }>
// 					My custom close button
//                 </Button>
//                 <div
//                     style={ {
//                         width: '100%',
//                         height: '50px',
//                         background: 'green',
//                     } }
//                 />
//             </Modal>
//         ) }
//     </div>
// ) );
