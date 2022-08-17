<?php

if ( ! function_exists( 'cvregioblockchild_styles' ) ) :

	/**
	 * Enqueue styles.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function cvregioblockchild_styles() {
		// Register theme stylesheet.
		$theme_version = wp_get_theme()->get( 'Version' );

		$version_string = is_string( $theme_version ) ? $theme_version : false;
		wp_register_style(
			'cvregioblockchild-style',
			get_stylesheet_directory_uri() . '/style.css',
			array('twentytwentytwo-style'),
			$version_string
		);

		// Enqueue theme stylesheet.
		wp_enqueue_style( 'cvregioblockchild-style' );

	}

endif;

add_action( 'wp_enqueue_scripts', 'cvregioblockchild_styles' );

