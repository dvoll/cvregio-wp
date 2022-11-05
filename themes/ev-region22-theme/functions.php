<?php

/**
 * Ev. Region 22 Block Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Two
 * @since Ev. Region 22 Block Theme 1.0
 */


if (!function_exists('evregion22theme_support')) :

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since Ev. Region 22 Block Theme 1.0
	 *
	 * @return void
	 */
	function evregion22theme_support()
	{

		// Add support for block styles.
		add_theme_support('wp-block-styles');

		// Enqueue editor styles.
		add_editor_style('style.css');
	}

endif;

add_action('after_setup_theme', 'evregion22theme_support');

if (!function_exists('evregion22theme_styles')) :

	/**
	 * Enqueue styles.
	 *
	 * @since Ev. Region 22 Block Theme 1.0
	 *
	 * @return void
	 */
	function evregion22theme_styles()
	{
		// Register theme stylesheet.
		$theme_version = wp_get_theme()->get('Version');

		$version_string = is_string($theme_version) ? $theme_version : false;
		wp_register_style(
			'ev-region22-theme-style',
			get_template_directory_uri() . '/style.css',
			array(),
			$version_string
		);

		// Enqueue theme stylesheet.
		wp_enqueue_style('ev-region22-theme-style');
	}

endif;

add_action('wp_enqueue_scripts', 'evregion22theme_styles');



function evregion22theme_metatagtheme() {
	echo '<meta name="theme-color" content="#F7F3F1">';
}

add_action('wp_head', 'evregion22theme_metatagtheme');
