import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

export interface GroupsBlockAttributes {
    align: 'wide' | 'full' | 'center' | 'left' | 'right' | undefined;
}

const validAlignments = ['full', 'wide'];

// Register the block
registerBlockType<GroupsBlockAttributes>('cv-blocks/cv-groups', {
    title: 'Gruppen-übersicht',
    description: 'Übersicht über alle Gruppen/Angebote.',
    icon: 'screenoptions',
    category: 'cvregio-content',
    keywords: ['Übersicht', 'Gruppe', 'Angebot'],
    attributes: {
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
