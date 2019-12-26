<?php

function cv_blocks_groups_custom_post_type()
{
    register_post_type(
        'cvgroups',
        array(
            'labels'      => array(
                'name'          => __('Angebote'),
                'singular_name' => __('Angebot'),
            ),
            'menu_icon' => 'dashicons-welcome-widgets-menus',
            'public'      => true,
            'has_archive' => true,
            'hierarchical' => true,
            'rewrite'     => array('slug' => 'gruppen'),
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'excerpt', 'page-attributes', 'author', 'custom-fields', 'thumbnail'),
            'template' => array(
                array('cv-blocks/cv-group-detail')
                // array( 'core/image', array(
                // 	'align' => 'left',
                // ) ),
                // array( 'core/heading', array(
                // 	'placeholder' => 'Add Author...',
                // ) ),
                // array( 'core/columns', array(), array(
                // 	array( 'core/column', array(), array() ),
                // 	array( 'core/column', array(), array(
                // 		array( 'core/paragraph', array(
                // 			'placeholder' => 'Add a inner paragraph'
                // 		) ),
                // 	) ),
                // ) )
            ),
            // 'template_lock' => 'all',
            //    'supports' => array(
            // 	   'title',
            // 	   'excerpt',
            // 	   'editor',
            // 	   'page-attributes',
            // 	   'author',
            //    )
        )
    );
}
add_action('init', 'cv_blocks_groups_custom_post_type');

// Add the custom columns to the book post type:
function set_custom_edit_cvgroup__columns($columns)
{
    // unset( $columns['author'] );
    $columns['location'] = 'Ort';
    $columns['target'] = 'Zielgruppe';

    return $columns;
}
add_filter('manage_cvgroups_posts_columns', 'set_custom_edit_cvgroup__columns');

function custom_cvgroup_column($column, $post_id)
{
    switch ($column) {

        case 'location':
            echo get_post_meta($post_id, 'cv_blocks_meta_group_location', true);
            break;
        case 'target':
            echo get_post_meta($post_id, 'cv_blocks_meta_group_target', true);
            break;
    }
}
// Add the data to the custom columns for the book post type:
add_action('manage_cvgroups_posts_custom_column', 'custom_cvgroup_column', 10, 2);


function cv_group_block_init()
{
    register_post_meta('cvgroups', 'cv_blocks_meta_group_location', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));
    register_post_meta('cvgroups', 'cv_blocks_meta_group_target', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));
    register_post_meta('cvgroups', 'cv_blocks_meta_group_time', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));
}
add_action('init', 'cv_group_block_init');
