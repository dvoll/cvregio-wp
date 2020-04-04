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
    title: 'Kontakt mit Mitarbeitern',
    description: 'Verbinde Mitarbeiter mit einer Gruppe.',
    icon: 'align-left',
    category: 'cvregio-content',
    keywords: ['Mitarbeiter', 'Gruppe', 'Kontakt'],

    attributes: {
        headline: {
            type: 'string',
            default: 'Mitarbeiter',
            // source: 'meta',
            // meta: 'cvregio_related_associate_headline',
        },
        description: {
            type: 'string',
            default: 'Hast du Fragen? Wir freuen uns über deine Nachricht.',
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
