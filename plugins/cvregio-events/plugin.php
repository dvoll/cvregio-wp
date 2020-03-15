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
}
add_action('plugins_loaded', 'cvregio_events_loader');


// Calendar endpoint to reset cache
// function cvregio_calendar_cache_reset_route() {
// 	register_rest_route( 'cvregio/v1', '/calendar-changed-hook', array(
// 		'methods'  => 'POST',
// 		'callback' => 'cvregio_reset_calendar_cache',
// 	) );
// }
// add_action( 'rest_api_init', 'cvregio_calendar_cache_reset_route');

