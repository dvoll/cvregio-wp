<?php
/* generated */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} 


wp_enqueue_script('cv-frontend-chunk-vendors', content_url() . '/themes/cv-regio-theme/cv-frontend/chunk-vendors.4f15e53b.js', array(), '1.0', true );

wp_enqueue_script('cv-frontend-chunk-common', content_url() . '/themes/cv-regio-theme/cv-frontend/chunk-common.59138603.js', array(), '1.0', true );

wp_enqueue_script('cv-frontend-app', content_url() . '/themes/cv-regio-theme/cv-frontend/app.5e4ca54b.js', array(), '1.0', true );

wp_register_style(
    'cv-frontend-chunk-vendors',
    content_url() . '/themes/cv-regio-theme/cv-frontend/chunk-vendors.23d90689.css',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-chunk-vendors');

wp_register_style(
    'cv-frontend-chunk-common',
    content_url() . '/themes/cv-regio-theme/cv-frontend/chunk-common.e86262cf.css',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-chunk-common');
