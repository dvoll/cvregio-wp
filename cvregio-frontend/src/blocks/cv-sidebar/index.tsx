import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';

// Import block dependencies and components
import edit from './edit';

export interface SidebarBlockAttributes {
    rowOffset?: number;
}

// Register the block
registerBlockType<SidebarBlockAttributes>('cv-blocks/cv-sidebar', {
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

    save({ attributes }) {
        const { rowOffset = 0 } = attributes;
        return (
            <section
                className="sidebar mytest"
                style={{ ['--sidebar-row-start' as any]: rowOffset + 1 }}
            >
                <InnerBlocks.Content />
            </section>
        );
    },
});