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
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function cv_blocks_block_assets() { // phpcs:ignore
	// Styles.
	wp_enqueue_style(
		'cv-blocks-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);
	// wp_enqueue_script('vue-js', 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js');
	// wp_enqueue_script(
	// 	'custom-vue', 
	// 	plugins_url( 'libs/dvll-vue.js', dirname( __FILE__ ))
	// );
	// wp_register_script('myscript', plugins_url( 'libs/dvll-vue.js', dirname( __FILE__ )), array(), '1.0', true );  
	// wp_enqueue_script('myscript');  
	// wp_enqueue_script(
	// 	'custom-vue', 
	// 	plugins_url( 'libs/dvll-vue.js', dirname( __FILE__ ),
	// 	array(),
	// 	false,
	// 	true)
	// );
}

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'cv_blocks_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function cv_blocks_editor_assets() { // phpcs:ignore
	// Scripts.
	wp_enqueue_script(
		'cv-blocks-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: File modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'cv-blocks-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);
}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'cv_blocks_editor_assets' );
