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

	// require_once plugin_dir_path(__FILE__) . 'src/partials/index.php';
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
	// require_once plugin_dir_path(__FILE__) . 'src/blocks/block-groups/index.php';

	/**
	 * Load News Block PHP
	 */
	// require_once plugin_dir_path(__FILE__) . 'src/blocks/block-news/index.php';

	/**
	 * Load 
	 */
	// require_once plugin_dir_path(__FILE__) . 'src/blocks/block-stage/index.php';

	/**
	 * Load Post Grid PHP
	 */
	// require_once plugin_dir_path(__FILE__) . 'src/blocks/block-group-detail/index.php';
}
add_action('plugins_loaded', 'cv_blocks_loader');
