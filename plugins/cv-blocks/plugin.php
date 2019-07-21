<?php
/**
 * Plugin Name: CV Regio Blocks
 * Plugin URI: http://cvjm-stift-quernheim.de/
 * Description: Inhalts-Elemente für die CV_regio Seite.
 * Author: dvoll
 * Author URI: http://cvjm-stift-quernheim.de/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Initialize the blocks
 */
function cv_blocks_loader() {
	/**
	 * Load the blocks functionality
	 */
	require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

	/**
	 * Load Getting Started page
	 */
	// require_once plugin_dir_path( __FILE__ ) . 'dist/getting-started/getting-started.php';

	/**
	 * Load Social Block PHP
	 */
	// require_once plugin_dir_path( __FILE__ ) . 'src/blocks/block-sharing/index.php';

	/**
	 * Load Groups Block PHP
	 */
	// require_once plugin_dir_path( __FILE__ ) . 'src/blocks/block-groups/index.php';

	/**
	 * Load 
	 */
	require_once plugin_dir_path( __FILE__ ) . 'src/blocks/block-stage/index.php';

	/**
	 * Load Post Grid PHP
	 */
	require_once plugin_dir_path( __FILE__ ) . 'src/blocks/block-group-detail/index.php';
}
add_action( 'plugins_loaded', 'cv_blocks_loader' );


/**
 * Load the plugin textdomain
 */
// function cv_blocks_init() {
// 	load_plugin_textdomain( 'atomic-blocks', false, basename( dirname( __FILE__ ) ) . '/languages' );
// }
// add_action( 'init', 'cv_blocks_init' );

function cv_blocks_frontend_loader() { // phpcs:ignore
	// Dependency to include the CSS after it. TODO: check if should be added.

	// wp_register_script('cv-frontend-components', plugins_url( 'frontend/dist/js', dirname( __FILE__ )), array(), '1.0', true );  
	// wp_enqueue_script('cv-frontend-components');  
	require_once plugin_dir_path( __FILE__ ) . '/cv-frontend/frontend-include.php';
}

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'cv_blocks_frontend_loader' );

function cv_blocks_groups_custom_post_type()
{
    register_post_type('cvgroups',
		array(
			'labels'      => array(
				'name'          => __('Angebote'),
				'singular_name' => __('Angebot'),
			),
			'public'      => true,
			'has_archive' => true,
			'hierarchical' => true,
			'rewrite'     => array( 'slug' => 'gruppen' ), 
			'show_in_rest' => true,
			'supports' => array('title', 'editor', 'excerpt', 'page-attributes', 'author', 'custom-fields' ),
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

function cv_group_block_init() {
    register_post_meta( 'cvgroups', 'cv_blocks_meta_group_location', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ) );
}
add_action( 'init', 'cv_group_block_init' );