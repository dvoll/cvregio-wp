/**
 * BLOCK: CV Group Overview Block
 */

// Import block dependencies and components
import edit from './edit';

// Import CSS
import './style.scss';
import './editor.scss';

import CvGroupDetail from './cv-group-detail';

// Components
// const { __ } = wp.i18n;

// Register block controls
const { registerBlockType } = wp.blocks;

const { InnerBlocks } = wp.editor;

// Register alignments
// const validAlignments = [ 'center', 'wide' ];

// Register the block
registerBlockType( 'cv-blocks/cv-group-detail', {
    title: 'CV Gruppen Eigenschaften',
    description: 'Eigenschaften einer Gruppe/eines Angebotes.',
    icon: 'format-image',
    category: 'common',
    keywords: [ 'Angebot', 'Gruppe', 'Detail' ],

    attributes: {
        target: {
            type: 'string',
            source: 'meta',
            meta: 'cv_blocks_meta_group_target',
        },
        location: {
            type: 'string',
            source: 'meta',
            meta: 'cv_blocks_meta_group_location',
        },
        locationPreview: {
            type: 'string',
        },
    },

    // getEditWrapperProps( attributes ) {
    // 	const { align } = attributes;
    // 	if ( -1 !== validAlignments.indexOf( align ) ) {
    // 		return { 'data-align': align };
    // 	}
    // },

    // getEditWrapperProps() {
    //     // if ( 'left' === containerWidth || 'right' === containerWidth || 'full' === containerWidth ) {
    //     // 	return { 'data-align': containerWidth };
    //     // }
    //     return { 'data-align': 'full' };
    // },

    edit,

    save: () => {
        return null;
    },
} );
