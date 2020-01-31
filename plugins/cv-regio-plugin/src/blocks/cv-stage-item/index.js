import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

// Import CSS
// import './style.scss';
// import './editor.scss';
// import CvStageItem from './components/cv-stage-item';
import '@dvoll/cvregio-frontend/lib/components/stage-slider/StageItem.scss';
import '@dvoll/cvregio-frontend/lib/components/stage-slider/StageItem';

// Register alignments
// const validAlignments = [ 'center', 'wide' ];

// Register the block
registerBlockType('cv-blocks/cv-stage-item', {
    title: 'CV Landingpage Stage Element',
    description: 'Ein Element des Header-Blocks.',
    icon: 'format-image',
    category: 'common',
    keywords: ['Header', 'Image', 'Element'],
    parent: ['cv-blocks/cv-stage'],

    attributes: {
        title: {
            type: 'array',
            // TODO: check if srouce paramter is valid
            // @ts-ignore
            source: 'children',
            selector: '.cv-stage-card__title',
        },
        description: {
            type: 'array',
            // @ts-ignore
            source: 'children',
            selector: '.cv-stage-card__description',
        },
        url: {
            type: 'string',
            source: 'attribute',
            attribute: 'data-background-url',
            selector: '.cv-stage-card__bg',
        },
        imgSize: {
            type: 'number',
        },
        brightness: {
            type: 'string',
            source: 'attribute',
            attribute: 'data-brightness',
            selector: '.cv-stage-card__bg',
            default: '95',
        },
    },

    // getEditWrapperProps() {
    //     // if ( 'left' === containerWidth || 'right' === containerWidth || 'full' === containerWidth ) {
    //     // 	return { 'data-align': containerWidth };
    //     // }
    //     // return { 'data-align': 'full' };
    // },

    edit,

    save(props) {
        const { attributes } = props;
        return <CvStageItem attributes={attributes} />;
    },
});
