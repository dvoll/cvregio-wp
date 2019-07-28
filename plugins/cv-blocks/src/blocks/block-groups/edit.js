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

// const { InspectorControls, InnerBlocks } = wp.editor;

const {
    // RichText,
    // AlignmentToolbar,
    // BlockControls,
    // InspectorControls,
    // MediaUpload,
} = wp.editor;

// const BLOCKS_TEMPLATE = [ [ 'cv-blocks/cv-stage-item', {} ] ];
// const BLOCKS_TEMPLATE = [
//     // [ 'cv-blocks/cv-groups', {} ],
//     ['core/paragraph', { placeholder: 'Image Details' }],
//     // [],
// ];

export default class GroupsEditBlock extends Component {
    render() {
        const props = this.props;
        return (
            <Fragment>
                <section
                    className={props.className + ' alignfull cv-stage-edit'}
                    data-align="full"
                >
                    { /* <InnerBlocks /> */}
                    Gruppenübersicht
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
