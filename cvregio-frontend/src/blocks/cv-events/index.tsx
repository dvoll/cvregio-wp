import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
// import '../../components/card/Card.scss';
// import '../../components/card/CardContainer.scss';

export interface EventsBlockAttributes {
    layoutType: 'row' | 'grid';
    categories?: string;
    postsToShow: number;
    align?: 'wide' | 'full' | 'center' | 'left' | 'right';
}

// Register alignments
const validAlignments: Array<'wide' | 'full' | 'center' | 'left' | 'right' | undefined> = [
    'full',
    'wide',
];

// Register the block
registerBlockType<EventsBlockAttributes>('cv-blocks/cv-events', {
    title: 'Termine',
    description: 'Auflistung von Terminen.',
    icon: 'screenoptions',
    category: 'common',
    keywords: ['Termin', 'Termine', 'Event', 'Events'],

    attributes: {
        layoutType: {
            type: 'string',
            default: 'grid',
        },
        categories: {
            // TODO: Check type
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
        if (align && validAlignments.indexOf(align) !== -1) {
            return { 'data-align': align };
        }
        return { 'data-align': 'wide' };
    },

    edit,

    save: () => {
        return null;
    },
});
