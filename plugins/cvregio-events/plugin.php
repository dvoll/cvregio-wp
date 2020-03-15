<?php

/**
 * Plugin Name: CV Regio Termin Plugin
 * Plugin URI: http://cvjm-stift-quernheim.de/
 * Description: Termine für die CV Regio Seite.
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
 * Initialize
 */
function cvregio_events_loader()
{
	require __DIR__ . '/vendor/autoload.php';

	$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
	$dotenv->load();

	require_once plugin_dir_path(__FILE__) . 'plugin-settings-page.php';

	/**
	 * Load blocks
	 */
	require_once plugin_dir_path(__FILE__) . 'blocks/events/index.php';
}
add_action('plugins_loaded', 'cvregio_events_loader');

function cvregio_events_get_calendar_category_field_labels() {
	return [
		'title' => 'Kalender Kategorie Name',
		'description' => 'Trage hier den Text der Kategorie ein, die im Google Kalender angegeben wird. <br>Damit z.B. der Wordpress Kategorie `Beispiel` die richtigen Kalendereinträge zugewiesen werden, trage hier den Text ein, der in den Einträgen benutzt wird. Also für <code>[kategorie: beispiel]</code> den Wert <code>beispiel</code>',
	];
}


//add extra fields to category edit form callback function
function cvregio_events_add_edit_extra_category_fields( $tag ) {
    $t_id = $tag->term_id;
	$cat_meta = get_option( "category_meta_$t_id");
	$categoryLabels = cvregio_events_get_calendar_category_field_labels();
?>
<tr class="form-field form-required term-name-calendar-category">
	<th scope="row"><label for="calendar-category"><?php echo $categoryLabels['title'] ?></label></th>
	<td><input name="category-meta[calendar-category]" id="calendar-category" type="text" value="<?php echo $cat_meta['calendar-category'] ? $cat_meta['calendar-category'] : ''; ?>" size="40" aria-required="true">
	<p class="description"><?php echo $categoryLabels['description'] ?></p></td>
</tr>
<?php
}
add_action ( 'category_edit_form_fields', 'cvregio_events_add_edit_extra_category_fields');


//add extra fields to category edit form hook
function cvregio_events_add_add_extra_category_fields() {
	$categoryLabels = cvregio_events_get_calendar_category_field_labels();
?>
<div class="form-field term-calendar-category-wrap">
	<label for="tag-calendar-category"><?php echo $categoryLabels['title'] ?></label>
	<input name="category-meta[calendar-category]" id="tag-calendar-category" type="text" value="" size="40">
	<p><?php echo $categoryLabels['description'] ?></p>
</div>
<?php
}
add_action ( 'category_add_form_fields', 'cvregio_events_add_add_extra_category_fields');


function cvregio_events_save_extra_category_fields( $term_id ) {
	if ( isset( $_POST['category-meta'] ) ) {
		$t_id = $term_id;
		$categoryMeta = array();
		$categoryMeta['calendar-category'] = isset ($_POST['category-meta']['calendar-category'] ) ? $_POST['category-meta']['calendar-category'] : '';
		update_option( "category_meta_$t_id", $categoryMeta );
	}
}
add_action( 'edited_category', 'cvregio_events_save_extra_category_fields', 10, 2 );
add_action( 'create_category', 'cvregio_events_save_extra_category_fields', 10, 2 );


// Calendar endpoint to reset cache
// function cvregio_calendar_cache_reset_route() {
// 	register_rest_route( 'cvregio/v1', '/calendar-changed-hook', array(
// 		'methods'  => 'POST',
// 		'callback' => 'cvregio_reset_calendar_cache',
// 	) );
// }
// add_action( 'rest_api_init', 'cvregio_calendar_cache_reset_route');

