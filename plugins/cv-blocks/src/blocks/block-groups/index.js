/**
 * BLOCK: CV Group Overview Block
 */

// Import block dependencies and components
import edit from './edit';

// Import CSS
import './style.scss';
import './editor.scss';

// Components
// const { __ } = wp.i18n;

// Register block controls
const { registerBlockType } = wp.blocks;

// Register alignments
// const validAlignments = [ 'center', 'wide' ];

// Register the block
registerBlockType('cv-blocks/cv-groups', {
    title: 'CV Gruppenübersicht',
    description: 'Übersicht über alle Gruppen/Angebote.',
    icon: 'screenoptions',
    category: 'common',
    keywords: ['Übersicht', 'Gruppe', 'Angebot'],

    // getEditWrapperProps( attributes ) {
    // 	const { align } = attributes;
    // 	if ( -1 !== validAlignments.indexOf( align ) ) {
    // 		return { 'data-align': align };
    // 	}
    // },

    getEditWrapperProps() {
        // if ( 'left' === containerWidth || 'right' === containerWidth || 'full' === containerWidth ) {
        // 	return { 'data-align': containerWidth };
        // }
        return { 'data-align': 'full' };
    },

    edit,

    save: () => {
        return null;
    },
});
