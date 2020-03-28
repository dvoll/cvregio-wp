import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import './editor.scss';

// Register alignments
// const validAlignments = [ 'center', 'wide' ];

export interface AssociateTemplateAttributes {
    firstname?: string;
    lastname?: string;
    imageId?: string;
    contactItems?: string;
    // contactItemsString?: string;
}

// Register the block
registerBlockType<AssociateTemplateAttributes>('cv-blocks/cv-associate-template', {
    title: 'CV Mitarbeiter Template',
    description: 'Eigenschaften eines Mitarbeiters.',
    icon: 'align-left',
    category: 'common',
    keywords: ['Mitarbeiter', 'Kontakt'],

    attributes: {
        firstname: {
            type: 'string',
            source: 'meta',
            meta: 'cvregio_meta_associate_firstname',
        },
        lastname: {
            type: 'string',
            source: 'meta',
            meta: 'cvregio_meta_associate_lastname',
        },
        imageId: {
            type: 'string',
            source: 'meta',
            meta: 'cvregio_meta_associate_imageid',
        },
        contactItems: {
            type: 'string',
            source: 'meta',
            meta: 'cvregio_meta_associate_contact_items',
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
});
