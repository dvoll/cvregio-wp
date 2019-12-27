import { registerBlockType } from '@wordpress/blocks';
import './style.css';
import GroupDetail from "./blocks/group-detail/index";
 
registerBlockType( 'myguten/test-block', {
    title: 'Basic Example',
    icon: 'smiley',
    category: 'layout',
    attributes: [],
    edit: () => <div>Hola, mundo!</div>,
    save: () => <div>Hola, mundo!</div>,
} );