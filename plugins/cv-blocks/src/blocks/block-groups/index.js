/**
 * BLOCK: CV Group Overview Block
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
registerBlockType( 'cv-blocks/cv-groups', {
    title: 'CV Gruppenübersicht',
    description: 'Übersicht über alle Gruppen/Angebote.',
    icon: 'format-image',
    category: 'common',
    keywords: [ 'Übersicht', 'Gruppe', 'Angebot' ],

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
                <div>
					Groups: <br />
                    <InnerBlocks.Content />
                </div>
            </section>
        );
    },
} );
