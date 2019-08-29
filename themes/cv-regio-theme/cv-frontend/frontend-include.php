<?php
/* generated */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} 


wp_enqueue_script('cv-frontend-chunk-vendors', content_url() . '/themes/cv-regio-theme/cv-frontend/chunk-vendors.4f15e53b.js', array(), '1.0', true );

wp_enqueue_script('cv-frontend-chunk-common', content_url() . '/themes/cv-regio-theme/cv-frontend/chunk-common.f45b7455.js', array(), '1.0', true );

wp_enqueue_script('cv-frontend-app', content_url() . '/themes/cv-regio-theme/cv-frontend/app.358476da.js', array(), '1.0', true );

wp_register_style(
    'cv-frontend-chunk-vendors',
    content_url() . '/themes/cv-regio-theme/cv-frontend/chunk-vendors.23d90689.css',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-chunk-vendors');

wp_register_style(
    'cv-frontend-chunk-common',
    content_url() . '/themes/cv-regio-theme/cv-frontend/chunk-common.b2bb478f.css',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-chunk-common');
