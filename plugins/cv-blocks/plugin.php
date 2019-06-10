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
	 * Load Post Grid PHP
	 */
	require_once plugin_dir_path( __FILE__ ) . 'src/blocks/block-stage/index.php';
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

