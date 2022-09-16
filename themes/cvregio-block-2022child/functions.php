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
			array(), // array('twentytwentytwo-style'),
			$version_string
		);

		// Enqueue theme stylesheet.
		wp_enqueue_style( 'cvregioblockchild-style' );

	}

endif;

add_action( 'wp_enqueue_scripts', 'cvregioblockchild_styles' );

if ( ! function_exists( 'cvregioblockchild_script' ) ) :

	/**
	 * Enqueue script.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function cvregioblockchild_script() {
		// Register theme scriptheet.
		$theme_version = wp_get_theme()->get( 'Version' );

		$version_string = is_string( $theme_version ) ? $theme_version : false;
		wp_register_script(
			'cvregioblockchild-script',
			get_stylesheet_directory_uri() . '/main.js',
			array(),
			$version_string
		);

		// Enqueue theme scriptheet.
		wp_enqueue_script( 'cvregioblockchild-script' );

	}

endif;

add_action( 'wp_enqueue_scripts', 'cvregioblockchild_script' );

