/**
 * BLOCK: Atomic Blocks Post and Page Grid
 */

// Import block dependencies and components
import edit from './edit';

// Import CSS
import './style.scss';
import './editor.scss';

// Components
// const { __ } = wp.i18n;

// Register block controls
const { registerBlockType } = wp.blocks;

const { InnerBlocks } = wp.editor;

// Register alignments
// const validAlignments = [ 'center', 'wide' ];

// Register the block
registerBlockType( 'cv-blocks/cv-stage', {
    title: 'CV Landingpage Stage',
    description: 'Ein Header Image Slider für die Landingpage.',
    icon: 'format-image',
    category: 'common',
    keywords: [ 'Intro', 'Header', 'Slider' ],

    // getEditWrapperProps( attributes ) {
    // 	const { align } = attributes;
    // 	if ( -1 !== validAlignments.indexOf( align ) ) {
    // 		return { 'data-align': align };
    // 	}
    // },

    edit,

    save: function( props ) {
        const {} = props.attributes;
        // const itemList = items.map( item => {
        //     return (
        //         <div className="cv-stage__layer cv-stage-item" key={ item.title }>
        //             <div className="cv-stage-item__bg" />
        //             <div className="cv-stage__overlay" />
        //             <div className="cv-stage-content">
        //                 <p className="cv-stage-content__title cv-stage-item__title">
        //                     { item.title }
        //                 </p>
        //                 <p className="cv-stage-content__text cv-stage-item__text">
        //                     { item.text }
        //                 </p>
        //                 <p className="cv-stage-content__url cv-stage-item__url">
        //                     { item.url }
        //                 </p>
        //             </div>
        //         </div>
        //     );
        // } );
        return (
            <section className={ props.className + ' alignfull' }>
                <cv-stage>
                    <InnerBlocks.Content />
                </cv-stage>
            </section>
        );
    },
} );
