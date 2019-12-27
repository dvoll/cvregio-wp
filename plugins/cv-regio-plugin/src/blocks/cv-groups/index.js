import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

// Register the block
registerBlockType('cv-blocks/cv-groups', {
    title: 'CV Gruppenübersicht',
    description: 'Übersicht über alle Gruppen/Angebote.',
    icon: 'screenoptions',
    category: 'common',
    keywords: ['Übersicht', 'Gruppe', 'Angebot'],
    attributes: [],

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
