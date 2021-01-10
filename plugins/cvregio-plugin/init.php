<?php

/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function cv_blocks_block_assets()
{ // phpcs:ignore
	// Styles.
	// wp_enqueue_style(
	// 	'cv-blocks-style-css', // Handle.
	// 	plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
	// 	array( 'wp-editor' ) // Dependency to include the CSS after it.
	// );
}

// Hook: Frontend assets.
// add_action( 'enqueue_block_assets', 'cv_blocks_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function cv_blocks_editor_assets()
{
	$frontend_asset_file = include(plugin_dir_path(__FILE__) . 'cvregio-frontend-dist/plugin.bundle.asset.php');

	wp_register_script(
		'cv-regio-js-common',
		content_url() . '/plugins/cvregio-plugin/cvregio-frontend-dist/714.bundle.js',
		['wp-api-fetch', 'wp-blocks', 'wp-components', 'wp-editor', 'wp-element', 'wp-polyfill', 'wp-url'],
		$frontend_asset_file['version'],
		true
	);
	wp_enqueue_script('cv-regio-js-common');

	wp_register_script(
		'cv-regio-plugin-js',
		content_url() . '/plugins/cvregio-plugin/cvregio-frontend-dist/plugin.bundle.js',
		['cv-regio-js-common'],
		$frontend_asset_file['version'],
		true
	);
	wp_enqueue_script('cv-regio-plugin-js');
}
add_action('enqueue_block_assets', 'cv_blocks_editor_assets');


function cv_blocks_init_styles()
{


	$frontend_asset_file = include(plugin_dir_path(__FILE__) . 'cvregio-frontend-dist/plugin.bundle.asset.php');

	wp_register_style(
		'cv-regio-css-common',
		content_url() . '/plugins/cvregio-plugin/cvregio-frontend-dist/714.css',
		[],
		$frontend_asset_file['version'],
	);
	wp_enqueue_style('cv-regio-css-common');

	wp_register_style(
		'cv-regio-plugin-css',
		content_url() . '/plugins/cvregio-plugin/cvregio-frontend-dist/plugin.css',
		['cv-regio-css-common'],
		$frontend_asset_file['version']
	);
	wp_enqueue_style('cv-regio-plugin-css');
}

add_action('wp_enqueue_scripts', 'cv_blocks_init_styles', 11);
add_action('enqueue_block_editor_assets', 'cv_blocks_init_styles', 11);
