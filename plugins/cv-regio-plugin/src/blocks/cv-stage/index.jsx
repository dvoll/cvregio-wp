// @ts-nocheck // TODO: check to add types for custom elements
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';
import edit from './edit';

// Import CSS
import './editor.scss';

// Register alignments
// const validAlignments = [ 'center', 'wide' ];

// Register the block
registerBlockType('cv-blocks/cv-stage', {
    title: 'CV Landingpage Stage',
    description: 'Ein Header Image Slider für die Landingpage.',
    icon: 'format-image',
    category: 'common',
    keywords: ['Intro', 'Header', 'Slider'],
    attributes: [],

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

    // @ts-ignore // TODO: check error
    save({ className }) {
        return (
            <section className={`${className} alignfull`}>
                <cv-stage>
                    <InnerBlocks.Content />
                </cv-stage>
            </section>
        );
    },
});
