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
	require_once plugin_dir_path(__FILE__) . 'src/init.php';

	require_once plugin_dir_path(__FILE__) . 'src/partials/index.php';
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
	require_once plugin_dir_path(__FILE__) . 'src/blocks/block-groups/index.php';

	/**
	 * Load News Block PHP
	 */
	require_once plugin_dir_path(__FILE__) . 'src/blocks/block-news/index.php';

	/**
	 * Load 
	 */
	require_once plugin_dir_path(__FILE__) . 'src/blocks/block-stage/index.php';

	/**
	 * Load Post Grid PHP
	 */
	require_once plugin_dir_path(__FILE__) . 'src/blocks/block-group-detail/index.php';
}
add_action('plugins_loaded', 'cv_blocks_loader');


/**
 * Load the plugin textdomain
 */
// function cv_blocks_init() {
// 	load_plugin_textdomain( 'atomic-blocks', false, basename( dirname( __FILE__ ) ) . '/languages' );
// }
// add_action( 'init', 'cv_blocks_init' );

function cv_blocks_frontend_loader()
{ // phpcs:ignore
	// Dependency to include the CSS after it. TODO: check if should be added.

	// wp_register_script('cv-frontend-components', plugins_url( 'frontend/dist/js', dirname( __FILE__ )), array(), '1.0', true );  
	// wp_enqueue_script('cv-frontend-components');  
	require_once plugin_dir_path(__FILE__) . './cv-frontend/frontend-include.php';
}

// Hook: Frontend assets.
add_action('enqueue_block_assets', 'cv_blocks_frontend_loader');

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

// Add additional fields to users

function extra_user_profile_fields( $user ) { ?>
    <h3><?php _e("Extra profile information", "blank"); ?></h3>


    <table class="form-table">
    <tr>
        <th><label for="address"><?php _e("Address"); ?></label></th>
        <td>
            <input type="text" name="address" id="address" value="<?php echo esc_attr( get_the_author_meta( 'address', $user->ID ) ); ?>" class="regular-text" /><br />
            <span class="description"><?php _e("Please enter your address."); ?></span>
        </td>
    </tr>
    <tr>
        <th><label for="city"><?php _e("City"); ?></label></th>
        <td>
            <input type="text" name="city" id="city" value="<?php echo esc_attr( get_the_author_meta( 'city', $user->ID ) ); ?>" class="regular-text" /><br />
            <span class="description"><?php _e("Please enter your city."); ?></span>
        </td>
    </tr>
    <tr>
    <th><label for="postalcode"><?php _e("Postal Code"); ?></label></th>
        <td>
            <input type="text" name="postalcode" id="postalcode" value="<?php echo esc_attr( get_the_author_meta( 'postalcode', $user->ID ) ); ?>" class="regular-text" /><br />
            <span class="description"><?php _e("Please enter your postal code."); ?></span>
        </td>
    </tr>
    </table>

	<script>
		const $ = jQuery;
		const value = $('#adress');
		console.log({value});
		
	</script>
<?php }

// add_action( 'show_user_profile', 'extra_user_profile_fields' );
// add_action( 'edit_user_profile', 'extra_user_profile_fields' );


// Add associates as custom post type

function cv_blocks_associates_custom_post_type()
{
	register_post_type(
		'cvassociates',
		array(
			'labels'      => array(
				'name'          => __('Mitarbeiter'),
				'singular_name' => __('Mitarbeiter'),
			),
			'menu_icon' => 'dashicons-buddicons-buddypress-logo',
			'public'      => true,
			'has_archive' => true,
			'rewrite'     => array('slug' => 'mitarbeiter'),
			'show_in_rest' => true,
			'supports' => array('title', 'editor', 'excerpt', 'page-attributes', 'author', 'custom-fields', 'thumbnail'),
			'template' => array(
				// array('cv-blocks/cv-group-detail')
				array( 'core/image', array(
					'align' => 'left',
				) ),
				array( 'core/heading', array(
					'placeholder' => 'The name...',
				) ),
				array( 'cv-blocks/cv-associate-template', array(
				) ),
			),
			'template_lock' => 'all',
		)
	);
}
add_action('init', 'cv_blocks_associates_custom_post_type');

