<?php
/* generated */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} 


wp_enqueue_script('cv-frontend-plugin', content_url() . '/plugins/cvregio-plugin/cvregio-frontend-dist/plugin.bundle.js', array(), '1.0', true );

wp_register_style(
    'cv-frontend-plugin',
    content_url() . '/plugins/cvregio-plugin/cvregio-frontend-dist/plugin.css',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-plugin');

wp_register_style(
    'cv-frontend-plugin',
    content_url() . '/plugins/cvregio-plugin/cvregio-frontend-dist/plugin.bundle.asset.php',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-plugin');
