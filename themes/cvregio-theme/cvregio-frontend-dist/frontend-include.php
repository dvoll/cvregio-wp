<?php
/* generated */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} 


wp_enqueue_script('cv-frontend-theme', content_url() . '/themes/cvregio-theme/cvregio-frontend-dist/theme.bundle.js', array(), '1.0', true );

wp_register_style(
    'cv-frontend-theme',
    content_url() . '/themes/cvregio-theme/cvregio-frontend-dist/theme.css',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-theme');

wp_register_style(
    'cv-frontend-theme',
    content_url() . '/themes/cvregio-theme/cvregio-frontend-dist/theme.bundle.asset.php',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-theme');
