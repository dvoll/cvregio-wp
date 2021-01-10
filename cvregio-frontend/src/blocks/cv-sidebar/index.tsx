import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';

// Import block dependencies and components
import edit from './edit';
import Sidebar from '../../components/sidebar/Sidebar';

export interface SidebarBlockAttributes {
    rowOffset?: number;
}

// Register the block
registerBlockType<SidebarBlockAttributes>('cv-blocks/cv-sidebar', {
    title: 'Sidebar Container',
    description: 'Ein Container, um Elemente neben dem Hauptinhalt anzuzeigen.',
    icon: 'welcome-widgets-menus',
    category: 'layout',
    keywords: ['Sidebar'],
    attributes: {
        rowOffset: {
            type: 'number',
            default: 0,
        },
    },

    edit,

    save({ attributes }) {
        const { rowOffset = 0 } = attributes;
        return (
            <Sidebar rowOffset={rowOffset}>
                <InnerBlocks.Content />
            </Sidebar>
        );
    },
});
