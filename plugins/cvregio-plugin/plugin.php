<?php

/**
 * Plugin Name: CV Regio Plugin
 * Plugin URI: http://cvjm-stift-quernheim.de/
 * Description: Inhalts-Elemente für die CV Regio Seite.
 * Author: dvoll
 * Author URI: http://cvjm-stift-quernheim.de/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Initialize the blocks
 */
function cv_blocks_loader()
{
	/**
	 * Load the blocks functionality
	 */
	require_once plugin_dir_path(__FILE__) . 'init.php';

	/**
	 * Load partials
	 */
	require_once plugin_dir_path(__FILE__) . 'partials/index.php';

	/**
	 * Load blocks
	 */
	require_once plugin_dir_path(__FILE__) . 'blocks/groups/index.php';
	require_once plugin_dir_path(__FILE__) . 'blocks/news/index.php';
	require_once plugin_dir_path(__FILE__) . 'blocks/cv-stage/index.php';
	require_once plugin_dir_path(__FILE__) . 'blocks/groups/BlockGroupSummery.php';
}
add_action('plugins_loaded', 'cv_blocks_loader');



/**
 * Load the plugin textdomain
 */
// function cv_blocks_init() {
// 	load_plugin_textdomain( 'atomic-blocks', false, basename( dirname( __FILE__ ) ) . '/languages' );
// }
// add_action( 'init', 'cv_blocks_init' );

// function cv_blocks_frontend_loader()
// { 
// }

// // Hook: Frontend assets.
// add_action('enqueue_block_assets', 'cv_blocks_frontend_loader');

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




/**
 * Add image sizes
 */
function cv_blocks_image_sizes()
{
	// Post Grid Block.
	add_image_size('cv-blocks-card', 272, 168, true);
	// add_image_size( 'cv-blocks-groups-square', 600, 600, true );
}
add_action('after_setup_theme', 'cv_blocks_image_sizes');




// associate

function cvregio_blocks_register_associate_post_type()
{
	register_post_type(
		'cvassociates',
		array(
			'labels'      => array(
				'name'          => __('Mitarbeiter'),
				// 'singular_name' => __('Angebot'),
			),
			'menu_icon' => 'dashicons-welcome-widgets-menus',
			'public'      => true,
			'has_archive' => true,
			'hierarchical' => false,
			'rewrite'     => array('slug' => 'mitarbeiter'),
			'show_in_rest' => true,
			'supports' => array('editor', 'excerpt', 'page-attributes', 'author', 'custom-fields'),
			'template' => array(
				array('cv-blocks/cv-associate-template')
			),
			'template_lock' => 'all',
		)
	);
}
add_action('init', 'cvregio_blocks_register_associate_post_type');


// Add the custom columns to the book post type:
function cvregio_associates_set_custom_columns($columns)
{
	$author = $columns['author'];
	$date = $columns['date'];
	unset( $columns['author'] );
	unset( $columns['date'] );

	$columns['title'] = 'ID';
	$columns['lastname'] = 'Nachname';
	$columns['firstname'] = 'Vorname';
	$columns['author'] = $author;
	$columns['date'] = $date;

	return $columns;
}
add_filter('manage_cvassociates_posts_columns', 'cvregio_associates_set_custom_columns');

function cvregio_associates_set_custom_columns_content($column, $post_id)
{
	switch ($column) {
		case 'lastname':
			echo '<strong>'. get_post_meta($post_id, 'cvregio_meta_associate_lastname', true) . '</strong>';
			break;
		case 'firstname':
			echo '<strong>'. get_post_meta($post_id, 'cvregio_meta_associate_firstname', true) . '</strong>';
			break;
	}
}
// Add the data to the custom columns for the book post type:
add_action('manage_cvassociates_posts_custom_column', 'cvregio_associates_set_custom_columns_content', 10, 2);


function cvregio_associates_template_init()
{
	register_post_meta('cvassociates', 'cvregio_meta_associate_firstname', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	));
	register_post_meta('cvassociates', 'cvregio_meta_associate_lastname', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	));
	register_post_meta('cvassociates', 'cvregio_meta_associate_imageid', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	));
	register_post_meta('cvassociates', 'cvregio_meta_associate_contact_items', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	));
}
add_action('init', 'cvregio_associates_template_init');

function cvregio_associates_save_action($post_id) {
    // If this is a revision, get real post ID
    if ( $parent_id = wp_is_post_revision( $post_id ) ) 
		$post_id = $parent_id;

	$post = get_post($post_id);
		
	// Check if this post is in default category
	if ( get_post_type($post) === 'cvassociates' ) {
        // unhook this function so it doesn't loop infinitely
        remove_action( 'save_post_cvassociates', 'cvregio_associates_save_action' );
 
        // update the post, which calls save_post again
        wp_update_post( array( 'ID' => $post_id, 'post_title' =>  $post_id) );
 
        // re-hook this function
        add_action( 'save_post_cvassociates', 'cvregio_associates_save_action' );
    }
}
add_action( 'save_post_cvassociates', 'cvregio_associates_save_action' );

function cvregio_associates_sortable_columns( $columns ) {
	$columns['firstname'] = 'firstname';
	$columns['lastname'] = 'lastname';
	return $columns;
}
add_filter( 'manage_edit-cvassociates_sortable_columns', 'cvregio_associates_sortable_columns');

function cvregio_associates_posts_orderby( $query ) {
	if( ! is_admin() || ! $query->is_main_query() ) {
		return;
	}
	
	if ( 'lastname' === $query->get( 'orderby') ) {
		$query->set( 'orderby', 'meta_value' );
		$query->set( 'meta_key', 'cvregio_meta_associate_lastname' );
		// $query->set( 'meta_type', 'numeric' );
	}
	if ( 'firstname' === $query->get( 'orderby') ) {
		$query->set( 'orderby', 'meta_value' );
		$query->set( 'meta_key', 'cvregio_meta_associate_firstname' );
	}
}
add_action( 'pre_get_posts', 'cvregio_associates_posts_orderby' );
