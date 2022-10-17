<?php
/**
 * Plugin Name:       Ev. Region Kirchlengern Blocks Plugin
 * Description:       Blocks for EV. Region Kirchlengern
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Dario Voll
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ev-region22-blocks
 *
 * @package           ev-region22-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function evregio22_blocks_block_init() {
	register_block_type( __DIR__ . '/build/blocks/card-link' );
}
add_action( 'init', 'evregio22_blocks_block_init' );