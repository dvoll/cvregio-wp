<?php
/* generated */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} 


wp_enqueue_script('cv-frontend-commons~plugin~theme', content_url() . '/themes/cv-regio-theme/cvregio-frontend/commons~plugin~theme.bundle.js', array(), '1.0', true );

wp_enqueue_script('cv-frontend-theme', content_url() . '/themes/cv-regio-theme/cvregio-frontend/theme.bundle.js', array(), '1.0', true );

wp_register_style(
    'cv-frontend-commons~plugin~theme',
    content_url() . '/themes/cv-regio-theme/cvregio-frontend/commons~plugin~theme.css',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-commons~plugin~theme');

wp_register_style(
    'cv-frontend-theme',
    content_url() . '/themes/cv-regio-theme/cvregio-frontend/theme.css',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-theme');

wp_register_style(
    'cv-frontend-theme',
    content_url() . '/themes/cv-regio-theme/cvregio-frontend/theme.bundle.asset.php',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-theme');
