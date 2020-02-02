import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
// import './editor.scss';
import '../../components/card/Card.scss';
import '../../components/card/CardContainer.scss';

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
            default: 'grid',
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

    // @ts-ignore // TODO: check error
    getEditWrapperProps(attributes) {
        const { align } = attributes;
        // @ts-ignore // TODO: check error
        if (validAlignments.indexOf(align) !== -1) {
            return { 'data-align': align };
        }
        return {};
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
