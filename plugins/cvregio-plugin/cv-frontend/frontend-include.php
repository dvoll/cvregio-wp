<?php
/* generated */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} 


wp_enqueue_script('cv-frontend-chunk-vendors', content_url() . '/plugins/cv-blocks/cv-frontend/chunk-vendors.92da230c.js', array(), '1.0', true );

wp_enqueue_script('cv-frontend-chunk-common', content_url() . '/plugins/cv-blocks/cv-frontend/chunk-common.9a33c47e.js', array(), '1.0', true );

wp_enqueue_script('cv-frontend-plugin', content_url() . '/plugins/cv-blocks/cv-frontend/plugin.9b7c2f7b.js', array(), '1.0', true );

wp_register_style(
    'cv-frontend-chunk-vendors',
    content_url() . '/plugins/cv-blocks/cv-frontend/chunk-vendors.23d90689.css',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-chunk-vendors');

wp_register_style(
    'cv-frontend-chunk-common',
    content_url() . '/plugins/cv-blocks/cv-frontend/chunk-common.7def096b.css',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-chunk-common');

wp_register_style(
    'cv-frontend-plugin',
    content_url() . '/plugins/cv-blocks/cv-frontend/plugin.982b2eef.css',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-plugin');
