/**
 * BLOCK: CV News Overview Block
 */

// Import block dependencies and components
import edit from './edit';

// Import CSS
import './editor.scss';

// Components
// const { __ } = wp.i18n;

// Register block controls
const { registerBlockType } = wp.blocks;

// Register alignments
const validAlignments = ['full', 'wide'];

// Register the block
registerBlockType('cv-blocks/cv-news', {
    title: 'Beitragsübersicht',
    description: 'Auflistung von News/Beiträgen.',
    icon: 'screenoptions',
    category: 'common',
    keywords: ['Übersicht', 'Beitrag', 'Beiträge', 'News', 'Neuigkeiten'],

    attributes: {
        layoutType: {
            type: 'string',
            default: 'grid'
        },
        categories: {
            type: 'string',
        },
        postsToShow: {
            type: 'number',
            default: 6,
        },
        align: {
            type: 'string',
            default: 'wide',
        },
    },

    getEditWrapperProps(attributes) {
        const { align } = attributes;
        if (- 1 !== validAlignments.indexOf(align)) {
            return { 'data-align': align };
        }
    },

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
