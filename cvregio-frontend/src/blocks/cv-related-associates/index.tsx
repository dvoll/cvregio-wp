import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import './editor.scss';

export interface RelatedAssociatesAttributes {
    headline?: string;
    description: string;
    associates?: string;
    contactItems?: string;
}

// Register the block
registerBlockType<RelatedAssociatesAttributes>('cv-blocks/cv-related-associates', {
    title: 'CV Gruppen Mitarbeiter',
    description: 'Verbinde Mitarbeiter mit einer Gruppe.',
    icon: 'align-left',
    category: 'common',
    keywords: ['Mitarbeiter', 'Gruppe'],

    attributes: {
        headline: {
            type: 'string',
            // source: 'meta',
            // meta: 'cvregio_related_associate_headline',
        },
        description: {
            type: 'string',
            // source: 'meta',
            // meta: 'cvregio_meta_associate_lastname',
        },
        associates: {
            type: 'string',
            source: 'meta',
            meta: 'cvregio_meta_associates',
        },
        contactItems: {
            type: 'string',
            source: 'meta',
            meta: 'cvregio_meta_contact_items',
        },
    },

    edit,

    save: () => {
        return null;
    },
});