import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';

// Import block dependencies and components
import edit from './edit';

// Import CSS
import './editor.scss';

// Register the block
registerBlockType('cv-blocks/cv-sidebar', {
    title: 'Sidebar Container',
    description: 'Ein Container, um Elemente neben dem Hauptinhalt anzuzeigen.',
    icon: 'welcome-widgets-menus',
    category: 'common',
    keywords: ['Sidebar'],
    attributes: {
        rowOffset: {
            type: 'number',
            default: 1,
        },
    },

    edit,

    // @ts-ignore // TODO: check missing property
    save({ attributes, className }) {
        const { rowOffset } = attributes;
        return (
            <section
                className={`${className} sidebar mytest`}
                // @ts-ignore
                style={{ '--sidebar-row-start': rowOffset + 1 }}
            >
                <InnerBlocks.Content />
            </section>
        );
    },
});
