import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import './editor.scss';

// Register alignments
// const validAlignments = [ 'center', 'wide' ];

export interface GroupSummeryAttributes {
    location?: string;
    target?: string;
    time?: string;
    locationPreview?: string;
}

// Register the block
registerBlockType<GroupSummeryAttributes>('cv-blocks/cv-group-detail', {
    title: 'CV Gruppen Eigenschaften',
    description: 'Eigenschaften einer Gruppe/eines Angebotes.',
    icon: 'align-left',
    category: 'common',
    keywords: ['Angebot', 'Gruppe', 'Detail'],
    supports: {
        inserter: false,
    },

    attributes: {
        target: {
            type: 'string',
            source: 'meta',
            meta: 'cv_blocks_meta_group_target',
        },
        location: {
            type: 'string',
            source: 'meta',
            meta: 'cv_blocks_meta_group_location',
        },
        time: {
            type: 'string',
            source: 'meta',
            meta: 'cv_blocks_meta_group_time',
        },
        locationPreview: {
            type: 'string',
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
