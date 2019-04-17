/**
 * BLOCK: Atomic Blocks Post and Page Grid
 */

// Import block dependencies and components
import edit from './edit';

// Import CSS
import './style.scss';
import './editor.scss';
import CvStageItem from './components/cv-stage-item';

// Components
// const { __ } = wp.i18n;

// Register block controls
const { registerBlockType } = wp.blocks;

// Register alignments
// const validAlignments = [ 'center', 'wide' ];

// Register the block
registerBlockType( 'cv-blocks/cv-stage-item', {
    title: 'CV Landingpage Stage Element',
    description: 'Ein Element des Header-Blocks.',
    icon: 'format-image',
    category: 'common',
    keywords: [ 'Header', 'Image', 'Element' ],
    parent: [ 'cv-blocks/cv-stage' ],

    attributes: {
        title: {
            type: 'string',
            source: 'text',
            default: 'Headline',
            selector: '.cv-stage-item__title',
        },
        description: {
            type: 'string',
            source: 'text',
            default: 'Beschreibung',
            selector: '.cv-stage-item__description',
        },
        url: {
            type: 'string',
            source: 'attribute',
            attribute: 'data-background-url',
            selector: '.cv-stage-item__bg',
        },
        brightness: {
            type: 'string',
            source: 'attribute',
            attribute: 'data-brightness',
            selector: '.cv-stage-item__bg',
            default: '95',
        },
    },

    getEditWrapperProps() {
        // if ( 'left' === containerWidth || 'right' === containerWidth || 'full' === containerWidth ) {
        // 	return { 'data-align': containerWidth };
        // }
        // return { 'data-align': 'full' };
    },

    edit,

    save: function( props ) {
        const attributes = props.attributes;
        return <CvStageItem attributes={ attributes } />;
    },
} );
