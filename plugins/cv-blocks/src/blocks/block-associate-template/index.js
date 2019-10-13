/**
 * BLOCK: CV Group Overview Block
 */

// Import block dependencies and components
import edit from './edit';

// Import CSS
import './style.scss';
import './editor.scss';

// import CvGroupDetail from './cv-group-detail';

// Components
// const { __ } = wp.i18n;

// Register block controls
const { registerBlockType } = wp.blocks;

const { InnerBlocks } = wp.editor;

// Register alignments
// const validAlignments = [ 'center', 'wide' ];

// Register the block
registerBlockType('cv-blocks/cv-associate-template', {
    title: 'Mitarbeiter Template',
    description: 'Template für das Anlegen eines Mitarbeiters.',
    icon: 'align-left',
    category: 'common',
    keywords: ['Mitarbeiter'],

    attributes: {
        userid: {
            type: 'string',
            // source: 'meta',
            // meta: 'cv_blocks_meta_associate_userid',
        },
        // location: {
        //     type: 'string',
        //     source: 'meta',
        //     meta: 'cv_blocks_meta_group_location',
        // },
        // time: {
        //     type: 'string',
        //     source: 'meta',
        //     meta: 'cv_blocks_meta_group_time',
        // },
        // locationPreview: {
        //     type: 'string',
        // },
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
});
