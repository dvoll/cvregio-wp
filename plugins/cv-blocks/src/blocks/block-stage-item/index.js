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

// Register alignments
// const validAlignments = [ 'center', 'wide' ];

// Register the block
registerBlockType( 'cv-blocks/cv-stage-item', {
    title: 'CV Landingpage Stage Element',
    description: 'Ein Element des Header-Blocks.',
    icon: 'format-image',
    category: 'common',
    keywords: [ 'Header', 'Image', 'Element' ],
    parent: [ 'cv-blocks/cv-stage' ],

    attributes: {
        text: {
            type: 'string',
            source: 'text',
            default: 'Beschreibung',
            selector: '.cv-stage-item__text',
        },
        title: {
            type: 'string',
            source: 'text',
            default: 'Headline',
            selector: '.cv-stage-item__title',
        },
        url: {
            type: 'string',
            source: 'text',
            selector: '.cv-stage-item__url',
        },
    },

    edit,

    save: function( props ) {
        const { title, text, url } = props.attributes;
        return (
            <div className="cv-stage__layer cv-stage-item" key={ title }>
                <div className="cv-stage-item__bg" />
                <div className="cv-stage__overlay" />
                <div className="cv-stage-content">
                    <p className="cv-stage-content__title cv-stage-item__title">
                        { title }
                    </p>
                    <p className="cv-stage-content__text cv-stage-item__text">
                        { text }
                    </p>
                    <p className="cv-stage-content__url cv-stage-item__url">
                        { url }
                    </p>
                </div>
            </div>
        );
    },
} );
